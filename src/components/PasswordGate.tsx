"use client";

import { useState, useEffect } from "react";

const PASS_HASH = "1cd683f8ec18781985cd2f9347ba8e1b6058ba3d7a15054c8d83bb8375b0559e"; // sha256 of password

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if already unlocked
    const stored = sessionStorage.getItem("rw_auth");
    if (stored === "1") {
      setUnlocked(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(input.trim());
    if (hash === PASS_HASH) {
      sessionStorage.setItem("rw_auth", "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (checking) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
      <div className="max-w-sm w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🤺</div>
          <h1
            className="text-4xl font-black gradient-text mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            Rian Wei
          </h1>
          <p className="text-white/40 text-sm">Enter password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-center text-lg placeholder-white/30 focus:outline-none transition-colors ${
              error ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-cyan-500/50"
            }`}
          />
          {error && (
            <p className="text-red-400 text-sm">Incorrect password</p>
          )}
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            Enter
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-white/30 text-xs mb-3">Don&apos;t have the password?</p>
          <a
            href="#contact-gate"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact-gate");
              if (el) el.classList.toggle("hidden");
            }}
            className="inline-block px-5 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm font-medium hover:border-cyan-500/30 hover:text-cyan-400 transition-all"
          >
            ✉️ Contact Me
          </a>

          <form
            id="contact-gate"
            action="https://formsubmit.co/tony13310@gmail.com"
            method="POST"
            className="hidden mt-4 space-y-3 text-left"
          >
            <input type="hidden" name="_subject" value="[rianwei.com] Password Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://rianwei.com" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-500/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-500/50"
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={2}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 focus:outline-none focus:border-cyan-500/50 resize-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white/80 text-sm font-medium hover:bg-white/15 transition-colors"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
