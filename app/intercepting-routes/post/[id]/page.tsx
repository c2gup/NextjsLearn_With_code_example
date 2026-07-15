import Link from "next/link";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FullDestinationPage({ params }: PageProps) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button & Navigation context info */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <Link
            href="/intercepting-routes"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition group"
          >
            <span className="text-lg transition group-hover:-translate-x-1">←</span> 
            Back to Intercepting Routes Gallery
          </Link>
          <span className="text-xs text-slate-500 rounded bg-white/5 px-2 py-1">
            Status: Direct / Full Page View
          </span>
        </div>

        {/* Destination Header Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20">
                {destination.country}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                {destination.name}
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                {destination.description}
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center rounded-2xl bg-slate-950 border border-white/5 px-4 py-2">
                <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold">Rating</span>
                <span className="text-lg font-bold text-yellow-400">★ {destination.rating}</span>
              </div>
              <div className="text-center rounded-2xl bg-slate-950 border border-white/5 px-4 py-2">
                <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold">Cost</span>
                <span className="text-lg font-bold text-cyan-400">{destination.cost}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 md:p-8 space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-white/5 pb-2">About the Journey</h2>
              <p className="text-slate-300 leading-relaxed">
                {destination.longDescription}
              </p>
            </div>

            {/* Gradient Visual Box */}
            <div className={`h-64 w-full rounded-3xl bg-gradient-to-br ${destination.gradient} shadow-2xl relative overflow-hidden flex items-end p-8`}>
              <div className="absolute inset-0 bg-slate-950/20" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">Experience {destination.name}</h3>
                <p className="text-slate-200 text-sm mt-1">Book your package with NextLearn tours.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest border-b border-white/5 pb-2 mb-3">
                  Highlights
                </h3>
                <ul className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest border-b border-white/5 pb-2 mb-3">
                  Travel Info
                </h3>
                <dl className="grid grid-cols-2 gap-y-3 text-sm">
                  <dt className="text-slate-500">Duration:</dt>
                  <dd className="text-right font-semibold text-white">{destination.duration}</dd>
                  <dt className="text-slate-500">Transport:</dt>
                  <dd className="text-right text-white">Flights Included</dd>
                  <dt className="text-slate-500">Guide:</dt>
                  <dd className="text-right text-white">English Speaking</dd>
                </dl>
              </div>

              <button className="w-full rounded-2xl bg-white py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                Book Destination
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
