import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

const focus = [
  { label: 'Generative AI', detail: 'Retrieval, grounding, evaluation — not just prompting.' },
  { label: 'Applied ML', detail: 'Model comparison, imbalance, explainability over a single metric.' },
  { label: 'Systems Engineering', detail: 'APIs, schemas, and state that hold up past a demo.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-ink-line">
      <div className="container-page">
        <SectionHeading
          index="01 / ABOUT"
          title="Two disciplines, one habit of finishing things."
        />

        <div className="mt-14 grid lg:grid-cols-[0.62fr_0.38fr] gap-14">
          <div className="space-y-6 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl sm:text-3xl leading-[1.3] text-ink text-balance"
            >
              Manish is pursuing a B.E. in Computer Science Engineering at CBIT, working
              at the intersection of AI/ML and software engineering — treated as one
              discipline, not two separate tracks.
            </motion.p>
            <p className="text-ink-dim leading-relaxed">
              His projects usually pair a real model or retrieval system with a real
              backend and frontend around it: a churn model is only useful behind an API
              and a dashboard someone can act on; a retrieval pipeline is only trustworthy
              if it can show its work.
            </p>
            <p className="text-ink-dim leading-relaxed">
              Current focus is generative AI applications — retrieval-augmented systems,
              LLM tool use, and the evaluation work that makes them trustworthy — alongside
              the backend and web engineering needed to turn a working model into a usable
              product.
            </p>
            <p className="text-ink-dim leading-relaxed">
              Alongside project work, he keeps a steady practice of data-structures and
              algorithms problem-solving, and is moving deliberately from prototype-grade
              code toward production-grade engineering: typed contracts, evaluated
              pipelines, and systems built to be maintained, not demoed once.
            </p>
          </div>

          <div className="space-y-0 lg:border-l lg:border-ink-line lg:pl-10">
            <p className="font-mono text-xs tracking-wideish text-ink-faint mb-6">
              CURRENT FOCUS
            </p>
            <ul>
              {focus.map((f, i) => (
                <li key={f.label} className="border-b border-ink-line py-5 first:pt-0 last:border-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-rust">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-lg text-ink">{f.label}</h3>
                  </div>
                  <p className="mt-1.5 pl-7 text-sm text-ink-faint leading-relaxed">{f.detail}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-ink-line">
              <p className="font-mono text-xs tracking-wideish text-ink-faint mb-2">EDUCATION</p>
              <p className="text-sm text-ink leading-relaxed">{profile.education}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
