# Next.js Routing Notes & Guide 🚀

This document serves as a comprehensive reference guide for Next.js App Router routing concepts, folder structures, and how matching works, tailored with examples from this project.

---

## 🗺️ Next.js Routing Overview

Next.js uses a **file-system based router** where folders are used to define routes. 
* A **Folder** defines the route segment (which maps to a URL segment).
* A **page.tsx** file is required to make that route segment publicly accessible.

Here are the primary routing paradigms in Next.js:

| Route Type | Folder Convention | Example URL | Path Parameter (`params`) | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Static Route** | `app/about` | `/about` | None (`{}`) | Fixed, exact string match route. |
| **Dynamic Segment** | `app/dynamic/[id]` | `/dynamic/123` | `{ id: "123" }` | Captures a single dynamic path segment. |
| **Catch-All Segment** | `app/blog/[...slug]` | `/blog/a/b/c` | `{ slug: ["a", "b", "c"] }` | Captures one or more nested path segments. |
| **Optional Catch-All**| `app/shop/[[...slug]]` | `/shop` or `/shop/a` | `{}` or `{ slug: ["a"] }` | Captures zero or more nested path segments. |
| **Route Group** | `app/(auth)/login` | `/login` | None | Groups routes logically without affecting URL path. |

---

## 📁 Workspace Reference Files

Here are the links to the actual files in this project to review the implementation:

* 🗄️ **Data File:** [ blogs.ts](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/data/%20blogs.ts) (Contains blog post mock data with nested slugs)
* 📋 **Blog List:** [app/blog/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/blog/page.tsx) (Renders list of blogs linking to nested routes)
* 🔗 **Blog Details (Catch-all):** [app/blog/[...slug]/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/blog/[...slug]/page.tsx) (Catches dynamic routes, compares arrays, and shows content)
* 👤 **Dynamic Route (Static Parent):** [app/dynamic/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/dynamic/page.tsx) (Parent list for testing dynamic routes)
* 👤 **Dynamic Route Segment:** [app/dynamic/[id]/page.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/dynamic/%5Bid%5D/page.tsx) (Single parameter dynamic segment page)
* 📐 **Dynamic Layout:** [app/dynamic/layout.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/dynamic/layout.tsx) (Shared layout wrapped around all pages in `/dynamic/*`)
* 🔐 **Auth Group Layout:** [app/(auth)/layout.tsx](file:///Users/anupamgupta/Desktop/100xdev/MY-workSpace/nextlearn/app/(auth)/layout.tsx) (Shared layout for auth routes, excluding `/blog` or `/dynamic`)

---

## 📖 Routing Paradigms Explained

### 1. Static Routes 📌
These routes map directly 1:1 to a specific URL path. They have no dynamic placeholders.
* **Folder Structure:** `app/blog/page.tsx`
* **URL:** `/blog`
* **Use Case:** Landing page, contact page, blog lists.

---

### 2. Dynamic Segment (`[param]`) ⚡
Used when a single path segment is dynamic (e.g., ID, username, or slug).
* **Folder Structure:** `app/dynamic/[id]/page.tsx`
* **URLs Matched:** 
  * `/dynamic/45` $\rightarrow$ `params` = `{ id: "45" }`
  * `/dynamic/apple-device` $\rightarrow$ `params` = `{ id: "apple-device" }`
* **Code Example (Next.js 15+ Async params):**
  ```tsx
  type Props = {
    params: Promise<{ id: string }>;
  };

  export default async function DynamicSegmentPage({ params }: Props) {
    const { id } = await params;
    return <h1>Dynamic Segment Value: {id}</h1>;
  }
  ```

---

### 3. Catch-All Routes (`[...param]`) 🪝
Used to capture nested sub-paths. All segments after the route prefix are captured inside a string array.
* **Folder Structure:** `app/blog/[...slug]/page.tsx`
* **URLs Matched:**
  * `/blog/react` $\rightarrow$ `params.slug` = `["react"]`
  * `/blog/react/hooks/useState` $\rightarrow$ `params.slug` = `["react", "hooks", "useState"]`
* **How Data Matching works (Flow):**
  ```mermaid
  graph TD
      A[Browser requests /blog/react/hooks/useState] --> B[Next.js Dynamic Engine Matches Folder app/blog/[...slug]]
      B --> C[Next.js Sets params.slug = ['react', 'hooks', 'useState']]
      C --> D[app/blog/[...slug]/page.tsx components receives params]
      D --> E[Wait for params Promise to resolve]
      E --> F[Compare slug Array with data in data/blogs.ts]
      F -->|Found Match| G[Render Blog Content]
      F -->|No Match| H[Render Blog Not Found Page]
  ```

---

### 4. Optional Catch-All Routes (`[[...param]]`) 🔓
Exactly like catch-all, but it **also** matches the root path without any segments.
* **Folder Structure:** `app/shop/[[...slug]]/page.tsx`
* **URLs Matched:**
  * `/shop` $\rightarrow$ `params.slug` = `undefined` (No segments provided)
  * `/shop/clothes` $\rightarrow$ `params.slug` = `["clothes"]`
  * `/shop/clothes/shirts` $\rightarrow$ `params.slug` = `["clothes", "shirts"]`
* **Benefits:** Saves you from creating a separate `app/shop/page.tsx` file for the main category page.

---

### 5. Route Groups `(groupName)` 🛡️
Used to group related routes together without affecting the URL structure. It allows you to organize files cleanly and share different layouts between subgroups.
* **Folder Structure:** 
  * `app/(auth)/login/page.tsx` $\rightarrow$ Maps to `/login` (Notice `/auth` is omitted from the URL)
  * `app/(auth)/signup/page.tsx` $\rightarrow$ Maps to `/signup`
  * `app/(auth)/layout.tsx` $\rightarrow$ Shared layout applied only to `/login` and `/signup`.
* **Use Case:** Separating authenticated screens, marketing pages, and admin dashboards into separate layout wrappers without adding extra prefixes to the browser URLs.

---

## 🛠️ Revision Sheet: Params Cheat Sheet

Always remember, in Next.js 15, `params` is a **Promise** and must be awaited before accessing properties:

| File Pattern | URL Path | Awaited Params Value |
| :--- | :--- | :--- |
| `app/dynamic/[id]/page.tsx` | `/dynamic/5` | `{ id: '5' }` |
| `app/blog/[...slug]/page.tsx` | `/blog/js/es6` | `{ slug: ['js', 'es6'] }` |
| `app/shop/[[...slug]]/page.tsx`| `/shop` | `{ slug: undefined }` |
| `app/shop/[[...slug]]/page.tsx`| `/shop/a/b` | `{ slug: ['a', 'b'] }` |
