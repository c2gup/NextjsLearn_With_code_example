import Link from "next/link";

export default function FeedPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Feed Page</h1>

      <p>Click any image</p>

      <Link href="/photo/1">
        <button>Photo 1</button>
      </Link>

      <br />
      <br />

      <Link href="/photo/2">
        <button>Photo 2</button>
      </Link>
    </div>
  );
}
