import { Mail, CodeXml, BriefcaseBusiness, Terminal, ArrowUpRight } from 'lucide-react'
import { profile, links } from '../data/profile'

const contactLinks = [
  { ...links.email, icon: Mail },
  { ...links.github, icon: CodeXml },
  { ...links.linkedin, icon: BriefcaseBusiness },
  { ...links.leetcode, icon: Terminal },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-ink-line">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.6fr_0.4fr] gap-14">
          <div>
            <span className="font-mono text-xs tracking-wideish text-rust">07 / CONTACT</span>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tightest leading-[0.95] text-ink text-balance">
              Let's build
              <br />
              something <span className="italic text-rust">real.</span>
            </h2>
            <p className="mt-7 max-w-md text-ink-dim leading-relaxed">
              Open to conversations about AI engineering roles, software roles, and
              collaboration on interesting technical problems.
            </p>
            <a
              href={links.email.href}
              className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-rust"
            >
              Start a conversation
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <ul className="border-t border-ink-line lg:pt-1">
            {contactLinks.map((l) => (
              <li key={l.label} className="border-b border-ink-line">
                <a
                  href={l.href}
                  target={l.label === 'Email' ? undefined : '_blank'}
                  rel={l.label === 'Email' ? undefined : 'noreferrer'}
                  className="group flex items-center justify-between gap-4 py-5 transition-colors duration-200"
                >
                  <span className="flex items-center gap-3.5">
                    <l.icon size={16} className="text-ink-faint group-hover:text-rust transition-colors duration-200" />
                    <span className="font-display text-lg text-ink group-hover:text-rust transition-colors duration-200">
                      {l.label}
                    </span>
                  </span>
                  <span className="hidden sm:block font-mono text-xs text-ink-faint truncate max-w-[12rem]">
                    {l.value}
                  </span>
                  <ArrowUpRight size={15} className="shrink-0 text-ink-faint group-hover:text-rust group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 font-mono text-[11px] tracking-wide text-ink-faint">
          {profile.location.toUpperCase()}
        </p>
      </div>
    </section>
  )
}
