import Link from "next/link";

import type { VentureItem } from "@/data/profile";

type VentureCardProps = {
  venture: VentureItem;
};

export function VentureCard({ venture }: VentureCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-[#0d0d0d] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-[#C7A15A]/50">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full border border-[#C7A15A]/50 bg-[#C7A15A]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F0D694]">
          {venture.role}
        </span>
        <span className="text-xs text-zinc-400">{venture.year}</span>
      </div>

      <h3 className="text-2xl font-semibold text-white">{venture.name}</h3>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#C7A15A]">{venture.category}</p>

      <p className="mt-5 flex-1 text-base leading-7 text-zinc-300">{venture.description}</p>

      {venture.website ? (
        <Link
          href={venture.website}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center text-sm font-medium text-[#F4E6B3] transition group-hover:text-[#F8E7B8]"
        >
          View Venture
          <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      ) : (
        <span className="mt-6 inline-flex items-center text-sm text-zinc-500">Website not listed</span>
      )}
    </article>
  );
}
