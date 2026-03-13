"use client";

import { useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const PAGES = ["/", "/events", "/peers", "/live"];
const SWIPE_THRESHOLD = 80; // minimum px to trigger navigation

export default function SwipeNavigator({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return;

    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;

    // Only trigger if horizontal swipe is dominant (not scrolling)
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > Math.abs(dx) * 0.7) return;

    // Find current page index — handle sub-routes like /opponents/xxx
    let currentIdx = PAGES.indexOf(pathname);
    if (currentIdx === -1) {
      // Try prefix match for sub-routes
      currentIdx = PAGES.findIndex((p, i) => i > 0 && pathname.startsWith(p));
      if (currentIdx === -1) return;
    }

    if (dx < 0 && currentIdx < PAGES.length - 1) {
      // Swipe left → next page
      router.push(PAGES[currentIdx + 1]);
    } else if (dx > 0 && currentIdx > 0) {
      // Swipe right → previous page
      router.push(PAGES[currentIdx - 1]);
    }
  }, [pathname, router]);

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
}
