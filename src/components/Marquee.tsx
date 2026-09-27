type Props = {
  items: string[]
}

export default function Marquee({ items }: Props) {
  const loop = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-ink-line py-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-mono text-xs tracking-wideish text-ink-faint">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-linestrong" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
