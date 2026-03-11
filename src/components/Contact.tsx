"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/4a8e7d2f1b3c5e9d0a6f8b4c2e7d1a3f", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        // Fallback: direct submission
        form.action = "https://formsubmit.co/tony13310@gmail.com";
        form.method = "POST";
        form.submit();
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-3">
          <span className="gradient-text">Contact</span>
        </h2>
        <p className="text-white/40 text-lg">
          Interested in recruiting or have questions? Get in touch.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-border bg-[#12121a] rounded-2xl p-8"
      >
        {status === "sent" ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-white/90 mb-2">Message Sent!</h3>
            <p className="text-white/50">Thank you for reaching out. We&apos;ll get back to you soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all text-sm"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden fields for FormSubmit */}
            <input type="hidden" name="_subject" value="New message from rianwei.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/50 text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/50 text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/50 text-sm font-medium mb-2">Organization</label>
              <input
                type="text"
                name="organization"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
                placeholder="University / Club / Other"
              />
            </div>

            <div>
              <label className="block text-white/50 text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-10 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
}
