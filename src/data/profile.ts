export const profile = {
  name: 'Madupu Manish Reddy',
  location: 'Hyderabad, Telangana, India',
  role: 'AI Engineer & Software Developer',
  education: 'B.E. — Computer Science & Engineering, Chaitanya Bharati Institute of Technology',
  languages: ['English', 'Hindi', 'Telugu'],
}

export type SocialLink = {
  label: string
  /** Display value shown in the UI (handle/address, not the full URL). */
  value: string
  href: string
  /**
   * True while `href`/`value` above is a placeholder rather than Manish's real
   * profile URL. Every consumer of `links` should treat this as the single
   * source of truth instead of hardcoding or guessing a URL. Flip to `false`
   * once the real URL is confirmed — do not invent one.
   */
  placeholder: boolean
}

/**
 * Centralized external-link configuration. Every social/contact link in the
 * site reads from here — nowhere else should a raw mailto:/github.com/
 * linkedin.com/leetcode.com URL be hardcoded. Update a link in exactly one
 * place and it changes everywhere it's used.
 */
export const links: Record<'email' | 'github' | 'linkedin' | 'leetcode', SocialLink> = {
  email: {
    label: 'Email',
    value: 'm.manishreddy16@gmail.com',
    href: 'mailto:m.manishreddy16@gmail.com',
    placeholder: false,
  },
  github: {
    label: 'GitHub',
    value: 'github.com/manishreddy16',
    href: 'https://github.com/manishreddy16',
    placeholder: false,
  },
  linkedin: {
    label: 'LinkedIn',
    value: 'linkedin.com/in/manish-reddy-madupu-72b70b370',
    href: 'https://www.linkedin.com/in/manish-reddy-madupu-72b70b370',
    placeholder: false,
  },
  leetcode: {
    label: 'LeetCode',
    value: 'leetcode.com/u/manish_reddy_1604',
    href: 'https://leetcode.com/u/manish_reddy_1604/',
    placeholder: false,
  },
}

if (import.meta.env.DEV) {
  const stillPlaceholder = Object.values(links).filter((l) => l.placeholder)
  if (stillPlaceholder.length) {
    // eslint-disable-next-line no-console
    console.warn(
      `[links] ${stillPlaceholder.length} link(s) are still placeholders — ` +
        `update src/data/profile.ts before publishing: ` +
        stillPlaceholder.map((l) => l.label).join(', '),
    )
  }
}
