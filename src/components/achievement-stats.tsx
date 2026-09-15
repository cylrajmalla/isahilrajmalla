type Achievement = {
  value: string;
  label: string;
};

type AchievementStatsProps = {
  items: Achievement[];
};

export function AchievementStats({ items }: AchievementStatsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
        >
          <div className="text-4xl font-semibold tracking-[-0.06em] text-[#F0D694] md:text-5xl">
            {item.value}
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
