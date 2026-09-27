type Props = {
  index: string
  title: string
  note?: string
}

export default function SectionHeading({ index, title, note }: Props) {
  return (
    <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-6 md:gap-10">
      <div>
        <span className="font-mono text-xs tracking-wideish text-rust">{index}</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-medium tracking-tightest leading-[0.95] text-ink text-balance">
          {title}
        </h2>
      </div>
      {note && (
        <p className="max-w-prose text-ink-dim leading-relaxed self-end">{note}</p>
      )}
    </div>
  )
}
