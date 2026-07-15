import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function InterceptingRoutesPage() {
  return (
    <div className="space-y-12">
      {/* Header Info */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-8 md:p-12">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-500/30">
            Next.js Routing Paradigm
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Intercepting Routes Demo
          </h1>
          <p className="text-lg text-slate-300">
            Intercepting routes allows you to load a route from another part of your application inside the current layout. This is commonly used for displaying item details in overlays (modals) without losing context.
          </p>

          <div className="mt-6 border-l-4 border-cyan-500/50 bg-slate-950/40 p-4 rounded-r-xl">
            <h4 className="font-semibold text-cyan-300">How to test this:</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-400">
              <li>
                <strong className="text-slate-200">Soft Navigation:</strong> Click any destination card below. It will open in a beautifully styled modal window *overlaying* this page, and the URL will update to <code className="text-cyan-400">/intercepting-routes/post/[id]</code>.
              </li>
              <li>
                <strong className="text-slate-200">Hard Navigation:</strong> Once the modal is open, refresh your browser or copy the URL and open it in a new tab. Since it is a hard navigation, Next.js will bypass the interceptor and render the dedicated full-page view of the destination!
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Destination Gallery */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/intercepting-routes/post/${dest.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              {/* Visual card top representing an image placeholder using CSS Gradients */}
              <div className={`h-48 w-full bg-gradient-to-br ${dest.gradient} relative flex items-end p-4 transition-all duration-300 group-hover:opacity-90`}>
                <div className="absolute inset-0 bg-slate-950/20" />
                <span className="relative z-10 rounded-full bg-slate-950/70 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-yellow-400 flex items-center gap-1 shadow">
                  ★ {dest.rating}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{dest.country}</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition">
                  {dest.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400 flex-1 line-clamp-2">
                  {dest.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="text-xs text-slate-500">Starts from</span>
                  <span className="text-sm font-bold text-cyan-400">{dest.cost}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
