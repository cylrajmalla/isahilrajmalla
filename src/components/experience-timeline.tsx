import type { ExperienceItem } from "@/data/profile";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  title?: string;
  compact?: boolean;
};

export function ExperienceTimeline({ items, title, compact = false }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#C7A15A] via-white/30 to-transparent md:left-1/2" />

      <div className="space-y-8">
        {items.map((item) => (
          <article
            key={`${item.company}-${item.role}-${item.period}`}
            className={`relative pl-12 md:pl-0 ${compact ? "" : ""}`}
          >
            <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#C7A15A] bg-[#121212] shadow-[0_0_0_5px_rgba(199,161,90,0.12)] md:left-1/2 md:-translate-x-1/2" />

            <div className={`md:w-[calc(50%-2rem)] ${compact ? "md:ml-0" : ""}`}>
              <div
                className={`rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-6 ${
                  compact ? "md:ml-0" : "md:ml-0"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C7A15A]">
                      {item.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                  </div>
                  <div className="text-sm text-zinc-300">
                    <p>{item.period}</p>
                    {item.location ? <p className="mt-1">{item.location}</p> : null}
                  </div>
                </div>

                <p className="mt-4 text-base leading-7 text-zinc-300">{item.summary}</p>

                {item.highlights.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-white/10 bg-[#0f0f0f] px-3 py-1.5 text-xs text-zinc-200"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {title ? <h3 className="sr-only">{title}</h3> : null}
    </div>
  );
}
