import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import fs from "fs/promises";
import os from "os";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs";

type Language =
  | "cpp"
  | "c"
  | "java"
  | "python"
  | "javascript";

const DOCKER =
  process.env.DOCKER_PATH ||
  "C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe";

const configs: Record<
  Language,
  {
    image: string;
    file: string;
    command: string;
  }
> = {
  cpp: {
    image: "gcc:12-bookworm",
    file: "main.cpp",
    command:
      "g++ -std=c++17 /workspace/main.cpp -O2 -o /tmp/program && /tmp/program",
  },

  c: {
    image: "gcc:12-bookworm",
    file: "main.c",
    command:
      "gcc -std=c11 /workspace/main.c -O2 -o /tmp/program && /tmp/program",
  },

  python: {
    image: "python:3.12",
    file: "main.py",
    command:
      "python /workspace/main.py",
  },

  javascript: {
    image: "node:20",
    file: "main.js",
    command:
      "node /workspace/main.js",
  },

  java: {
    image: "eclipse-temurin:21-jdk",
    file: "Main.java",
    command:
      "mkdir -p /tmp/java && javac /workspace/Main.java -d /tmp/java && java -cp /tmp/java Main",
  },
};

function executeDocker(
  config: {
    image: string;
    file: string;
    command: string;
  },
  workDir: string,
  stdin: string
) {
  return new Promise<{
    stdout: string;
    stderr: string;
    code: number | null;
    timedOut: boolean;
  }>((resolve) => {
    const dockerArgs = [
      "run",
      "--rm",

      "--network",
      "none",

      "--memory",
      "256m",

      "--cpus",
      "1",

      "--pids-limit",
      "64",

      "--cap-drop",
      "ALL",

      "--security-opt",
      "no-new-privileges",

      "--tmpfs",
      "/tmp:rw,nosuid,nodev,size=64m",

      "-v",
      `${workDir}:/workspace:ro`,

      config.image,

      "sh",
      "-c",
      config.command,
    ];

    console.log(
      "Starting Docker:",
      DOCKER
    );

    console.log(
      "Docker args:",
      dockerArgs
    );

    const child = spawn(
      DOCKER,
      dockerArgs,
      {
        windowsHide: true,
      }
    );

    let stdout = "";
    let stderr = "";
    let timedOut = false;

    const timer = setTimeout(() => {
      timedOut = true;

      try {
        child.kill();
      } catch {}
    }, 10000);

    child.stdout.on(
      "data",
      (data) => {
        stdout += data.toString();
      }
    );

    child.stderr.on(
      "data",
      (data) => {
        stderr += data.toString();
      }
    );

    child.on(
      "error",
      (error) => {
        clearTimeout(timer);

        resolve({
          stdout,
          stderr:
            `Docker process could not start.\n\n${error.message}`,
          code: null,
          timedOut: false,
        });
      }
    );

    child.on(
      "close",
      (code) => {
        clearTimeout(timer);

        resolve({
          stdout,
          stderr,
          code,
          timedOut,
        });
      }
    );

    if (stdin) {
      child.stdin.write(stdin);
    }

    child.stdin.end();
  });
}

export async function POST(
  req: NextRequest
) {
  let workDir = "";

  try {
    const body = await req.json();

    const language =
      body.language as Language;

    const code = body.code;

    const stdin =
      body.stdin ?? "";

    if (!language) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Language is required.",
        },
        { status: 400 }
      );
    }

    if (!configs[language]) {
      return NextResponse.json(
        {
          success: false,
          message:
            `Unsupported language: ${language}`,
        },
        { status: 400 }
      );
    }

    if (typeof code !== "string") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Code is required.",
        },
        { status: 400 }
      );
    }

    const config =
      configs[language];

    workDir = path.join(
      os.tmpdir(),
      `tlx-${crypto.randomUUID()}`
    );

    await fs.mkdir(
      workDir,
      {
        recursive: true,
      }
    );

    await fs.writeFile(
      path.join(
        workDir,
        config.file
      ),
      code,
      "utf8"
    );

    const result =
      await executeDocker(
        config,
        workDir,
        String(stdin)
      );

    if (result.timedOut) {
      return NextResponse.json({
        success: false,
        message:
          "Time Limit Exceeded",
        run: {
          stdout:
            result.stdout,
          stderr:
            "Program exceeded the 10 second execution limit.",
          code: null,
        },
      });
    }

    if (
      result.code !== 0
    ) {
      return NextResponse.json({
        success: false,
        message:
          "Execution failed.",
        run: {
          stdout:
            result.stdout,
          stderr:
            result.stderr ||
            `Process exited with code ${result.code}.`,
          code: result.code,
        },
      });
    }

    return NextResponse.json({
      success: true,

      run: {
        stdout:
          result.stdout,
        stderr:
          result.stderr,
        code:
          result.code,
      },
    });
  } catch (error) {
    console.error(
      "EXECUTION API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Execution server error.",
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  } finally {
    if (workDir) {
      try {
        await fs.rm(
          workDir,
          {
            recursive: true,
            force: true,
          }
        );
      } catch {}
    }
  }
}