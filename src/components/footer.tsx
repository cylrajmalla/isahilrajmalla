import Link from "next/link";

import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D9BC73]">
              {profile.name}
            </p>
            <p className="mt-3 text-sm text-zinc-400">HR Leader | People & Culture | Talent Acquisition | Entrepreneur</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            {profile.navItems.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          © 2026 {profile.name}. Built for people, culture and business leadership.
        </p>
      </div>
    </footer>
  );
}
