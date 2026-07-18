
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

      <div
        style={{
          padding: "40px",
          fontFamily: "system-ui, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            marginBottom: "40px",
            padding: "20px",
            background: "linear-gradient(135deg, #0070f3, #00dfd8)",
            borderRadius: "12px",
            color: "white",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "2.5rem" }}>
            Next.js Router Learning Hub
          </h1>
          <p style={{ margin: "10px 0 0 0", opacity: 0.9 }}>
            Interactive examples of Static, Dynamic, and Catch-All Routing
          </p>
        </header>

        <section style={{ display: "flex", gap: "20px", marginBottom: "45px" }}>
          <Link
            href="/dynamic"
            style={{ flex: 1, textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                padding: "20px",
                border: "2px solid #0070f3",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            >
              <h3 style={{ margin: 0, color: "#0070f3" }}>
                ⚡ Dynamic Segment Demo
              </h3>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                Learn how <code>/dynamic/[id]</code> reads dynamic parameters
                from URL path.
              </p>
            </div>
          </Link>

          <Link
            href="/catch-all"
            style={{ flex: 1, textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                padding: "20px",
                border: "2px solid #00dfd8",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            >
              <h3 style={{ margin: 0, color: "#00b4b0" }}>
                🪝 Catch-All Route Demo
              </h3>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                Learn how <code>/catch-all/[...slug]</code> matches multiple
                nested segments.
              </p>
            </div>
          </Link>
        </section>

        <section style={{ display: "flex", gap: "20px", marginBottom: "45px" }}>
          <Link
            href="/intercepting-routes"
            style={{ flex: 1, textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                padding: "20px",
                border: "2px solid #ec4899",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            >
              <h3 style={{ margin: 0, color: "#ec4899" }}>
                🖼️ Intercepting Routes Demo
              </h3>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                Learn how <code>(.)post/[id]</code> loads a route inside a modal
                overlay while masking the URL.
              </p>
            </div>
          </Link>

          <Link
            href="/parallel-routes"
            style={{ flex: 1, textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                padding: "20px",
                border: "2px solid #6366f1",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
            >
              <h3 style={{ margin: 0, color: "#6366f1" }}>
                📊 Parallel Routes Demo
              </h3>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                Learn how slots <code>@analytics</code> and <code>@team</code>{" "}
                render simultaneously in one view.
              </p>
            </div>
          </Link>
        </section>

        <section style={{ display: "flex", gap: "20px", marginBottom: "45px" }}>
          <div
            style={{
              flex: 1,
              padding: "20px",
              border: "2px dashed #10b981",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ margin: 0, color: "#10b981" }}>
              🛡️ Route Group Demo (<code>(group)</code>)
            </h3>
            <p
              style={{
                margin: "10px 0 15px 0",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              These routes are nested inside <code>app/(group)</code> folder.
              Note that <code>(group)</code> is omitted from the URL path!
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/login"
                style={{
                  padding: "5px 15px",
                  background: "#10b981",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                Go to /login
              </Link>
              <Link
                href="/signup"
                style={{
                  padding: "5px 15px",
                  border: "1px solid #10b981",
                  color: "#10b981",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                Go to /signup
              </Link>
            </div>
          </div>
        </section>

        <hr
          style={{
            border: "0",
            borderTop: "1px solid #eaeaea",
            margin: "40px 0",
          }}
        />

        <div>
          <h2 style={{ color: "#333" }}>API Fetching Example (Users)</h2>
          <p style={{ color: "#666" }}>
            This section renders data fetched dynamically at request time:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            {users.map((user: any) => (
              <div
                key={user.id}
                style={{
                  padding: "12px",
                  background: "#f5f5f7",
                  borderRadius: "6px",
                  border: "1px solid #e5e5e7",
                }}
              >
                <strong style={{ display: "block" }}>{user.name}</strong>
                <small style={{ color: "#86868b" }}>{user.email}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}
