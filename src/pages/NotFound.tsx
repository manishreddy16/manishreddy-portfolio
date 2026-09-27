import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center border-t border-ink-line">
      <div className="container-page text-center">
        <p className="font-mono text-xs tracking-widest text-rust mb-5">404 / NOT FOUND</p>
        <h1 className="font-display text-5xl sm:text-6xl font-medium tracking-tightest text-ink text-balance">
          This page doesn't exist.
        </h1>
        <p className="mt-5 text-ink-dim max-w-md mx-auto">
          The link may be outdated, or the page moved. Head back to the homepage to keep
          looking.
        </p>
        <Link
          to="/"
          className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper hover:bg-rust transition-colors duration-300"
        >
          Back to home
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}
