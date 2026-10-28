"use client";

import { useState } from "react";
import { Mail, Loader2, ArrowRight } from "lucide-react";
import PasswordInput from "./PasswordInput";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(
          data.message || "Invalid email or password."
        );
        setLoading(false);
        return;
      }

      // Save JWT
      localStorage.setItem("token", data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to the server. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-slate-300"
        >
          Email Address
        </label>

        <div className="group relative">
          <Mail
            size={18}
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-500
              transition-colors
              duration-300
              group-focus-within:text-blue-400
            "
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              pl-11
              pr-4
              text-sm
              text-white
              outline-none
              placeholder:text-slate-600
              transition-all
              duration-300
              focus:border-blue-500/50
              focus:bg-white/[0.06]
              focus:shadow-[0_0_25px_rgba(59,130,246,0.10)]
            "
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-300"
        >
          Password
        </label>

        <PasswordInput
          value={form.password}
          onChange={handleChange}
        />
      </div>

      {/* Error */}
      {error && (
        <div
          className="
            rounded-xl
            border
            border-red-400/20
            bg-red-500/[0.06]
            px-4
            py-3
            text-sm
            leading-6
            text-red-300
          "
        >
          {error}
        </div>
      )}

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          group
          relative
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-violet-600
          font-semibold
          text-white
          shadow-[0_10px_35px_rgba(59,130,246,0.20)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_15px_45px_rgba(59,130,246,0.30)]
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {/* Button Glow */}
        <span
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-white/0
            via-white/10
            to-white/0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Signing in...
          </>
        ) : (
          <>
            Login
            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </>
        )}
      </button>
    </form>
  );
}