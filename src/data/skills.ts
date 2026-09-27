export type SkillGroup = {
  domain: string
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    domain: 'AI & Machine Learning',
    note: 'Modeling, evaluation, and the fundamentals underneath the tooling.',
    items: [
      'Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch',
      'Feature Engineering', 'Classification & Regression', 'Clustering',
      'Model Evaluation', 'Deep Learning Basics',
    ],
  },
  {
    domain: 'Generative AI',
    note: 'Building applications on top of LLMs, not just calling an API.',
    items: [
      'LLM APIs', 'LangChain', 'Retrieval-Augmented Generation', 'Embeddings',
      'Vector Databases', 'Semantic Search', 'Prompt Engineering',
      'Structured Outputs', 'Tool Calling', 'Agentic Workflows',
    ],
  },
  {
    domain: 'Software Engineering',
    note: 'Core languages and the discipline of shipping working systems.',
    items: [
      'Python', 'C++', 'Java', 'TypeScript', 'JavaScript', 'SQL',
      'REST API Design', 'FastAPI', 'Authentication', 'Git & GitHub',
    ],
  },
  {
    domain: 'Frontend',
    note: 'Interfaces that make complex systems feel simple to use.',
    items: [
      'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
      'Responsive Design', 'Component Architecture',
    ],
  },
  {
    domain: 'Backend & Data',
    note: 'Where the actual state of a product lives.',
    items: [
      'FastAPI', 'Node.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'Data Modeling',
    ],
  },
  {
    domain: 'Cloud & DevOps',
    note: 'Getting things running somewhere other than a laptop.',
    items: [
      'Docker', 'AWS (EC2, S3)', 'CI/CD (GitHub Actions)', 'Linux', 'Basic Monitoring',
    ],
  },
]

export const exploring: string[] = [
  'LLM Observability & Evaluation Frameworks',
  'Model Serving at Scale (vLLM, Triton)',
  'Experiment Tracking (MLflow, Weights & Biases)',
  'Kubernetes for ML Workloads',
  'Multimodal AI Applications',
  'Azure AI Services',
]
