import React from "react";

export default function DynamicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "2px dashed #0070f3", padding: "15px", borderRadius: "10px", margin: "20px" }}>
      <div style={{ fontSize: "0.9rem", color: "#0070f3", fontWeight: "bold", marginBottom: "15px" }}>
        [Shared Layout Layout (app/dynamic/layout.tsx)] - Wraps all pages under /dynamic/*
      </div>
      
      {children}
      
      <div style={{ fontSize: "0.9rem", color: "#0070f3", fontWeight: "bold", marginTop: "15px", textAlign: "right" }}>
        [End of Shared Layout]
      </div>
    </div>
  );
}
