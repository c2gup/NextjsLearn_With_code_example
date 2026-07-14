# Next.js App Router Routing Guide 🚀

This is a simple, visual guide mapping Next.js App Router concepts to the actual files in this workspace.

---

### 1. Static Routes (Exact Match)
A folder maps directly to a literal path segment.
* **URL:** `/catch-all` or `/dynamic`
* **Workspace Files:**
  * [📄 app/catch-all/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/catch-all/page.tsx) — Main landing page for catch-all demo.
  * [📄 app/dynamic/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/dynamic/page.tsx) — Main landing page for dynamic segment demo.

---

### 2. Dynamic Segment (`[param]`)
Captures a single dynamic URL segment (e.g. ID, name) and passes it to the page.
* **URL Example:** `/dynamic/101` $\rightarrow$ captures `id = "101"`
* **Workspace Files:**
  * [📄 app/dynamic/\[id\]/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/dynamic/%5Bid%5D/page.tsx) — Page containing the matching logic for single parameter.
  * [📄 app/dynamic/layout.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/dynamic/layout.tsx) — Shared layout wrapper for the dynamic route.

---

### 3. Catch-All Routes (`[...param]`)
Captures multiple nested URL sub-paths (zero/one/more) and converts them into a string array.
* **URL Example:** `/catch-all/react/hooks/useState` $\rightarrow$ captures `slug = ["react", "hooks", "useState"]`
* **Workspace Files:**
  * [📄 app/catch-all/\[...slug\]/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/catch-all/[...slug]/page.tsx) — Catch-all page that extracts parameters and matches with data.
  * [📄 data/blogs.ts](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/data/%20blogs.ts) — Data source array containing multi-segment slugs.

---

### 4. Route Groups `(groupName)`
Groups related routes together and allows sharing layouts without altering the URL path (the parenthesis segment is ignored).
* **URL Example:** `/login` or `/signup` (Notice `(group)` is NOT in the browser path)
* **Workspace Files:**
  * [📄 app/(group)/layout.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/(group)/layout.tsx) — Shared layout applied ONLY to routes inside `(group)`.
  * [📄 app/(group)/login/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/(group)/login/page.tsx) — Login page.
  * [📄 app/(group)/signup/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/(group)/signup/page.tsx) — Signup page.

---

### 💡 Params Reference Table

| Folder Path | Example Browser URL | Resolved `params` (Awaited) |
| :--- | :--- | :--- |
| `app/dynamic/[id]/page.tsx` | `/dynamic/apple` | `{ id: "apple" }` |
| `app/catch-all/[...slug]/page.tsx` | `/catch-all/a/b/c` | `{ slug: ["a", "b", "c"] }` |
| `app/(group)/login/page.tsx` | `/login` | `{}` |
