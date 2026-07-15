"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DemoModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prevent scrolling behind modal
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setMounted(false);
    // Small timeout for fade-out animation before navigation
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Glassmorphic Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl transition-all duration-300 ${
          mounted ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
