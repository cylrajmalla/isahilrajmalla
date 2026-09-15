import Link from "next/link";

import { profile } from "@/data/profile";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-sm font-semibold tracking-[0.26em] text-white uppercase">
          {profile.name}
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {profile.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-[#D5B77A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-[#C7A15A] bg-[#C7A15A]/10 px-5 py-2.5 text-sm font-medium text-[#F4E6B3] transition hover:bg-[#C7A15A]/20"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  );
}
