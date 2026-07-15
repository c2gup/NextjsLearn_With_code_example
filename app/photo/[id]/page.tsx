import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-6 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-white">Standalone Photo View</h1>
        
        <div className="h-48 w-full rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center">
          <span className="text-4xl font-black text-white">Photo {id}</span>
        </div>

        <p className="text-sm text-slate-400">
          You are viewing Photo {id} as a full page. This view is loaded via a direct URL visit or a page refresh.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
