import React from "react";
import Link from "next/link";

export default function DynamicStaticParentPage() {
  const sampleIds = ["101", "apple-device", "guest-user", "999"];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Static Route Parent: <code>/dynamic</code></h1>
      <p style={{ color: "#666", fontSize: "1.1rem" }}>
        This page itself is a <strong>Static Route</strong> because the path is fixed at <code>/dynamic</code>.
      </p>

      <div style={{ marginTop: "30px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
        <h3>Test Dynamic Route Segment (<code>/dynamic/[id]</code>):</h3>
        <p>Click any link below to pass a dynamic parameter into the URL segment:</p>
        
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {sampleIds.map((id) => (
            <li key={id} style={{ margin: "10px 0" }}>
              <Link 
                href={`/dynamic/${id}`} 
                style={{ 
                  color: "#0070f3", 
                  textDecoration: "none", 
                  fontWeight: "bold",
                  background: "#f0f8ff",
                  padding: "5px 10px",
                  borderRadius: "4px"
                }}
              >
                Go to /dynamic/{id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
