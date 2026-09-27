import { profile } from '../data/profile'

const beyondCode = ['Cricket', 'Table Tennis', 'Movies & Cinema']

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="container-page py-10 flex flex-col sm:flex-row sm:items-start justify-between gap-8 border-b border-ink-line">
        <div>
          <p className="font-mono text-[10px] tracking-wideish text-ink-faint mb-2.5">
            BEYOND CODE
          </p>
          <p className="font-display text-base sm:text-lg text-ink-dim">
            {beyondCode.join('  ·  ')}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="font-mono text-[10px] tracking-wideish text-ink-faint mb-2.5">
            LANGUAGES
          </p>
          <p className="font-display text-base sm:text-lg text-ink-dim">
            {profile.languages.join('  ·  ')}
          </p>
        </div>
      </div>

      <div className="container-page py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-wide text-ink-faint">
          &copy; {new Date().getFullYear()} {profile.name.toUpperCase()}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-ink-faint">
          BUILT WITH REACT · TYPESCRIPT · TAILWIND CSS
        </p>
      </div>
    </footer>
  )
}
