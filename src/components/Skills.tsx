import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { skillGroups, exploring } from '../data/skills'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-ink-line">
      <div className="container-page">
        <SectionHeading
          index="03 / STACK"
          title="An engineering stack, not a wall of logos."
          note="Six domains, ordered by how a real system is built — from raw modeling fundamentals up to the infrastructure that keeps it running. Open a layer to see what's actually inside it."
        />

        <div className="mt-14 border-y border-ink-line">
          {skillGroups.map((g, i) => {
            const isOpen = active === i
            return (
              <div key={g.domain} className="border-b border-ink-line last:border-b-0">
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 sm:gap-8 py-6 text-left transition-colors duration-300 hover:bg-paper-raised/60 px-2 -mx-2"
                >
                  <span className="font-mono text-xs text-ink-faint w-7 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-display text-2xl sm:text-3xl tracking-tightest transition-colors duration-300 ${
                      isOpen ? 'text-rust' : 'text-ink'
                    }`}
                  >
                    {g.domain}
                  </span>
                  <span className="hidden md:block flex-1 text-right text-sm text-ink-faint pr-4">
                    {g.note}
                  </span>
                  <span
                    className={`ml-auto shrink-0 grid h-8 w-8 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen ? 'rotate-45 border-rust text-rust' : 'border-ink-linestrong text-ink-faint'
                    }`}
                  >
                    <Plus size={15} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="md:hidden text-sm text-ink-faint pb-4 pl-11 pr-2">{g.note}</p>
                      <ul className="flex flex-wrap gap-2 pb-7 pl-11 pr-2">
                        {g.items.map((item) => (
                          <li
                            key={item}
                            className="font-mono text-xs text-ink-dim border border-ink-line px-3 py-1.5"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border border-dashed border-pine/40 bg-pine/5 px-6 py-6">
          <p className="font-mono text-xs tracking-wideish text-pine shrink-0">
            EXPLORING / BUILDING TOWARD
          </p>
          <ul className="flex flex-wrap gap-2">
            {exploring.map((item) => (
              <li
                key={item}
                className="font-mono text-xs text-pine border border-pine/30 px-3 py-1.5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
