import Link from "next/link";
import { blogs } from "@/data/ blogs";

export default function BlogPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Blogs</h1>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h2>{blog.title}</h2>

          <Link href={`/blog/${blog.slug.join("/")}`}>Read Blog</Link>
        </div>
      ))}
    </div>
  );
}
