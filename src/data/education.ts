export type EducationEntry = {
  institution: string
  degree: string
  period: string
  score: string
  /** True for the current/primary entry — rendered with more visual weight. */
  primary: boolean
}

/**
 * Centralized education history. Ordered most-recent first; only `primary`
 * controls emphasis in the UI.
 */
export const education: EducationEntry[] = [
  {
    institution: 'Chaitanya Bharati Institute of Technology (CBIT), Hyderabad',
    degree: 'B.E. — Computer Science & Engineering',
    period: '2024 – Present',
    score: 'CGPA 9.17 / 10',
    primary: true,
  },
  {
    institution: 'Turito Junior College',
    degree: 'Intermediate / Class XII',
    period: '2022 – 2024',
    score: '97%',
    primary: false,
  },
  {
    institution: 'Vishwashanthi High School',
    degree: 'Class X',
    period: '2018 – 2022',
    score: 'CGPA 9.8 / 10',
    primary: false,
  },
]
