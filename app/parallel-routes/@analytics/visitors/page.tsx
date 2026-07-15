import React from "react";

export default function VisitorsAnalysis() {
  const sources = [
    { name: "Direct Search", count: "35,120", pct: 60, color: "bg-cyan-500" },
    { name: "GitHub Referrals", count: "14,630", pct: 25, color: "bg-indigo-500" },
    { name: "Google Organic", count: "8,780", pct: 15, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-white">Visitors Analysis</h4>
          <span className="text-xs text-slate-500 font-semibold uppercase">Traffic</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Breakdown of organic and direct visitor traffic.</p>
      </div>

      <div className="grid grid-cols-3 gap-2 py-2">
        <div className="text-center bg-slate-950 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-500 font-semibold uppercase">Uniques</span>
          <span className="text-sm font-extrabold text-white mt-1">84.2K</span>
        </div>
        <div className="text-center bg-slate-950 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-500 font-semibold uppercase">Page/Sess</span>
          <span className="text-sm font-extrabold text-cyan-400 mt-1">4.21</span>
        </div>
        <div className="text-center bg-slate-950 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-500 font-semibold uppercase">Duration</span>
          <span className="text-sm font-extrabold text-white mt-1">2m 45s</span>
        </div>
      </div>

      <div className="space-y-3">
        <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Top Referrals</h5>
        <div className="space-y-2">
          {sources.map((source, index) => (
            <div key={index} className="text-xs">
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">{source.name}</span>
                <span className="font-semibold text-white">{source.count}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                <div className={`h-full ${source.color} rounded-full`} style={{ width: `${source.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 text-xs text-slate-500 flex justify-between items-center">
        <span>Slot Route: /visitors</span>
        <span className="text-indigo-400">Preserving @team state</span>
      </div>
    </div>
  );
}
