"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  // Hide on homepage (Hero has its own buttons)
  if (pathname === "/") return null;

  const links = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Peers", href: "/peers" },
    { label: "Live", href: "/live" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-center gap-2">
        {links.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                active
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
