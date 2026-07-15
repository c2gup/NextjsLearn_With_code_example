import React from "react";

export default function TeamPanel() {
  const members = [
    { name: "Sarah Connor", role: "Product Designer", status: "Active", dotColor: "bg-emerald-500" },
    { name: "John Doe", role: "Frontend Dev", status: "In Meeting", dotColor: "bg-amber-500" },
    { name: "Alice Smith", role: "DevOps Engineer", status: "Away", dotColor: "bg-slate-500" },
  ];

  return (
    <div className="space-y-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-white">Active Members</h4>
          <span className="text-xs text-slate-500 font-semibold uppercase">Management</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Real-time status of your engineering squad.</p>
      </div>

      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-950/50 border border-white/5 p-3 hover:border-white/10 hover:bg-slate-950 transition duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-md shadow-indigo-500/10">
                {member.name.split(" ").map(n => n[0]).join("")}
              </span>
              <div>
                <span className="block text-sm font-semibold text-white leading-tight">{member.name}</span>
                <span className="block text-[11px] text-slate-500">{member.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${member.dotColor} shadow-sm`} />
              <span className="text-[10px] text-slate-400 font-medium">{member.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-white/5 text-xs text-slate-500 flex justify-between items-center">
        <span>Slot Active Status</span>
        <span className="text-emerald-400">Online</span>
      </div>
    </div>
  );
}
