import React from "react";

export default function AnalyticsOverview() {
  return (
    <div className="space-y-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-white">General Performance</h4>
          <span className="text-xs text-slate-500 font-semibold uppercase">Overview</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Aggregated statistics across all properties.</p>
      </div>

      <div className="space-y-4">
        {/* Metric 1 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Page Views</span>
            <span className="font-semibold text-white">342,501 (+12%)</span>
          </div>
          <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 rounded-full" style={{ width: "75%" }} />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Bounce Rate</span>
            <span className="font-semibold text-white">41.2% (-3.4%)</span>
          </div>
          <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "41.2%" }} />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Conversion Rate</span>
            <span className="font-semibold text-white">3.18% (+0.4%)</span>
          </div>
          <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full" style={{ width: "65%" }} />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 text-xs text-slate-500 flex justify-between items-center">
        <span>Updates every 5m</span>
        <span className="text-cyan-400 animate-pulse">● Live connection</span>
      </div>
    </div>
  );
}
