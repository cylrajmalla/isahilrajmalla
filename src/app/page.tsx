import Link from "next/link";

import { AchievementStats } from "@/components/achievement-stats";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import { SkillsGrid } from "@/components/skills-grid";
import { VentureCard } from "@/components/venture-card";
import { profile } from "@/data/profile";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sahil Raj Malla",
  jobTitle: "HR Leader, People & Culture, Talent Acquisition, Entrepreneur",
  description:
    "HR leader and entrepreneur specializing in talent acquisition, people operations, employee experience, organizational development and business leadership.",
  url: "https://www.sahilrajmalla.com.np",
  email: "mailto:sahilrajmalla@gmail.com",
  telephone: "+977-9801260669",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "Nepal",
  },
  sameAs: [
    "https://www.linkedin.com/in/sahilrajmalla/",
    "https://github.com/cylrajmalla",
    "https://www.goodasgoldtech.com",
    "https://www.laskus.ai",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen text-white">
        <Navbar />

        <main id="home">
          <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="animate-fade-up">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D9BC73]">
                  {profile.subheadline}
                </p>
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                  {profile.name}
                </h1>
                <p className="mt-5 text-xl font-medium text-[#E7D7A3] sm:text-2xl">
                  {profile.headline}
                </p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                  {profile.intro}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                  {profile.overview}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#journey"
                    className="inline-flex items-center justify-center rounded-full bg-[#C7A15A] px-6 py-3 text-sm font-medium text-[#111111] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D7B879]"
                  >
                    Explore My Journey
                  </Link>
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#C7A15A]/60 hover:text-[#F4E6B3]"
                  >
                    Connect on LinkedIn
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
                  {profile.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="transition hover:text-[#F4E6B3]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="animate-float-slow shine-border rounded-[2rem] border border-[#C7A15A]/30 bg-gradient-to-br from-white/5 to-[#121212] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9BC73]">
                    Executive Profile
                  </p>
                  <div className="mt-6 space-y-5 text-sm text-zinc-300">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span>Focus</span>
                      <span className="font-medium text-white">People & Business</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span>Experience</span>
                      <span className="font-medium text-white">7+ years</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span>Leadership</span>
                      <span className="font-medium text-white">HR + Entrepreneurship</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Location</span>
                      <span className="font-medium text-white">Kathmandu, Nepal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="About"
              title="People. Business. Leadership."
              description="Sahil brings a rare perspective to modern organizations: he understands talent, culture, and the commercial realities behind growth."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-lg leading-8 text-zinc-200">{profile.summary}</p>
                <p className="mt-6 text-xl font-medium leading-8 text-[#F4E6B3]">
                  He understands the employee, the organization, and the business owner.
                </p>
              </div>

              <div className="rounded-3xl border border-[#C7A15A]/20 bg-[#111111] p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C7A15A]">
                  Positioning
                </p>
                <p className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                  People and business leader at the intersection of HR, technology, and entrepreneurship.
                </p>
              </div>
            </div>
          </section>

          <section id="journey" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Professional Journey"
              title="Leadership shaped by people, process, and business reality."
              description="From recruitment and HR operations to leadership and venture-building, each chapter has strengthened his ability to lead teams and organizations with clarity."
            />

            <div className="mt-12">
              <ExperienceTimeline items={profile.experiences} />
            </div>
          </section>

          <section id="hr-leadership" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="HR Leadership Expertise"
              title="Operational depth, people strategy, and hiring leadership."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {profile.expertise.map((group) => (
                <div key={group.title} className="rounded-3xl border border-white/10 bg-[#101010] p-6">
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C7A15A]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Career Timeline"
              title="Earlier foundations and long-term growth."
            />

            <div className="mt-12">
              <ExperienceTimeline items={profile.earlierExperience} compact />
            </div>
          </section>

          <section id="entrepreneurship" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Entrepreneurship"
              title="Beyond HR: Building Businesses as a Pioneer"
              description="My entrepreneurial journey has allowed me to experience organizations from the other side of the table — as a founder, business owner, co-founder and advisor. I have taken a pioneer mindset, building ideas with strategy, commercial thinking and execution while learning how teams form around vision. These experiences have strengthened my understanding of leadership, risk and long-term business building."
            />

            <div className="mt-12 space-y-8">
              {profile.entrepreneurship.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C7A15A]">
                        {item.company}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                    </div>
                    <div className="text-sm text-zinc-300">
                      <p>{item.period}</p>
                      {item.location ? <p className="mt-1">{item.location}</p> : null}
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-zinc-300">{item.summary}</p>
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
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Selected Ventures"
              title="A portfolio of ideas, ventures, and business context."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {profile.ventures.map((venture) => (
                <VentureCard key={venture.name} venture={venture} />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Leadership Philosophy" title="How I Lead" />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {profile.philosophy.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-[#101010] p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-300">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-[#C7A15A]/30 bg-[#111111] p-8 text-lg leading-8 text-zinc-200">
              My approach combines empathy with accountability, strategic thinking with execution, and people management with business understanding.
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Career Differentiator" title="The Advantage of Seeing Both Sides" />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_180px_1fr] lg:items-center">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C7A15A]">
                  HR Leader
                </p>
                <ul className="mt-5 space-y-3 text-lg text-zinc-200">
                  {profile.differentiator.hr.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="rounded-full border border-[#C7A15A]/60 bg-[#C7A15A]/10 px-6 py-4 text-center text-xl font-semibold text-[#F4E6B3]">
                  Sahil Raj Malla
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C7A15A]">
                  Entrepreneur
                </p>
                <ul className="mt-5 space-y-3 text-lg text-zinc-200">
                  {profile.differentiator.entrepreneur.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-zinc-300">
              I bring an uncommon combination of people leadership and entrepreneurial perspective to organizational challenges.
            </p>
          </section>

          <section id="expertise" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Skills & Tools"
              title="Technology and operational capability built for modern HR and business leadership."
            />

            <div className="mt-12">
              <SkillsGrid groups={profile.skills} />
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Education" title="Learning across business, technology, and management." />

            <div className="mt-12 space-y-6">
              {profile.education.map((item) => (
                <div
                  key={`${item.institution}-${item.period}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C7A15A]">
                        {item.institution}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{item.program}</h3>
                      {item.note ? <p className="mt-3 text-sm text-zinc-400">{item.note}</p> : null}
                    </div>
                    <p className="text-sm text-zinc-300">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Certification" title="Advanced Search Engine Optimization" />
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Featured Achievements"
              title="Measured impact, grounded in the information available."
            />

            <div className="mt-12">
              <AchievementStats items={profile.achievements} />
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#C7A15A]/20 bg-gradient-to-br from-[#121212] to-[#0d0d0d] p-8 md:p-12">
              <SectionHeading
                eyebrow="Contact"
                title="Let&apos;s Build What&apos;s Next"
                description="Whether you're looking for an experienced HR leader, a talent acquisition partner, a people strategy professional, or a business conversation, I'd be glad to connect."
              />

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-5 text-base text-zinc-200">
                  <p>
                    <span className="font-medium text-white">Email:</span>{" "}
                    <a href={`mailto:${profile.contact.email}`} className="text-[#F4E6B3] hover:text-[#F8E7B8]">
                      {profile.contact.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">LinkedIn:</span>{" "}
                    <a
                      href={profile.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F4E6B3] hover:text-[#F8E7B8]"
                    >
                      {profile.contact.linkedin}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">GitHub:</span>{" "}
                    <a
                      href={profile.contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F4E6B3] hover:text-[#F8E7B8]"
                    >
                      {profile.contact.github}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">Website:</span>{" "}
                    <a
                      href={profile.contact.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F4E6B3] hover:text-[#F8E7B8]"
                    >
                      {profile.contact.website}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-white">Phone:</span> {profile.contact.phone}
                  </p>
                  <p>
                    <span className="font-medium text-white">Location:</span> {profile.contact.location}
                  </p>
                </div>

                <div className="space-y-5 text-base text-zinc-200">
                  <p className="font-medium text-white">Entrepreneurial websites</p>
                  <div className="space-y-3">
                    <a
                      href={profile.contact.goodAsGold}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[#F4E6B3] hover:text-[#F8E7B8]"
                    >
                      {profile.contact.goodAsGold}
                    </a>
                    <a
                      href={profile.contact.laskus}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-[#F4E6B3] hover:text-[#F8E7B8]"
                    >
                      {profile.contact.laskus}
                    </a>
                  </div>
                  <a
                    href="/resume.pdf"
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-[#C7A15A] bg-[#C7A15A]/10 px-6 py-3 text-sm font-medium text-[#F4E6B3] transition hover:bg-[#C7A15A]/20"
                  >
                    Download Résumé
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

