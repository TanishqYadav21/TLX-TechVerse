"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import {
  Play,
  CheckCircle,
  Copy,
  RotateCcw,
} from "lucide-react";

type Language =
  | "cpp"
  | "c"
  | "java"
  | "python"
  | "javascript";

type CodeEditorProps = {
  question?: unknown;
};

const starterCodes: Record<Language, string> = {
  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {

    return 0;
}`,

  c: `#include <stdio.h>

int main() {

    return 0;
}`,

  java: `public class Main {

    public static void main(String[] args) {

    }

}`,

  python: `def main():
    pass


if __name__ == "__main__":
    main()`,

  javascript: `function main() {

}

main();`,
};

const languageVersions: Record<Language, string> = {
  cpp: "10.2.0",
  c: "10.2.0",
  java: "15.0.2",
  python: "3.12.0",
  javascript: "20.11.1",
};

export default function CodeEditor({ question: _question }: CodeEditorProps) {
  const [language, setLanguage] =
    useState<Language>("cpp");

  const [code, setCode] = useState(
    starterCodes.cpp
  );

  const [input, setInput] = useState("");

  const [output, setOutput] = useState(
    "Click Run to execute your code."
  );

  const [loading, setLoading] = useState(false);

  // --------------------------------
  // Change Language
  // --------------------------------

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setCode(starterCodes[lang]);
    setOutput(
      "Click Run to execute your code."
    );
  };

  // --------------------------------
  // Copy Code
  // --------------------------------

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code Copied!");
    } catch (error) {
      console.error(
        "Copy Error:",
        error
      );
    }
  };

  // --------------------------------
  // Reset Code
  // --------------------------------

  const resetCode = () => {
    setCode(starterCodes[language]);
    setOutput(
      "Editor Reset Successfully."
    );
  };

  // --------------------------------
  // Run Code
  // --------------------------------

  const runCode = async () => {
    try {
      setLoading(true);
      setOutput("Running...");

      const response = await fetch(
        "/api/execute",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            language,
            version:
              languageVersions[language],
            code,
            stdin: input,
          }),
        }
      );

      const data = await response.json();

      console.log(
        "Execution Response:",
        data
      );

      // API Error
      if (
        !response.ok ||
        data.success === false
      ) {
        setOutput(
          data?.message ||
            data?.error ||
            "Execution failed."
        );

        return;
      }

      // Compilation Error
      if (data.compile?.stderr) {
        setOutput(
          `Compilation Error\n\n${data.compile.stderr}`
        );

        return;
      }

      // Runtime Error
      if (data.run?.stderr) {
        setOutput(
          `Runtime Error\n\n${data.run.stderr}`
        );

        return;
      }

      // Normal Output
      const stdout =
        data.run?.stdout ?? "";

      if (stdout.trim() === "") {
        setOutput(
          "Program produced no output."
        );
      } else {
        setOutput(stdout);
      }
    } catch (error) {
      console.error(
        "Execution Error:",
        error
      );

      setOutput(
        error instanceof Error
          ? `Execution Error\n\n${error.message}`
          : "Execution Error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-6">
      <div className="overflow-hidden rounded-2xl border bg-white shadow">

        {/* Toolbar */}

        <div className="flex items-center justify-between border-b bg-slate-900 p-4">

          {/* Language */}

          <div className="flex gap-3">
            <select
              value={language}
              onChange={(e) =>
                changeLanguage(
                  e.target.value as Language
                )
              }
              className="rounded-lg bg-slate-800 px-4 py-2 text-white outline-none"
            >
              <option value="cpp">
                C++
              </option>

              <option value="c">
                C
              </option>

              <option value="java">
                Java
              </option>

              <option value="python">
                Python
              </option>

              <option value="javascript">
                JavaScript
              </option>
            </select>
          </div>

          {/* Actions */}

          <div className="flex gap-3">

            {/* Copy */}

            <button
              type="button"
              onClick={copyCode}
              className="flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white transition hover:bg-slate-600"
            >
              <Copy size={18} />
              Copy
            </button>

            {/* Reset */}

            <button
              type="button"
              onClick={resetCode}
              className="flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
            >
              <RotateCcw size={18} />
              Reset
            </button>

            {/* Run */}

            <button
              type="button"
              onClick={runCode}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Play size={18} />

              {loading
                ? "Running..."
                : "Run"}
            </button>

            {/* Submit */}

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              <CheckCircle size={18} />
              Submit
            </button>

          </div>
        </div>

        {/* Monaco Editor */}

        <Editor
          height="65vh"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={(value) =>
            setCode(value || "")
          }
          options={{
            fontSize: 16,

            minimap: {
              enabled: false,
            },

            automaticLayout: true,

            scrollBeyondLastLine: false,

            tabSize: 4,

            wordWrap: "on",

            padding: {
              top: 16,
              bottom: 16,
            },
          }}
        />

        {/* Custom Input */}

        <div className="border-t bg-white p-5">

          <h2 className="mb-3 text-lg font-semibold text-slate-800">
            Custom Input
          </h2>

          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            rows={4}
            placeholder="Enter custom input..."
            className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />

        </div>

        {/* Output */}

        <div className="border-t bg-slate-950 p-5">

          <h2 className="mb-3 text-lg font-semibold text-white">
            Output
          </h2>

          <pre className="min-h-[140px] overflow-auto whitespace-pre-wrap rounded-lg bg-black p-4 font-mono text-green-400">
            {output}
          </pre>

        </div>

      </div>
    </div>
  );
}