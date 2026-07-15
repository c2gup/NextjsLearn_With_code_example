import DemoModal from "@/components/DemoModal";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InterceptedPostPage({ params }: PageProps) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <DemoModal>
        <div className="text-center py-8">
          <h2 className="text-xl font-bold text-red-400">Destination Not Found</h2>
          <p className="text-sm text-slate-400 mt-2">The requested destination ID could not be resolved.</p>
        </div>
      </DemoModal>
    );
  }

  return (
    <DemoModal>
      <div className="space-y-6">
        {/* Top Info Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {destination.country}
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              {destination.name}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-400 border border-yellow-500/20">
              ★ {destination.rating}
            </span>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-400 border border-cyan-500/20">
              {destination.duration}
            </span>
          </div>
        </div>

        {/* Decorative Visual Strip */}
        <div className={`h-40 w-full rounded-2xl bg-gradient-to-r ${destination.gradient} shadow-inner opacity-90`} />

        {/* Detailed Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest border-b border-white/5 pb-2">
              Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">
              {destination.longDescription}
            </p>
          </div>

          <div className="space-y-4 bg-slate-950/40 p-4 rounded-xl border border-white/5">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest border-b border-white/5 pb-2">
              Trip Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Est. Price:</span>
                <span className="font-bold text-white">{destination.cost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Duration:</span>
                <span className="font-semibold text-white">{destination.duration}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <h5 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Key Highlights</h5>
              <ul className="list-disc pl-4 text-xs space-y-1 text-slate-300">
                {destination.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DemoModal>
  );
}
