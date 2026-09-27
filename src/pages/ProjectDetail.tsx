import { useParams, useNavigate, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, CodeXml, ExternalLink } from 'lucide-react'
import { projects, type Project } from '../data/projects'
import ProjectFlow, { flowForSlug } from '../components/visuals/ProjectFlow'

const sectionList = [
  { id: 'problem', label: 'Problem' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'features', label: 'Features' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
  { id: 'learned', label: 'Learned' },
  { id: 'future', label: 'Future' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/404" replace />

  const idx = projects.findIndex((p) => p.slug === slug)

  return (
    <article className="pt-28 md:pt-32 pb-28">
      <div className="container-page">
        <button
          onClick={() => {
            navigate('/')
            setTimeout(() => {
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }, 60)
          }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wideish text-ink-faint hover:text-rust transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={14} />
          ALL PROJECTS
        </button>

        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs text-rust">{String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <span className="font-mono text-xs tracking-wideish text-ink-faint">{project.category.toUpperCase()}</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tightest text-ink text-balance leading-[0.98] max-w-4xl">
          {project.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg sm:text-xl text-ink-dim leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
            >
              <CodeXml size={15} /> Source code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rust px-5 py-2.5 text-sm font-medium text-paper hover:bg-rust-deep transition-colors duration-200"
            >
              <ExternalLink size={15} /> Live demo
            </a>
          )}
        </div>

        <div className="mt-10 border-y border-ink-line py-5 overflow-x-auto">
          <ProjectFlow stages={flowForSlug(project.slug)} />
        </div>

        <ul className="mt-6 flex flex-wrap gap-2 mb-16">
          {project.stack.map((s) => (
            <li key={s} className="text-xs text-ink-dim border border-ink-line px-3 py-1.5">
              {s}
            </li>
          ))}
        </ul>

        <div className="grid lg:grid-cols-[0.72fr_0.28fr] gap-14">
          <div className="max-w-2xl">
            <Section id="problem" n="01" title="Problem">
              <p>{project.problem}</p>
              <p className="mt-4 text-ink-faint text-[15px] border-l-2 border-rust/50 pl-5">
                {project.whyItMatters}
              </p>
            </Section>

            <Section id="architecture" n="02" title="Architecture">
              <div className="space-y-7">
                {project.architecture.map((a) => (
                  <div key={a.title} className="border-l-2 border-pine/40 pl-5">
                    <h3 className="font-display text-lg text-ink mb-1.5">{a.title}</h3>
                    <p className="text-ink-dim leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="decisions" n="03" title="Technical decisions">
              <div className="space-y-5">
                {project.decisions.map((d) => (
                  <div key={d.decision} className="border border-ink-line p-5 sm:p-6">
                    <h3 className="font-display text-lg text-ink mb-2">{d.decision}</h3>
                    <p className="text-sm text-ink-dim leading-relaxed">{d.reasoning}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="features" n="04" title="Key features">
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {project.features.map((f) => (
                  <li key={f} className="text-ink-dim leading-relaxed flex gap-2.5">
                    <span className="mt-2.5 block h-1 w-1 rounded-full bg-rust shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="challenges" n="05" title="Challenges & trade-offs">
              <div className="space-y-6">
                {project.challenges.map((c) => (
                  <div key={c.challenge}>
                    <h3 className="font-display text-lg text-ink mb-1.5">{c.challenge}</h3>
                    <p className="text-ink-dim leading-relaxed">{c.approach}</p>
                  </div>
                ))}
              </div>
            </Section>

            {project.results.length > 0 && (
              <Section id="results" n="06" title="Results">
                <ul className="space-y-3">
                  {project.results.map((r) => (
                    <li key={r} className="text-ink-dim leading-relaxed flex gap-2.5">
                      <span className="mt-2.5 block h-1 w-1 rounded-full bg-pine shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <Section id="learned" n="07" title="What I learned">
              <ul className="space-y-3">
                {project.learned.map((l) => (
                  <li key={l} className="text-ink-dim leading-relaxed">{l}</li>
                ))}
              </ul>
            </Section>

            <Section id="future" n="08" title="Future improvements" last>
              <ul className="space-y-3">
                {project.future.map((f) => (
                  <li key={f} className="text-ink-dim leading-relaxed flex gap-2.5">
                    <span className="mt-2.5 block h-1 w-1 rounded-full bg-ink-faint shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-xs tracking-wideish text-ink-faint mb-4">ON THIS PAGE</p>
              <ul className="space-y-2.5 border-l border-ink-line">
                {sectionList
                  .filter((s) => s.id !== 'results' || project.results.length > 0)
                  .map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block pl-4 -ml-px border-l border-transparent text-sm text-ink-faint hover:text-rust hover:border-rust transition-colors duration-200"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-ink-line">
                <NextProjectLink current={idx} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}

function Section({
  id,
  n,
  title,
  children,
  last,
}: {
  id: string
  n: string
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <section id={id} className={`pt-12 scroll-mt-28 ${last ? '' : 'border-b border-ink-line pb-12'}`}>
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-mono text-xs text-rust">{n}</span>
        <h2 className="font-display text-2xl text-ink">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function NextProjectLink({ current }: { current: number }) {
  const next: Project = projects[(current + 1) % projects.length]
  return (
    <Link to={`/projects/${next.slug}`} className="group block">
      <p className="font-mono text-xs tracking-wideish text-ink-faint mb-2">NEXT PROJECT</p>
      <p className="font-display text-xl text-ink group-hover:text-rust transition-colors duration-200 text-balance">
        {next.title}
      </p>
    </Link>
  )
}
