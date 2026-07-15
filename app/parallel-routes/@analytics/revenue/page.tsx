import React from "react";

export default function RevenueAnalysis() {
  const plans = [
    { name: "Pro Plan ($49/mo)", revenue: "$12,450", pct: 67, color: "bg-emerald-500" },
    { name: "Starter Plan ($19/mo)", revenue: "$4,242", pct: 23, color: "bg-cyan-500" },
    { name: "Enterprise Custom", revenue: "$1,800", pct: 10, color: "bg-indigo-500" },
  ];

  return (
    <div className="space-y-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-white">Revenue Analysis</h4>
          <span className="text-xs text-slate-500 font-semibold uppercase">Financials</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Earnings and plan distribution insights.</p>
      </div>

      <div className="grid grid-cols-3 gap-2 py-2">
        <div className="text-center bg-slate-950 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-500 font-semibold uppercase">MRR</span>
          <span className="text-sm font-extrabold text-white mt-1">$18.5K</span>
        </div>
        <div className="text-center bg-slate-950 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-500 font-semibold uppercase">CAC</span>
          <span className="text-sm font-extrabold text-rose-400 mt-1">$45.2</span>
        </div>
        <div className="text-center bg-slate-950 p-3 rounded-lg border border-white/5">
          <span className="block text-[10px] text-slate-500 font-semibold uppercase">LTV</span>
          <span className="text-sm font-extrabold text-emerald-400 mt-1">$680</span>
        </div>
      </div>

      <div className="space-y-3">
        <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">MRR Share by Tier</h5>
        <div className="space-y-2">
          {plans.map((plan, index) => (
            <div key={index} className="text-xs">
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">{plan.name}</span>
                <span className="font-semibold text-white">{plan.revenue}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                <div className={`h-full ${plan.color} rounded-full`} style={{ width: `${plan.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 text-xs text-slate-500 flex justify-between items-center">
        <span>Slot Route: /revenue</span>
        <span className="text-cyan-400">Preserving @team state</span>
      </div>
    </div>
  );
}
