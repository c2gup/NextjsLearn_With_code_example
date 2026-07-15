import React from "react";

export default function ParallelDashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Console Overview</h2>
          <p className="text-sm text-slate-400">Welcome back! Here is a summary of your workspace activities.</p>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            System Online
          </span>
        </div>
      </div>

      {/* Mini Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
        <div className="rounded-xl bg-slate-950 p-4 border border-white/5">
          <span className="block text-xs text-slate-500 font-semibold uppercase">Pending Tasks</span>
          <span className="text-2xl font-black text-white mt-1">12</span>
        </div>
        <div className="rounded-xl bg-slate-950 p-4 border border-white/5">
          <span className="block text-xs text-slate-500 font-semibold uppercase">System Load</span>
          <span className="text-2xl font-black text-indigo-400 mt-1">24%</span>
        </div>
        <div className="rounded-xl bg-slate-950 p-4 border border-white/5">
          <span className="block text-xs text-slate-500 font-semibold uppercase">Open Alerts</span>
          <span className="text-2xl font-black text-rose-400 mt-1">0</span>
        </div>
        <div className="rounded-xl bg-slate-950 p-4 border border-white/5">
          <span className="block text-xs text-slate-500 font-semibold uppercase">Active Users</span>
          <span className="text-2xl font-black text-cyan-400 mt-1">1,482</span>
        </div>
      </div>
    </div>
  );
}
