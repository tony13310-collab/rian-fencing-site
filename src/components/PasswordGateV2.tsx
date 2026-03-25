"use client";

import { useState, useEffect, useRef } from "react";
import pkg from "../../package.json";

const PASS_HASH = "5498b2826dae40737f36eb76bb80f2a711b3afee710fb7b80a89cbeaf88c569d";

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// Spark particle component
function Sparks({ active }: { active: boolean }) {
  if (!active) return null;
  const sparks = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * 360;
    const distance = 80 + Math.random() * 120;
    const size = 2 + Math.random() * 4;
    const duration = 0.4 + Math.random() * 0.6;
    const delay = Math.random() * 0.15;
    return (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#fff',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animation: `spark-fly ${duration}s ${delay}s ease-out forwards`,
          // @ts-expect-error css custom property
          '--spark-x': `${Math.cos(angle * Math.PI / 180) * distance}px`,
          '--spark-y': `${Math.sin(angle * Math.PI / 180) * distance}px`,
        }}
      />
    );
  });
  return <>{sparks}</>;
}

export default function PasswordGateV2({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);
  const [phase, setPhase] = useState<'charge' | 'clash' | 'reveal'>('charge');
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("rw_auth");
    if (stored === "1") {
      setUnlocked(true);
    }
    setChecking(false);
  }, []);

  // Animation sequence
  useEffect(() => {
    if (unlocked || checking) return;
    // Phase 1: charge (videos run from sides to center) — 1.5s
    const t1 = setTimeout(() => setPhase('clash'), 1500);
    // Phase 2: clash (flash + sparks) — 0.8s
    const t2 = setTimeout(() => setPhase('reveal'), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [unlocked, checking]);

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
      {/* Inject keyframes */}
      <style>{`
        @keyframes charge-left {
          0% { transform: translateX(-100vw) scaleX(1); opacity: 1; }
          100% { transform: translateX(0) scaleX(1); opacity: 1; }
        }
        @keyframes charge-right {
          0% { transform: translateX(100vw) scaleX(-1); opacity: 1; }
          100% { transform: translateX(0) scaleX(-1); opacity: 1; }
        }
        @keyframes clash-flash {
          0% { opacity: 0; }
          20% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes clash-ring {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
        }
        @keyframes spark-fly {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--spark-x)), calc(-50% + var(--spark-y))) scale(0); opacity: 0; }
        }
        @keyframes reveal-up {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-out-fencers {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes screen-shake {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-4px, 2px); }
          20% { transform: translate(4px, -2px); }
          30% { transform: translate(-3px, -3px); }
          40% { transform: translate(3px, 3px); }
          50% { transform: translate(-2px, 1px); }
          60% { transform: translate(2px, -1px); }
          70% { transform: translate(-1px, 2px); }
          80% { transform: translate(1px, -1px); }
          90% { transform: translate(0px, 1px); }
        }
      `}</style>

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

      {/* === CHARGING FENCERS === */}
      {phase !== 'reveal' && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={phase === 'clash' ? { animation: 'screen-shake 0.5s ease-out' } : undefined}
        >
          {/* Left fencer — charges from left */}
          <video
            ref={leftRef}
            src="/centaur-fencer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute"
            style={{
              height: 180,
              left: 'calc(50% - 90px)',
              top: 'calc(50% - 90px)',
              animation: phase === 'charge'
                ? 'charge-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                : 'fade-out-fencers 0.4s ease-out forwards',
            }}
          />
          {/* Right fencer — charges from right, mirrored */}
          <video
            ref={rightRef}
            src="/centaur-fencer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute"
            style={{
              height: 180,
              left: 'calc(50% - 90px)',
              top: 'calc(50% - 90px)',
              animation: phase === 'charge'
                ? 'charge-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                : 'fade-out-fencers 0.4s ease-out forwards',
            }}
          />
        </div>
      )}

      {/* === CLASH EFFECTS === */}
      {phase === 'clash' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          {/* White flash */}
          <div
            className="absolute inset-0 bg-white"
            style={{ animation: 'clash-flash 0.6s ease-out forwards' }}
          />
          {/* Expanding ring */}
          <div
            className="absolute w-40 h-40 rounded-full border-2 border-cyan-400"
            style={{
              left: '50%',
              top: '50%',
              animation: 'clash-ring 0.8s ease-out forwards',
            }}
          />
          <div
            className="absolute w-40 h-40 rounded-full border border-purple-400"
            style={{
              left: '50%',
              top: '50%',
              animation: 'clash-ring 0.8s 0.1s ease-out forwards',
            }}
          />
          {/* Sparks */}
          <div className="relative">
            <Sparks active={true} />
          </div>
        </div>
      )}

      {/* === LOGIN FORM (revealed after clash) === */}
      <div
        className="relative z-10 max-w-sm w-full text-center"
        style={{
          opacity: phase === 'reveal' ? 1 : 0,
          animation: phase === 'reveal' ? 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : undefined,
          pointerEvents: phase === 'reveal' ? 'auto' : 'none',
        }}
      >
        <div className="mb-6">
          <video src="/centaur-fencer.mp4" autoPlay loop muted playsInline style={{ height: 120, width: 'auto', display: 'inline-block' }} />
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
