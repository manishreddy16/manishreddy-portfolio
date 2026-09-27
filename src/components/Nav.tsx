import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About', n: '01' },
  { href: '#education', label: 'Education', n: '02' },
  { href: '#skills', label: 'Stack', n: '03' },
  { href: '#projects', label: 'Work', n: '04' },
  { href: '#community', label: 'Community', n: '05' },
  { href: '#achievements', label: 'Notes', n: '06' },
  { href: '#contact', label: 'Contact', n: '07' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-paper/90 backdrop-blur-md border-b border-ink-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-[4.5rem] items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-ink-linestrong font-display text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-rust group-hover:text-rust">
            MR
          </span>
          <span className="hidden sm:block font-mono text-[11px] tracking-wideish text-ink-faint">
            MADUPU&nbsp;MANISH&nbsp;REDDY
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleNav(l.href)}
                className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-ink-dim transition-colors duration-200 hover:text-ink"
              >
                <span className="font-mono text-[10px] text-ink-faint group-hover:text-rust transition-colors">
                  {l.n}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={handleNav('#contact')}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          Say hello
        </a>

        <button
          className="md:hidden relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-ink-line bg-paper"
          >
            <ul className="container-page py-6 flex flex-col">
              {links.map((l) => (
                <li key={l.href} className="border-b border-ink-line last:border-0">
                  <a
                    href={l.href}
                    onClick={handleNav(l.href)}
                    className="flex items-baseline gap-3 py-4 font-display text-2xl text-ink"
                  >
                    <span className="font-mono text-xs text-rust">{l.n}</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
