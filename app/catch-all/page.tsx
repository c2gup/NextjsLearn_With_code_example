import Link from "next/link";
import { blogs } from "@/data/ blogs";

export default function CatchAllDemoPage() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Catch-All Route: <code>/catch-all</code></h1>
      <p style={{ color: "#666" }}>
        This page lists links that contain nested levels. Clicking them will route to our catch-all file <code>app/catch-all/[...slug]/page.tsx</code>.
      </p>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "6px"
          }}
        >
          <h2>{blog.title}</h2>
          <p style={{ color: "#777", fontSize: "0.9rem" }}>
            Slug path: <code>/{blog.slug.join("/")}</code>
          </p>

          <Link 
            href={`/catch-all/${blog.slug.join("/")}`}
            style={{
              color: "#0070f3",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Read Post (Go to Route) →
          </Link>
        </div>
      ))}
    </div>
  );
}
