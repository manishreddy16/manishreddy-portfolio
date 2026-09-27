type Props = {
  stages: string[]
  accent?: 'rust' | 'pine'
  compact?: boolean
}

const flowBySlug: Record<string, string[]> = {
  'document-intelligence': ['Document', 'Parse', 'Chunk', 'Embed', 'Retrieve', 'Ground', 'Answer'],
  'churn-intelligence': ['Dataset', 'Clean', 'Features', 'Compare models', 'Explain', 'Risk score'],
  pulseboard: ['Frontend', 'REST API', 'PostgreSQL', 'WebSocket', 'Redis pub/sub'],
}

export function flowForSlug(slug: string): string[] {
  return flowBySlug[slug] ?? ['Input', 'Process', 'Output']
}

export default function ProjectFlow({ stages, accent = 'rust', compact = false }: Props) {
  const dot = accent === 'rust' ? 'bg-rust' : 'bg-pine'
  const line = accent === 'rust' ? 'border-rust/35' : 'border-pine/35'

  return (
    <div
      className={`flex w-full items-center gap-0 overflow-x-auto ${compact ? 'py-1' : 'py-3'}`}
      role="img"
      aria-label={`Architecture flow: ${stages.join(' to ')}`}
    >
      {stages.map((s, i) => (
        <div key={s} className="flex items-center shrink-0">
          <div className="flex flex-col items-start gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            <span
              className={`whitespace-nowrap font-mono ${
                compact ? 'text-[10px]' : 'text-[11px]'
              } tracking-wide text-ink-dim`}
            >
              {s}
            </span>
          </div>
          {i < stages.length - 1 && (
            <span
              className={`mx-2.5 sm:mx-3.5 h-px w-8 sm:w-12 shrink-0 border-t border-dashed ${line} mb-4`}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  )
}
