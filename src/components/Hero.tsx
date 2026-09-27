import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import SystemDiagram from './visuals/SystemDiagram'
import Marquee from './Marquee'
import { profile, links } from '../data/profile'

const ease = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: '3', label: 'Featured project case studies' },
  { value: '300+', label: 'LeetCode problems solved' },
  { value: '01', label: 'Reliance Foundation Scholar' },
]

const tickerItems = [
  'PYTHON', 'RETRIEVAL-AUGMENTED GENERATION', 'FASTAPI', 'REACT', 'POSTGRESQL',
  'LANGCHAIN', 'TYPESCRIPT', 'DOCKER', 'SCIKIT-LEARN', 'PYTORCH',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-32 pb-14 md:pt-40">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-14 lg:gap-10 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
            >
              <span className="font-mono text-xs tracking-widest text-rust">
                AI ENGINEER &amp; SOFTWARE DEVELOPER
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-faint" />
              <span className="font-mono text-xs tracking-wideish text-ink-faint">
                {profile.location.toUpperCase()}
              </span>
            </motion.div>

            <h1 className="font-display font-medium text-ink -ml-[0.04em]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease }}
                className="block text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] tracking-tightest"
              >
                Madupu
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease }}
                className="block text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] tracking-tightest italic text-rust"
              >
                Manish Reddy
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease }}
              className="mt-8 max-w-xl text-lg sm:text-xl text-ink-dim leading-relaxed"
            >
              I build the unglamorous parts of AI systems — the retrieval, the data
              pipeline, the API boundary — so the glamorous part actually works.
              Currently studying Computer Science Engineering, currently shipping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44, ease }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-rust"
              >
                View the work
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={links.github.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink-linestrong pb-0.5 transition-colors duration-300 hover:border-rust hover:text-rust"
              >
                GitHub profile
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-lg border-t border-ink-line pt-7"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl sm:text-4xl text-ink tracking-tightest">
                    {s.value}
                  </dd>
                  <dd className="mt-1.5 text-xs text-ink-faint leading-snug">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative border border-ink-line bg-paper-raised/60"
          >
            <SystemDiagram />
          </motion.div>
        </div>
      </div>

      <Marquee items={tickerItems} />

      <div className="container-page flex justify-center py-6">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wideish text-ink-faint hover:text-rust transition-colors duration-300"
        >
          SCROLL
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  )
}
