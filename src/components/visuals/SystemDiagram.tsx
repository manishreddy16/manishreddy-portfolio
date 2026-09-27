import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

const stages = [
  { n: '01', label: 'Input', sub: 'documents · data · users' },
  { n: '02', label: 'Process', sub: 'parsing · features · state' },
  { n: '03', label: 'Model', sub: 'retrieval · inference · logic' },
  { n: '04', label: 'Serve', sub: 'api · auth · real-time' },
  { n: '05', label: 'Outcome', sub: 'grounded · explained · useful' },
]

export default function SystemDiagram() {
  return (
    <div className="relative h-full w-full p-7 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[11px] tracking-wideish text-ink-faint">
          SYSTEM&nbsp;/ 001
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-pine" />
          <span className="font-mono text-[11px] tracking-wideish text-ink-faint">
            SYSTEM FLOW
          </span>
        </span>
      </div>

      <div className="relative pl-1">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-[15px] top-2 bottom-2 w-px bg-ink-linestrong"
        />

        <ul className="space-y-0">
          {stages.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.14, ease }}
              className="relative flex items-start gap-4 py-3.5 first:pt-0 last:pb-0"
            >
              <span
                className={`relative z-10 mt-0.5 grid h-[31px] w-[31px] shrink-0 place-items-center rounded-full border font-mono text-[10px] ${
                  i === stages.length - 1
                    ? 'border-rust bg-rust text-paper'
                    : 'border-ink-linestrong bg-paper text-ink-faint'
                }`}
              >
                {s.n}
              </span>
              <div className="pt-1">
                <p className="font-display text-lg leading-none text-ink">{s.label}</p>
                <p className="mt-1 font-mono text-[10.5px] tracking-wide text-ink-faint">
                  {s.sub}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-7 flex items-center gap-2 border-t border-dashed border-ink-line pt-5">
        <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse" aria-hidden="true" />
        <p className="font-mono text-[10.5px] tracking-wide text-ink-faint">
          Every stage above is a real engineering decision, not a diagram for its own sake.
        </p>
      </div>
    </div>
  )
}
