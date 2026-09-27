import { education } from '../data/education'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-ink-line">
      <div className="container-page">
        <SectionHeading
          index="02 / EDUCATION"
          title="A short, upward record."
          note="Three stages, most recent first — the numbers are here because they're true, not because they're the point."
        />

        <div className="mt-14 border-t border-ink-line">
          {education.map((e, i) => (
            <div
              key={e.institution}
              className="grid sm:grid-cols-[2rem_1fr_auto] gap-x-6 gap-y-3 items-baseline border-b border-ink-line py-8 sm:py-9"
            >
              <span className="font-mono text-xs text-rust">{String(i + 1).padStart(2, '0')}</span>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                  <h3
                    className={`font-display tracking-tightest text-ink text-balance ${
                      e.primary ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl text-ink-dim'
                    }`}
                  >
                    {e.institution}
                  </h3>
                  {e.primary && (
                    <span className="font-mono text-[10px] tracking-wideish text-rust border border-rust/40 rounded-full px-2 py-0.5">
                      CURRENT
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1.5 text-sm leading-relaxed ${
                    e.primary ? 'text-ink-faint' : 'text-ink-faint/80'
                  }`}
                >
                  {e.degree}
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <p className="font-mono text-xs text-ink-faint">{e.period}</p>
                <p className="mt-1.5 font-mono text-xs text-ink">{e.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
