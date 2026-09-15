import type { SkillGroup } from "@/data/profile";

type SkillsGridProps = {
  groups: SkillGroup[];
};

export function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6">
          <h3 className="text-xl font-semibold text-white">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C7A15A]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
