import React from "react";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DynamicSegmentPage({ params }: Props) {
  const { id } = await params;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Link href="/dynamic" style={{ color: "#0070f3", textDecoration: "none" }}>
        ← Back to Dynamic Parent
      </Link>
      <hr style={{ margin: "20px 0", borderColor: "#eee" }} />

      <h1>Dynamic Segment Route: <code>/dynamic/[id]</code></h1>
      
      <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "6px", borderLeft: "5px solid #0070f3" }}>
        <h3>Captured Parameter Value:</h3>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0 }}>
          id = <span style={{ color: "#e01e5a" }}>"{id}"</span>
        </p>
      </div>

      <div style={{ marginTop: "30px", lineHeight: "1.6" }}>
        <h3>How it works:</h3>
        <ol>
          <li>You visited the URL <code>/dynamic/{id}</code>.</li>
          <li>Next.js matched the route to the folder name <code>[id]</code>.</li>
          <li>The parameter was extracted and passed as a Promise inside the page component's <code>params</code> prop.</li>
          <li>We used <code>const &#123; id &#125; = await params</code> to read it and display it!</li>
        </ol>
      </div>
    </div>
  );
}
