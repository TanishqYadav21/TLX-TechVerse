"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
} from "lucide-react";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
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

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://tlx-techverse-backend.onrender.com/api/auth/signup",
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
          data.message || "Unable to create your account."
        );
        return;
      }

      setForm({
        name: "",
        email: "",
        password: "",
      });

      setShowPassword(false);

      alert("Account Created Successfully 🎉");
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2"
    >
      {/* Full Name */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="text-sm font-medium text-slate-300"
        >
          Full Name
        </label>

        <div className="group relative">
          <User
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
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className="
              h-9
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

      {/* Email */}
      <div className="space-y-1">
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
              h-9
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
      <div className="space-y-1">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-300"
        >
          Password
        </label>

        <div className="group relative">
          <Lock
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
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            className="
              h-9
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              pl-11
              pr-12
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

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-500
              transition-colors
              duration-200
              hover:text-blue-400
            "
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
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
            py-2
            text-sm
            leading-5
            text-red-300
          "
        >
          {error}
        </div>
      )}

      {/* Create Account Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          group
          relative
          flex
          h-10
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
        {/* Button Shine */}
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
            Creating Account...
          </>
        ) : (
          <>
            Create Account

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
