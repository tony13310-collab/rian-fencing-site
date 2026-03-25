"use client";

import { useState, useEffect } from "react";
import pkg from "../../package.json";


const PASS_HASH = "5498b2826dae40737f36eb76bb80f2a711b3afee710fb7b80a89cbeaf88c569d"; // sha256 of password

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
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)",
            bottom: "-80px",
            left: "-80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-sm w-full text-center">
        <div className="mb-6">
          <video src="/centaur-fencer.mp4" autoPlay loop muted playsInline style={{ height: 150, width: 'auto', display: 'inline-block' }} />
        </div>

        <div className="mb-8">
          <h1
            className="text-4xl font-black gradient-text mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            Rian Wei
          </h1>
          <p className="text-white/70 text-sm">Enter password to continue</p>
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
          <p className="text-white/60 text-xs mb-3">Don&apos;t have the password?</p>
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
        <p className="mt-8 text-white/30 text-xs">
          v{pkg.version} · Updated {new Date().toLocaleString("en-US", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).replace(",", "")}
        </p>
      </div>
    </div>
  );
}
