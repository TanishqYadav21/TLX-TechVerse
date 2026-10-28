"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <section className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:p-9">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Account recovery</p>
        <h1 className="mt-3 text-3xl font-black text-slate-950">Forgot your password?</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Enter your email and we will send password reset instructions.</p>
        {submitted ? (
          <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">If an account exists for that email, reset instructions are on the way.</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <label className="block text-sm font-bold text-slate-700" htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700">Send reset link</button>
          </form>
        )}
        <Link href="/login" className="mt-6 inline-block text-sm font-bold text-slate-500 hover:text-blue-600">Back to login</Link>
      </section>
    </main>
  );
}
