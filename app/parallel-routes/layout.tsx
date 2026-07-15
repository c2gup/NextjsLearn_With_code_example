import React from "react";
import Link from "next/link";

export default function ParallelRoutesLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Info Header */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-8 md:p-10">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative z-10 space-y-3">
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/30">
              Next.js Layout Feature
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Parallel Routes Dashboard
            </h1>
            <p className="text-base text-slate-300 max-w-3xl">
              Parallel Routes allow you to simultaneously render multiple pages (slots) in the same layout. Each slot behaves as an independent route segment and can be navigated independently or updated synchronously.
            </p>
          </div>
        </div>

        {/* Dashboard Sub-navigation (to switch analytics views) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-4 gap-4">
          <div className="flex gap-2 bg-slate-900 border border-white/5 rounded-2xl p-1 text-sm font-medium">
            <Link
              href="/parallel-routes"
              className="rounded-xl px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              Dashboard Home
            </Link>
            <Link
              href="/parallel-routes/visitors"
              className="rounded-xl px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              Analytics: Visitors
            </Link>
            <Link
              href="/parallel-routes/revenue"
              className="rounded-xl px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              Analytics: Revenue
            </Link>
          </div>
          
          <span className="text-xs text-slate-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            Active Layout Props: children, @analytics, @team
          </span>
        </div>

        {/* Layout grid */}
        <div className="space-y-6">
          {/* Children Slot (Dashboard General State/Widgets) */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
              children slot
            </h3>
            {children}
          </div>

          {/* Grid layout for parallel slots */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Analytics Slot */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 flex flex-col min-h-[350px]">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                @analytics slot
              </h3>
              <div className="flex-1 flex flex-col">{analytics}</div>
            </div>

            {/* Team Slot */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 flex flex-col min-h-[350px]">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                @team slot
              </h3>
              <div className="flex-1 flex flex-col">{team}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
