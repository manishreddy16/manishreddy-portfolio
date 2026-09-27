import { motion } from 'framer-motion'
import { communityItems } from '../data/community'
import SectionHeading from './SectionHeading'

export default function Community() {
  return (
    <section id="community" className="py-24 md:py-32 border-t border-ink-line">
      <div className="container-page">
        <SectionHeading
          index="05 / COMMUNITY"
          title="Building in the open, with other people."
          note="Technical work rarely happens alone — the communities and events that keep the practice honest."
        />

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-[3px] sm:left-1 top-2 bottom-2 w-px bg-ink-line" aria-hidden="true" />

          <ul className="space-y-10">
            {communityItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  className="absolute -left-8 sm:-left-10 top-1.5 grid h-[7px] w-[7px] place-items-center rounded-full bg-rust"
                  aria-hidden="true"
                />
                <div className="grid sm:grid-cols-[0.42fr_0.58fr] gap-2 sm:gap-8">
                  <h3 className="font-display text-xl sm:text-2xl text-ink text-balance">
                    {item.label}
                  </h3>
                  <p className="text-sm text-ink-faint leading-relaxed max-w-md">
                    {item.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
