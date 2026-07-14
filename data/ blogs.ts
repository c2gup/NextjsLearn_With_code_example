// data/blogs.ts

export interface Blog {
  id: number;
  title: string;
  slug: string[];
  content: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "React useState",
    slug: ["react", "hooks", "useState"],
    content:
      "useState is a React Hook that lets you add state to functional components.",
  },
  {
    id: 2,
    title: "React useEffect",
    slug: ["react", "hooks", "useEffect"],
    content:
      "useEffect lets you perform side effects like API calls and event listeners.",
  },
  {
    id: 3,
    title: "React Components",
    slug: ["react", "components"],
    content:
      "Components are reusable pieces of UI in React.",
  },
  {
    id: 4,
    title: "JavaScript ES6",
    slug: ["javascript", "es6"],
    content:
      "ES6 introduced let, const, arrow functions, destructuring and many more features.",
  },
  {
    id: 5,
    title: "Next.js Routing",
    slug: ["nextjs", "routing"],
    content:
      "Next.js App Router uses file-system based routing.",
  },
];