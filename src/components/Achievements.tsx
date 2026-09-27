import SectionHeading from './SectionHeading'

const achievements = [
  {
    title: 'Reliance Foundation Scholar',
    detail: 'Selected as a scholarship recipient recognizing academic merit.',
  },
  {
    title: '300+ LeetCode problems solved',
    detail: 'Ongoing practice across data structures, algorithms, and problem patterns.',
  },
  {
    title: 'CBIT, Hyderabad',
    detail: 'B.E. Computer Science Engineering at Chaitanya Bharathi Institute of Technology.',
  },
]

const coursework = [
  'Data Structures & Algorithms', 'DBMS', 'Operating Systems',
  'Computer Networks', 'Object-Oriented Programming', 'Software Engineering',
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 border-t border-ink-line">
      <div className="container-page">
        <SectionHeading
          index="06 / NOTES"
          title="Kept short and specific."
          note="Evidence of consistency rather than a shelf of awards — what's here is what's actually true."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
          {achievements.map((a, i) => (
            <div key={a.title} className="bg-paper p-8 sm:p-10">
              <span className="font-mono text-xs text-rust">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl tracking-tightest text-ink text-balance">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-ink-faint leading-relaxed max-w-sm">{a.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="font-mono text-xs tracking-wideish text-ink-faint mb-4">COURSEWORK FOUNDATION</p>
          <ul className="flex flex-wrap gap-2">
            {coursework.map((f) => (
              <li key={f} className="text-xs text-ink-dim border border-ink-line px-3 py-1.5">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
