import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },

  { label: "Courses", href: "/#courses" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Login", href: "/auth/login" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(103 232 249), rgb(14 165 233))",
            }}
          >
            N
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100/80">
              NextLearn
            </span>
            <span className="text-xs text-slate-400">
              Learn. Build. Repeat.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-200 shadow-lg shadow-black/10 md:flex">
          {navigation.slice(0, 3).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
