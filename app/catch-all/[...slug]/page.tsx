import Link from "next/link";
import { blogs } from "@/data/ blogs";
import chalk from "chalk";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function CatchAllDetailsPage({ params }: Props) {
  const { slug } = await params;
  console.log(
    chalk.green("Received slug from URL params:"),
    chalk.yellow(slug.join("/")),
  );

  // URL ke slug array aur data.ts ke slug array ko compare karke matching blog locate karein
  const matchedBlog = blogs.find(
    (blog) =>
      blog.slug.length === slug.length &&
      blog.slug.every((val, index) => {
        return val === slug[index];
      }),
  );

  console.log("Matched Post:", matchedBlog);
  if (!matchedBlog) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>Post Not Found</h1>
        <p>Sorry, the post you are looking for does not exist.</p>
        <Link href="/catch-all">Back to Catch-All List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Link href="/catch-all">← Back to Catch-All List</Link>
      <hr style={{ margin: "20px 0", borderColor: "#eee" }} />
      
      <h1>Catch-All Match Found: <code>{matchedBlog.title}</code></h1>
      
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginTop: "20px" }}>
        {matchedBlog.content}
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "15px",
          background: "#f4f4f4",
          borderRadius: "6px",
          color: "#333",
        }}
      >
        <h4>Next.js Routing Info:</h4>
        <p>URL parameter <code>slug</code> array resolved to:</p>
        <pre>{JSON.stringify(slug, null, 2)}</pre>
      </div>
    </div> 
  );
}
