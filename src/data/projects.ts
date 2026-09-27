export type Project = {
  slug: string
  category: string
  title: string
  tagline: string
  summary: string
  stack: string[]
  github?: string
  demo?: string
  problem: string
  whyItMatters: string
  architecture: { title: string; description: string }[]
  decisions: { decision: string; reasoning: string }[]
  features: string[]
  challenges: { challenge: string; approach: string }[]
  results: string[]
  learned: string[]
  future: string[]
}

export const projects: Project[] = [
  {
    slug: 'document-intelligence',
    category: 'GenAI / AI Systems',
    title: 'Contextly — Grounded Document Intelligence Assistant',
    tagline: 'A retrieval-augmented assistant that answers questions from a document set and shows exactly where each answer came from.',
    summary:
      'Contextly ingests PDFs, DOCX, and Markdown files, builds a searchable knowledge base out of them, and answers natural-language questions with citations back to the source passages — instead of a single "upload a PDF and chat" demo, it treats retrieval quality and grounding as the actual engineering problem.',
    stack: [
      'Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Sentence-Transformers',
      'React', 'TypeScript', 'Tailwind CSS', 'Docker',
    ],
    problem:
      'Most "chat with your documents" demos stop at feeding raw chunks into an LLM and hoping for the best. They break down with longer documents, mixed file types, and questions that need information from more than one section — and they rarely tell you whether an answer can actually be trusted.',
    whyItMatters:
      'The interesting engineering problem in RAG is not calling an LLM API — it is everything upstream of it: how a document is parsed and split, how relevant chunks are actually found, and how the system communicates uncertainty instead of confidently making things up. Getting that pipeline right is what separates a working AI product from a impressive-looking prototype.',
    architecture: [
      {
        title: 'Ingestion & Parsing',
        description:
          'Uploaded files are routed by type — PDF text extraction, DOCX parsing, and Markdown are each handled with a dedicated loader so structure (headings, tables, lists) survives into the chunking stage instead of collapsing into one undifferentiated text blob.',
      },
      {
        title: 'Chunking Strategy',
        description:
          'Documents are split with a recursive, structure-aware splitter that respects paragraph and heading boundaries rather than cutting on a fixed character count, with a small overlap between chunks so an answer near a chunk boundary is not lost.',
      },
      {
        title: 'Embedding & Vector Store',
        description:
          'Each chunk is embedded with a sentence-transformers model and stored in ChromaDB alongside metadata (source file, page number, section heading), so retrieval can filter by document or section, not just similarity.',
      },
      {
        title: 'Retrieval & Reranking',
        description:
          'A query first pulls a broader candidate set via vector similarity, then a lightweight reranking pass reorders candidates using lexical overlap with the query, which noticeably reduces cases where a semantically-close but topically-irrelevant chunk outranks the right one.',
      },
      {
        title: 'Context Construction & Generation',
        description:
          'The top reranked chunks are assembled into a bounded context window with their source metadata, passed to the LLM with an explicit instruction to answer only from the provided context and to say so when the context is insufficient.',
      },
      {
        title: 'Grounded Response & Citations',
        description:
          'The response is returned alongside the exact source chunks used, shown in the UI as expandable citations, so a user can verify a claim against the original document instead of taking the model\'s word for it.',
      },
    ],
    decisions: [
      {
        decision: 'Structure-aware chunking over fixed-size chunking',
        reasoning:
          'Early fixed-size chunking regularly split tables and mid-sentence, which hurt both embedding quality and readability of citations. Respecting document structure cost more engineering effort but made retrieval and citations meaningfully more reliable.',
      },
      {
        decision: 'A lightweight reranker instead of a second heavy model',
        reasoning:
          'A full cross-encoder reranker was accurate but added noticeable latency for a personal-scale project. A cheaper lexical-overlap rerank on the vector search shortlist gave most of the benefit at a fraction of the cost — a deliberate accuracy/latency trade-off.',
      },
      {
        decision: 'Explicit "insufficient context" behavior',
        reasoning:
          'The system prompt requires the model to say when the retrieved context does not answer the question, rather than filling the gap with general knowledge. This is the single change that most reduced confidently wrong answers during testing.',
      },
    ],
    features: [
      'Multi-format ingestion (PDF, DOCX, Markdown)',
      'Conversational querying with memory of prior turns in a session',
      'Inline citations linked to the exact source passage',
      'Per-document and per-section retrieval filtering',
      'Configurable LLM backend (swap providers without touching the pipeline)',
      'A small retrieval evaluation harness for regression-testing changes to the pipeline',
    ],
    challenges: [
      {
        challenge: 'Chunks that were semantically similar but factually wrong for the query',
        approach:
          'Introduced the reranking stage and metadata filtering, and tuned chunk overlap so that near-boundary context was preserved without inflating the index size.',
      },
      {
        challenge: 'Multi-document questions ("compare X in file A and file B")',
        approach:
          'Extended retrieval to optionally search across the whole corpus rather than one document, and adjusted the prompt to explicitly ask the model to attribute each part of its answer to its source document.',
      },
      {
        challenge: 'Measuring whether retrieval was actually improving',
        approach:
          'Built a small internal evaluation set of question/expected-source pairs and tracked retrieval hit-rate before and after pipeline changes, instead of judging quality by eyeballing a handful of chat responses.',
      },
    ],
    results: [
      'On an internal evaluation set of 40 question/document pairs, adding the reranking stage improved top-3 retrieval hit-rate over vector-only search.',
      'Citation-linking made it straightforward to spot the remaining failure cases, which were concentrated in tables and multi-column PDF layouts rather than prose.',
    ],
    learned: [
      'Retrieval quality, not model choice, is the dominant factor in whether a RAG system feels trustworthy.',
      'An evaluation harness — even a small one — is worth building before iterating further on a retrieval pipeline; intuition about "better" retrieval is unreliable without it.',
    ],
    future: [
      'Add a cross-encoder reranker behind a feature flag for larger document sets where the latency cost is worth it.',
      'Support agentic multi-step retrieval for questions that require reasoning across several lookups.',
      'Add structured-output extraction for tabular data inside PDFs.',
    ],
  },
  {
    slug: 'churn-intelligence',
    category: 'ML / Data Intelligence',
    title: 'Retainly — Customer Churn Prediction & Retention Analytics',
    tagline: 'A model-comparison-driven churn system that goes past a single accuracy number into which customers are at risk, why, and what to do about it.',
    summary:
      'Retainly takes a customer behavior and subscription dataset through a full ML workflow — cleaning, feature engineering, handling class imbalance, comparing several model families, and explaining predictions — then exposes the result through a simple prediction API and dashboard aimed at a business reader, not just a notebook.',
    stack: [
      'Python', 'Pandas', 'Scikit-learn', 'SQL', 'FastAPI', 'React', 'TypeScript',
    ],
    problem:
      'Churn prediction projects tend to stop at "we got 85% accuracy" on an already-clean, already-balanced dataset. That is not the actual problem a business has: churn is typically rare, the cost of a false negative and a false positive are different, and a number with no explanation is not something a retention team can act on.',
    whyItMatters:
      'The value of a churn model is in the decisions it changes — who gets a retention offer, and why. That requires treating class imbalance seriously, comparing models rather than trusting the first one that runs, and being able to explain individual predictions, not just report an aggregate metric.',
    architecture: [
      {
        title: 'Data Cleaning & EDA',
        description:
          'Raw usage and subscription data is cleaned for missing values and inconsistent categorical encodings, then explored to understand churn rate by tenure, plan type, and engagement level before any modeling starts.',
      },
      {
        title: 'Feature Engineering',
        description:
          'Derived features such as recent engagement trend, support-ticket frequency, and tenure buckets are constructed, since raw usage counts alone were weak predictors compared to trend-based features.',
      },
      {
        title: 'Class Imbalance Handling',
        description:
          'Churn is the minority class, so models are trained with class weighting and evaluated with resampling techniques compared against each other, rather than optimizing for raw accuracy, which is misleading on imbalanced data.',
      },
      {
        title: 'Model Comparison',
        description:
          'Logistic regression, random forest, and gradient boosting models are trained and compared under identical cross-validation folds, using precision, recall, F1, and ROC-AUC rather than a single metric.',
      },
      {
        title: 'Explainability',
        description:
          'Feature importance and per-prediction explanations (via SHAP-style attribution) surface which factors drove an individual customer\'s risk score, so a prediction is not a black box.',
      },
      {
        title: 'Prediction API & Dashboard',
        description:
          'The selected model is served behind a FastAPI endpoint, with a small React dashboard that lists at-risk customers ranked by predicted probability alongside the top contributing factors for each.',
      },
    ],
    decisions: [
      {
        decision: 'Optimizing for recall on the churn class over raw accuracy',
        reasoning:
          'A missed churner (false negative) is more costly than an unnecessary retention offer (false positive) in most subscription businesses, so the model selection criterion was shifted deliberately rather than defaulting to accuracy.',
      },
      {
        decision: 'Comparing three model families under identical cross-validation',
        reasoning:
          'Committing to a single model family early is a common shortcut. Running logistic regression, random forest, and gradient boosting under the same folds made the trade-off between interpretability and predictive power explicit rather than assumed.',
      },
      {
        decision: 'Threshold tuning instead of the default 0.5 cutoff',
        reasoning:
          'The default classification threshold rarely matches the actual cost trade-off of the business problem. Threshold analysis against precision/recall curves let the cutoff be chosen deliberately for the imbalance in this dataset.',
      },
    ],
    features: [
      'End-to-end pipeline from raw CSV to served predictions',
      'Model comparison report (precision, recall, F1, ROC-AUC per model)',
      'Class-imbalance-aware training and threshold tuning',
      'Per-customer explainability for individual risk scores',
      'Ranked at-risk customer dashboard with top contributing factors',
      'Retraining script so the pipeline is reproducible, not a one-off notebook',
    ],
    challenges: [
      {
        challenge: 'Class imbalance skewing naive accuracy upward',
        approach:
          'Switched evaluation to precision/recall/F1 on the minority class and used class weighting during training instead of only oversampling, after comparing both approaches.',
      },
      {
        challenge: 'Feature leakage from a column that encoded future information',
        approach:
          'Caught during EDA when a single feature produced suspiciously high accuracy; traced it back to a field that was only populated after a customer had already churned, and removed it.',
      },
      {
        challenge: 'Turning a notebook into something serve-able',
        approach:
          'Refactored the modeling code into a pipeline object that could be pickled and loaded by the FastAPI service, separating experimentation code from the production inference path.',
      },
    ],
    results: [
      'Gradient boosting outperformed logistic regression and random forest on cross-validated F1 and ROC-AUC for the churn class on this dataset.',
      'Threshold tuning materially shifted the precision/recall balance compared to the default cutoff, illustrating why the default threshold is rarely the right choice for imbalanced problems.',
    ],
    learned: [
      'A model comparison table communicates more than a single "best" number — it shows the trade-offs a business actually has to choose between.',
      'Explainability is not an afterthought feature; it is what makes a prediction usable by someone who is not the person who built the model.',
    ],
    future: [
      'Add a monitoring step to detect feature or prediction drift if retrained on new data over time.',
      'Experiment with survival-analysis framing (time-to-churn) instead of a binary label.',
      'Wire the dashboard to a scheduled retraining job.',
    ],
  },
  {
    slug: 'pulseboard',
    category: 'Full-Stack Engineering',
    title: 'PulseBoard — Real-Time Sales & Operations Dashboard',
    tagline: 'A full-stack analytics application with authenticated multi-user access and live-updating metrics, built to demonstrate system design rather than another notebook.',
    summary:
      'PulseBoard turns a sales and customer dataset into an authenticated, multi-user dashboard: a FastAPI backend with a normalized PostgreSQL schema, a WebSocket layer for live metric updates, and a React frontend focused on how someone actually reads a dashboard during a workday, not just how one looks in a screenshot.',
    stack: [
      'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL',
      'WebSockets', 'JWT Auth', 'Docker', 'Redis',
    ],
    demo: undefined,
    problem:
      'Data analytics projects are frequently presented as a static notebook or a single Streamlit script. That demonstrates data skills but not software engineering skills: there is no persistence layer, no authentication, no concurrency story, and no real API boundary between data and presentation.',
    whyItMatters:
      'A dashboard that several people can actually use at once — safely, with their own login, and with numbers that update without a manual refresh — is a materially different engineering problem than a script that runs once and prints a chart. It requires real decisions about schema design, API contracts, and state synchronization.',
    architecture: [
      {
        title: 'Data Layer',
        description:
          'Sales, customer, and order data is normalized into a relational PostgreSQL schema instead of kept as a flat CSV, with indexes chosen around the actual query patterns the dashboard needs (date-range aggregation, per-segment filtering).',
      },
      {
        title: 'API Layer',
        description:
          'A FastAPI service exposes typed REST endpoints for historical queries and a WebSocket endpoint for live metric pushes, with Pydantic models keeping the request/response contract explicit and validated.',
      },
      {
        title: 'Auth & Access',
        description:
          'JWT-based authentication with hashed credentials gates access to the dashboard; each session only sees data scoped to their account, exercising a real (if small-scale) multi-tenancy pattern.',
      },
      {
        title: 'Real-Time Layer',
        description:
          'A lightweight event pipeline pushes metric updates over WebSockets to connected dashboard clients, with Redis used as a pub/sub layer so updates can, in principle, fan out across multiple backend instances rather than being tied to one process.',
      },
      {
        title: 'Frontend',
        description:
          'The React frontend treats the WebSocket feed and the REST historical queries as two different data sources reconciled into one view, so a live number and a historical trend line stay consistent instead of fighting each other.',
      },
      {
        title: 'Deployment Architecture',
        description:
          'The frontend, API, database, and Redis each run as separate Docker services defined in a single compose file, mirroring how the pieces would be deployed independently in a real environment.',
      },
    ],
    decisions: [
      {
        decision: 'WebSockets over polling for live metrics',
        reasoning:
          'Polling was simpler to build first and used to validate the feature, but was deliberately replaced with WebSockets once the update frequency made polling wasteful — a concrete example of choosing the simple approach first and upgrading it once it was justified.',
      },
      {
        decision: 'Redis pub/sub in front of the WebSocket layer',
        reasoning:
          'Even at personal-project scale, wiring updates through Redis rather than an in-process event emitter means the design does not silently break the moment the API runs as more than one instance.',
      },
      {
        decision: 'Normalized relational schema over a single denormalized table',
        reasoning:
          'A flat table was faster to prototype with but made the aggregation queries the dashboard needed increasingly awkward. Normalizing early, with indexes matched to the dashboard\'s actual filters, kept query complexity manageable as features were added.',
      },
    ],
    features: [
      'Authenticated multi-user access with hashed credentials',
      'Live-updating revenue, order, and customer metrics over WebSockets',
      'Historical trend queries with date-range and segment filtering',
      'Typed, validated API contracts via Pydantic',
      'Dockerized services for frontend, API, database, and Redis',
      'Responsive dashboard layout usable on a laptop or a phone',
    ],
    challenges: [
      {
        challenge: 'Keeping the live WebSocket feed and historical REST data consistent',
        approach:
          'Established a single source of truth on the frontend (a small state store) that both data sources write into, rather than letting each component manage its own copy of the metrics.',
      },
      {
        challenge: 'Query performance on aggregation endpoints as data volume grew in testing',
        approach:
          'Added targeted indexes based on actual query plans (via EXPLAIN ANALYZE) instead of indexing every column, which kept write performance reasonable while fixing the slow read paths.',
      },
      {
        challenge: 'Reconnecting WebSocket clients cleanly after a dropped connection',
        approach:
          'Implemented exponential backoff reconnection with a state resync request on reconnect, so a flaky connection does not leave the dashboard silently stale.',
      },
    ],
    results: [
      'Indexing based on measured query plans reduced the slowest aggregation endpoint\'s response time noticeably compared to the initial unindexed schema, verified with repeated local benchmarking rather than assumed.',
    ],
    learned: [
      'Real-time features add real complexity — reconnection handling and state reconciliation take more engineering effort than the initial "just open a socket" version suggests.',
      'Designing the database schema around actual query patterns, not just the shape of the source data, is what makes a dashboard stay fast as it grows.',
    ],
    future: [
      'Add role-based permissions (viewer vs. admin) rather than a single access level.',
      'Add an alerting rule engine on top of the live metric stream.',
      'Move background aggregation jobs to a task queue instead of inline computation.',
    ],
  },
]
