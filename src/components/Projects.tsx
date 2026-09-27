import { Link } from 'react-router-dom'
import { ArrowUpRight, CodeXml } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectFlow, { flowForSlug } from './visuals/ProjectFlow'

const accents: ('rust' | 'pine')[] = ['rust', 'pine', 'rust']

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-ink-line">
      <div className="container-page">
        <SectionHeading
          index="04 / WORK"
          title="Three systems, three different problems."
          note="Grounded retrieval, an honest ML workflow, and a full-stack system with real-time state. Each one has a dedicated case study covering architecture, trade-offs, and what actually broke."
        />

        <div className="mt-14 border-t border-ink-line">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group relative block border-b border-ink-line py-10 md:py-12 transition-colors duration-300 hover:bg-paper-raised/50"
            >
              <div className="grid lg:grid-cols-[3.5rem_1fr_auto] gap-4 lg:gap-10 px-2 -mx-2">
                <span className="font-mono text-sm text-ink-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <p className="font-mono text-xs tracking-wideish text-rust mb-3">
                    {p.category.toUpperCase()}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.03] tracking-tightest text-ink transition-colors duration-300 group-hover:text-rust text-balance">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-ink-dim leading-relaxed">
                    {p.tagline}
                  </p>

                  <div className="mt-6">
                    <ProjectFlow stages={flowForSlug(p.slug)} accent={accents[i % accents.length]} />
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.slice(0, 6).map((s) => (
                      <li
                        key={s}
                        className="text-[11px] text-ink-faint border border-ink-line px-2.5 py-1"
                      >
                        {s}
                      </li>
                    ))}
                    {p.stack.length > 6 && (
                      <li className="text-[11px] text-ink-faint px-2.5 py-1">
                        +{p.stack.length - 6} more
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex lg:flex-col items-start lg:items-end justify-between lg:justify-start gap-4 lg:gap-5 lg:text-right lg:pt-1">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wideish text-ink group-hover:text-rust transition-colors duration-300">
                    CASE STUDY
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs text-ink-faint hover:text-ink transition-colors duration-200"
                    >
                      <CodeXml size={13} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
