import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  console.log("🔥 Main Server Component hoon");

  const users = await getUsers();

  return (
    <div style={{ padding: "40px", fontFamily: "system-ui, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ marginBottom: "40px", padding: "20px", background: "linear-gradient(135deg, #0070f3, #00dfd8)", borderRadius: "12px", color: "white" }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Next.js Router Learning Hub</h1>
        <p style={{ margin: "10px 0 0 0", opacity: 0.9 }}>Interactive examples of Static, Dynamic, and Catch-All Routing</p>
      </header>

      <section style={{ display: "flex", gap: "20px", marginBottom: "45px" }}>
        <Link href="/dynamic" style={{ flex: 1, textDecoration: "none", color: "inherit" }}>
          <div style={{ padding: "20px", border: "2px solid #0070f3", borderRadius: "8px", cursor: "pointer", transition: "transform 0.2s" }}>
            <h3 style={{ margin: 0, color: "#0070f3" }}>⚡ Dynamic Segment Demo</h3>
            <p style={{ margin: "10px 0 0 0", fontSize: "0.9rem", color: "#666" }}>Learn how <code>/dynamic/[id]</code> reads dynamic parameters from URL path.</p>
          </div>
        </Link>

        <Link href="/blog" style={{ flex: 1, textDecoration: "none", color: "inherit" }}>
          <div style={{ padding: "20px", border: "2px solid #00dfd8", borderRadius: "8px", cursor: "pointer", transition: "transform 0.2s" }}>
            <h3 style={{ margin: 0, color: "#00b4b0" }}>🪝 Catch-All Route Demo</h3>
            <p style={{ margin: "10px 0 0 0", fontSize: "0.9rem", color: "#666" }}>Learn how <code>/blog/[...slug]</code> matches multiple nested segments.</p>
          </div>
        </Link>
      </section>

      <hr style={{ border: "0", borderTop: "1px solid #eaeaea", margin: "40px 0" }} />

      <div>
        <h2 style={{ color: "#333" }}>API Fetching Example (Users)</h2>
        <p style={{ color: "#666" }}>This section renders data fetched dynamically at request time:</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px" }}>
          {users.map((user: any) => (
            <div key={user.id} style={{ padding: "12px", background: "#f5f5f7", borderRadius: "6px", border: "1px solid #e5e5e7" }}>
              <strong style={{ display: "block" }}>{user.name}</strong>
              <small style={{ color: "#86868b" }}>{user.email}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
