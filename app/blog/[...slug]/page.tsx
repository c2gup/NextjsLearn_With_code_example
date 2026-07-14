import Link from "next/link";
import { blogs } from "@/data/ blogs";
import chalk from "chalk";
type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function BlogDetails({ params }: Props) {
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

  console.log("Matched Blog:", matchedBlog);
  if (!matchedBlog) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Blog Not Found</h1>
        <p>Sorry, the blog you are looking for does not exist.</p>
        <Link href="/blog">Back to all blogs</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link href="/blog">← Back to all blogs</Link>
      <hr style={{ margin: "20px 0" }} />
      <h1>{matchedBlog.title}</h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginTop: "20px" }}>
        {matchedBlog.content}
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "10px",
          background: "#f4f4f4",
          borderRadius: "5px",
          color: "#333",
        }}
      >
        <h4>Debug Info (URL Params):</h4>
        <pre>{JSON.stringify(slug, null, 2)}</pre>
      </div>
    </div> 
  );
}
