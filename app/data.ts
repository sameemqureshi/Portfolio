import { Github, Linkedin, Mail } from 'lucide-react';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

export const socialLinks = [
  { icon: Github, href: 'https://github.com/sameemqureshi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sameemqureshi/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:qureshisameem01@gmail.com', label: 'Email' }
];

export const projects = [
  {
    title: 'Heart Disease Prediction: Production MLOps Pipeline on GCP',
    slug: 'heart-disease-prediction-mlops',
    desc: 'Production-ready heart disease prediction system achieving 94% AUC with <200ms latency. End-to-end MLOps workflow on GKE with autoscaling, GitHub Actions CI/CD, Prometheus observability, and SHAP/Fairlearn/Evidently model governance.',
    tags: ['MLOps', 'GCP', 'GKE', 'Kubernetes', 'FastAPI', 'Docker', 'GitHub Actions', 'Prometheus', 'SHAP', 'Fairlearn', 'Evidently'],
    image: `${basePath}/projects/heart-disease-mlops.svg`,
    color: 'from-red-500/20 to-rose-600/20',
    link: '/projects/heart-disease-prediction-mlops',
    github: 'https://github.com/sameemqureshi/21f1000868_IITMBS_MLOPS_OPPE2',
    content: {
      overview: 'An end-to-end production MLOps pipeline for heart disease risk classification. The project demonstrates enterprise-grade model lifecycle management — from automated training and containerized inference to cloud-native GKE orchestration, real-time telemetry, and rigorous AI governance.',
      features: [
        'Containerized FastAPI inference service deployed on Google Kubernetes Engine (GKE) with Horizontal Pod Autoscaling and load balancing.',
        'Automated CI/CD pipeline using GitHub Actions for linting, testing, Docker image creation, and rolling deployment to GCP Artifact Registry.',
        'Comprehensive telemetry and observability with Prometheus metrics, structured JSON logging, and latency dashboards.',
        'Model governance suite incorporating SHAP for explainable predictions, Fairlearn for demographic bias auditing, and Evidently for continuous feature drift monitoring.',
        'High-concurrency stress testing with wrk handling 2,000+ concurrent requests while preserving <200ms latency.'
      ],
      challenges: 'Balancing high throughput and low inference latency under dynamic loads while ensuring ethical model behavior, fairness across patient demographics, and zero-downtime rolling upgrades.',
      solutions: 'Engineered a lightweight asynchronous FastAPI server with multi-worker configurations, integrated automated drift alerts to trigger retraining jobs, and implemented Kubernetes rolling update strategies with readiness/liveness health probes.'
    }
  },
  {
    title: 'DocuVision RAG: AI-Driven Visual Knowledge Extraction',
    slug: 'docuvision-rag',
    desc: 'Multimodal Vision-Language RAG system for querying complex PDFs, diagrams, and scanned documents with context-aware visual retrieval. Delivers a 40% accuracy improvement over text-only RAG pipelines.',
    tags: ['RAG', 'Vision Language Models', 'PyTorch', 'FastAPI', 'ChromaDB', 'Python'],
    image: `${basePath}/projects/docuvision-rag.svg`,
    color: 'from-cyan-500/20 to-blue-600/20',
    link: '/projects/docuvision-rag',
    github: 'https://github.com/sameemqureshi/DocuVision-RAG-AI-Driven-Visual-Knowledge-Extraction',
    content: {
      overview: 'Traditional RAG pipelines struggle when documents contain charts, schematics, tables, and multi-column formatting. DocuVision RAG bridges this gap by marrying Vision Language Models (VLMs) with vector retrieval to extract and contextualize rich visual documents.',
      features: [
        'Multimodal document parsing pipeline handling complex PDFs, high-resolution scans, charts, and technical drawings.',
        'Deep layout analysis to preserve tabular hierarchies, reading order, and figure-caption relationships.',
        'Vector embeddings generated and indexed using ChromaDB with metadata filtering across page sections.',
        'FastAPI backend providing low-latency streaming endpoints for visual question answering with source page citations.'
      ],
      challenges: 'Standard OCR tools drop spatial hierarchies and misinterpret multi-column text and diagrams, creating degraded vector embeddings.',
      solutions: 'Built a specialized pre-processing pipeline segmenting documents into semantic layout blocks, generating detailed visual captions via VLMs, and indexing composite text-visual embeddings.'
    }
  },
  {
    title: 'YODOQ: Fault-Tolerant In-Memory Job Queue',
    slug: 'yodoq-job-queue',
    desc: 'Distributed in-memory task queue in Go featuring at-least-once delivery, lease-based job execution, WAL persistence, priority scheduling, and zero job loss under failure rates up to 50%.',
    tags: ['Go', 'Concurrency', 'Distributed Systems', 'Write-Ahead Logging', 'Fault Tolerance'],
    image: `${basePath}/projects/yodoq-job-queue.svg`,
    color: 'from-emerald-500/20 to-teal-600/20',
    link: '/projects/yodoq-job-queue',
    github: 'https://github.com/sameemqureshi/YODOQ',
    content: {
      overview: 'YODOQ is a high-performance, fault-tolerant in-memory asynchronous job processing queue built from scratch in Go. It enforces at-least-once processing semantics with lease timeouts, priority queues, and durable recovery.',
      features: [
        'Lease-based worker execution with automatic heartbeat checks and expired lease reclamation.',
        'Write-Ahead Logging (WAL) engine ensuring zero job loss across abrupt process crashes and immediate state reconstruction on boot.',
        'Priority scheduling with bounded exponential-backoff retries and stale acknowledgment rejection.',
        'High-concurrency thread-safe architecture utilizing Go channels, sync primitives, and non-blocking state transitions.',
        'Automated chaotic failure injection testing demonstrating zero task drops at simulated 50% worker crash rates.'
      ],
      challenges: 'Preventing duplicate executions while maintaining at-least-once delivery guarantees when worker nodes crash mid-job.',
      solutions: 'Formulated a deterministic leasing protocol with monotonic fencing tokens and atomic log compaction for the WAL persistence layer.'
    }
  },
  {
    title: 'End-to-End Speech-to-Text Data Pipeline',
    slug: 'speech-to-text-pipeline',
    desc: 'Scalable automated audio processing pipeline ingesting 500+ hours of speech for ASR dataset curation, cutting manual preprocessing overhead by 70% using yt-dlp, ffmpeg, and NVIDIA NeMo.',
    tags: ['ASR', 'Audio Processing', 'NVIDIA NeMo', 'ffmpeg', 'Python', 'Web Scraping'],
    image: `${basePath}/projects/speech-to-text.svg`,
    color: 'from-amber-500/20 to-orange-600/20',
    link: '/projects/speech-to-text-pipeline',
    github: 'https://github.com/sameemqureshi/Speech-To-Text',
    content: {
      overview: 'High-quality automatic speech recognition (ASR) depends on cleanly curated, time-aligned audio datasets. This project automates end-to-end ingestion, quality filtering, acoustic normalization, and transcript alignment for acoustic model fine-tuning.',
      features: [
        'Parallelized audio scraping and extraction pipeline powered by yt-dlp and multiprocessing workers.',
        'Automated audio normalization, dynamic range compression, and silence trimming using ffmpeg pipelines.',
        'Acoustic segmentation and pseudo-transcription alignment utilizing NVIDIA NeMo toolkit.',
        'Automated signal-to-noise ratio (SNR) filtering to eliminate degraded or clipped audio samples.'
      ],
      challenges: 'Handling unpredictable audio formats, background noise, differing sample rates, and non-speech artifacts across hundreds of gigabytes of recordings.',
      solutions: 'Constructed modular streaming pipelines converting incoming streams into uniform 16kHz mono WAV chunks with adaptive threshold validation.'
    }
  },
  {
    title: 'Sentiment Prediction on Movie Reviews',
    slug: 'sentiment-movie-reviews',
    desc: 'NLP classification pipeline evaluating 50K+ reviews, benchmarking Naive Bayes, Logistic Regression, and Support Vector Machines with TF-IDF feature engineering to achieve 89% accuracy.',
    tags: ['NLP', 'Machine Learning', 'Python', 'Scikit-learn', 'Text Analytics'],
    image: `${basePath}/projects/sentiment-analysis.svg`,
    color: 'from-fuchsia-500/20 to-purple-600/20',
    link: '/projects/sentiment-movie-reviews',
    github: 'https://github.com/sameemqureshi/Sentiment-Analysis',
    content: {
      overview: 'A comparative natural language processing pipeline studying classifier dynamics and linguistic feature representation across 50,000 long-form movie reviews.',
      features: [
        'Text normalization, n-gram tokenization, lemmatization, and customized stop-word pruning.',
        'Systematic benchmark comparing Naive Bayes, Logistic Regression, and Support Vector Classifiers.',
        'Hyperparameter optimization using stratified cross-validation and ROC-AUC performance curves.',
        'Exportable inference pipeline designed for lightweight embedding into analytics workflows.'
      ],
      challenges: 'Mitigating misclassifications stemming from subtle sarcastic prose and mixed polarity phrases.',
      solutions: 'Implemented sub-linear TF-IDF scaling paired with bi-gram feature extraction to preserve contextual sentiment modifiers.'
    }
  }
];

export const experience = [
  {
    company: 'Logitech',
    role: 'AI/ML/GenAI Engineer',
    period: 'Jun 2025 – Present',
    highlights: [
      'LLM Infrastructure & Model Platform: Delivered 20+ model integrations for LogiQ\'s FastAPI LLM gateway, serving 5,000+ users with OpenAI, Anthropic, Gemini, Perplexity, and open-weight models across AWS Bedrock, Vertex AI, and Azure. Built initial Model Garden PostgreSQL/SQLAlchemy schemas and APIs for model metadata and pricing, integrating Redis caching, RBAC cloud-routing permissions, per-model rate limits, and token/cache-aware usage accounting with comprehensive provider test suites.',
      'Enterprise AI Applications & Agentic Workflows: Engineered web-search and image-generation/editing capabilities within a LangChain/LangGraph enterprise chatbot. Built MCP-exposed RAG knowledge-search tools with SSE streaming. Integrated Logitech\'s Design System MCP and Brand Centre MCP into AI workflows. Developed React/TypeScript controls for reasoning, model selection, and prompt-caching support with Opik tracing for LLM Council workflows. Deployed S3-backed documentation MCP services on AWS Bedrock AgentCore.',
      'Developer Console, Usage & Product Analytics: Built Developer Console APIs for usage statistics, API logs, per-model token breakdowns, and spend visibility. Extended daily AWS Lambda ETL and shared pricing logic for cross-cloud billing (AWS/Azure/GCP), aggregating token, cache, tool, and long-context costs with deduplication. Maintained an EventBridge → Lambda → Firehose → S3 telemetry pipeline tracking connector usage and authorization flows.',
      'Internal AI Enablement & MCP Infrastructure: Built a permission-aware internal MCP server for the LogiQ ecosystem, connecting conversational assistants to enterprise capabilities: model/pricing lookups, personal budget status, organizational context, and authorized team-spend analytics.'
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Model Context Protocol (MCP)', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'React', 'TypeScript', 'AWS Bedrock', 'AWS AgentCore', 'Vertex AI', 'Azure', 'Opik', 'Go']
  },
  {
    company: 'Logitech',
    role: 'AI/ML/LLM Intern',
    period: 'Mar 2024 – Jun 2025',
    highlights: [
      'AI Developer Tools & QBits Assistant: Developed core features of LogiQ\'s QBits VS Code coding assistant, including inline code suggestions, documentation generation, unit-test authoring, code fixes, commit messages, and automated reviews.',
      'Tree-sitter Code Indexing & Hybrid Retrieval: Built repository-level context indexing using Tree-sitter AST parsing, SQLite snippet/symbol metadata storage, and LanceDB vector retrieval with hash-based incremental re-indexing.',
      'Developer Enablement: Built Codex CLI and Claude Code setup tooling with multi-profile configurations and automated environment bootstrapping.'
    ],
    stack: ['Python', 'FastAPI', 'AWS Serverless', 'Tree-sitter', 'SQLite', 'LanceDB', 'Azure', 'OpenAI', 'Bedrock', 'VS Code Extensions', 'RAG', 'Next.js', 'Redis']
  }
];

export const education = [
  {
    period: '2020 – 2026',
    degree: "Bachelor's in Data Science and Applications",
    institute: 'IIT Madras',
    note: 'CGPA: 7.88'
  },
  {
    period: '2020 – 2024',
    degree: "Bachelor's in Computer Science",
    institute: 'DYPIEMR, Pune',
    note: 'CGPA: 8.70'
  },
  {
    period: '2018 – 2020',
    degree: 'Class 12th HSC (Science)',
    institute: 'Maulana Azad College, Aurangabad',
    note: '86.00%'
  },
  {
    period: '2017 – 2018',
    degree: 'Class 10th SSC',
    institute: 'Saint Francis De Sales High School, Aurangabad',
    note: '91.00%'
  }
];

export const skills = {
  genai: ['LangChain', 'LangGraph', 'Model Context Protocol (MCP)', 'RAG', 'Vision Language Models (VLMs)', 'Embeddings', 'PyTorch', 'Scikit-learn', 'LanceDB', 'ChromaDB'],
  backend: ['FastAPI', 'Flask', 'React', 'REST APIs', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'SQLite', 'Tree-sitter', 'Concurrency', 'Write-Ahead Logging (WAL)'],
  cloud: ['AWS (Bedrock, AgentCore, Lambda, EventBridge, Firehose, S3)', 'GCP (Vertex AI, GKE)', 'Microsoft Azure'],
  mlops: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Prometheus', 'Opik', 'Evidently', 'SHAP', 'Fairlearn'],
  languages: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'Go']
};

export const certifications = [
  'Foundation Level Certificate – IITM BS',
  'Diploma Level Certificate – IITM BS',
  'Python – Programming for Everybody (Coursera)',
  'Computer Networks – NPTEL',
  'Social Networks – NPTEL',
  'SQL – HackerRank'
];

export const articles = [
  {
    title: 'End-to-End MLOps on GCP: From Training to Deployment',
    slug: 'mlops-on-gcp',
    date: '2024-02-01',
    author: 'Sameem Qureshi',
    description: 'A comprehensive guide to building production-ready MLOps pipelines on Google Cloud Platform, covering containerization, Kubernetes deployment, and automated CI/CD with GitHub Actions.',
    content: [
      {
        type: 'intro',
        text: 'Shipping a machine learning model to production is fundamentally different from getting it to work in a notebook. The gap between a well-performing experiment and a reliable, observable, maintainable system in the real world is where most ML projects fail. This article walks through the complete MLOps architecture I built for a heart disease prediction system on Google Cloud Platform — covering every layer from training pipelines to live inference, monitoring, and automated retraining.'
      },
      {
        type: 'section',
        heading: 'Why MLOps Matters',
        text: 'A model trained once and deployed without monitoring is a liability. Data distributions shift, dependencies break, and model performance degrades silently. MLOps is the practice of applying DevOps principles — automation, observability, and reproducibility — to the machine learning lifecycle. The goal is to make every step from data ingestion to deployment auditable, automated, and recoverable.'
      },
      {
        type: 'section',
        heading: 'Pipeline Architecture on GCP',
        text: 'The pipeline consists of four stages. First, training runs in a containerised Python environment using scikit-learn and XGBoost, with experiment tracking via MLflow. The trained model artifact is pushed to GCP Artifact Registry alongside a Docker image of the FastAPI inference server. Second, GitHub Actions triggers on every merge to main — it runs tests, builds the image, and pushes it to Artifact Registry. Third, a Kubernetes deployment manifest on GKE pulls the latest image and performs a rolling update with zero downtime. Fourth, Prometheus scrapes a /metrics endpoint on the inference server, and Grafana dashboards visualise request latency, prediction confidence distributions, and error rates.'
      },
      {
        type: 'section',
        heading: 'Model Governance: Explainability and Fairness',
        text: 'Production ML carries responsibility beyond accuracy. I integrated SHAP (SHapley Additive exPlanations) to generate per-prediction feature importance scores, making model decisions interpretable for clinical stakeholders. Fairlearn was used to evaluate performance parity across demographic groups, ensuring the model does not systematically underperform for any segment. Evidently AI provides automated drift reports by comparing the live prediction distribution against the training baseline — a drift alert triggers a retraining job.'
      },
      {
        type: 'section',
        heading: 'Key Takeaways',
        text: 'The most important lesson: invest in observability before you need it. Setting up Prometheus and structured logging felt like overhead early on, but it paid dividends when a silent data schema change caused prediction confidence to drop. The monitoring caught it within minutes. The second lesson: treat your ML pipeline as software. Infrastructure as code, versioned model artifacts, and reproducible training runs are non-negotiable for anything that goes to production.'
      }
    ]
  },
  {
    title: 'Building Serverless Analytics Pipelines with AWS EventBridge & Lambda',
    slug: 'aws-serverless-analytics',
    date: '2024-02-15',
    author: 'Sameem Qureshi',
    description: 'Learn how to design and implement scalable, serverless telemetry pipelines using AWS EventBridge, Lambda, Kinesis, and S3 for real-time application usage analytics.',
    content: [
      {
        type: 'intro',
        text: 'Understanding how users actually interact with your software is one of the highest-leverage investments a product team can make. At Logitech, I worked on serverless telemetry pipelines that capture application usage events from desktop clients, route and enrich them in real time, and land them in an S3-based data lake ready for analysis.'
      },
      {
        type: 'section',
        heading: 'The Problem with Traditional Analytics Setups',
        text: 'Most teams start with a simple approach: write events to a database. That works until you have multiple applications, multiple regions, or events that need conditional routing — then it becomes a maintenance burden. A serverless event-driven architecture separates concerns cleanly: producers emit events, a routing layer decides what to do with them, and consumers process and store the data. Each component scales independently and you pay only for what you use.'
      },
      {
        type: 'section',
        heading: 'Pipeline Design: EventBridge → Lambda → Firehose → S3',
        text: 'Application clients publish structured JSON events to an EventBridge custom event bus. EventBridge rules pattern-match on event fields to route events to the appropriate Lambda processor. Each Lambda function enriches the event — adding server-side timestamps, user segment metadata, and geolocation — before writing to a Kinesis Data Firehose delivery stream. Firehose buffers events and delivers them to S3 in Parquet format, partitioned by date and event type.'
      },
      {
        type: 'section',
        heading: 'Trigger Detection and Structured Logging',
        text: 'Not every interaction is analytically interesting. The Lambda enrichment layer implements trigger detection logic — identifying meaningful user actions like feature activations, session starts, and error states — and annotates events accordingly. Structured logging with consistent field names across all Lambda functions makes downstream querying predictable. Every log line is a JSON object with a fixed schema, which means CloudWatch Insights queries are fast and reliable.'
      },
      {
        type: 'section',
        heading: 'Operational Lessons',
        text: 'Dead-letter queues are essential. Events that fail processing do not disappear — they land in an SQS DLQ where they can be inspected and reprocessed once the bug is fixed. Idempotency matters too: Lambda can occasionally invoke a function more than once for the same event, so the enrichment logic must be safe to run twice on the same input. Finally, keep Lambda functions small and focused. A function that does one thing is easier to test, debug, and replace.'
      }
    ]
  },
  {
    title: 'Mastering RAG: Building Context-Aware LLM Applications',
    slug: 'mastering-rag',
    date: '2023-11-01',
    author: 'Sameem Qureshi',
    description: 'A deep dive into Retrieval Augmented Generation (RAG) and how to build LLM applications that provide grounded, context-aware responses, leveraging techniques for efficient information retrieval.',
    content: [
      {
        type: 'intro',
        text: 'Large language models are impressive general reasoners, but they have a fundamental limitation: their knowledge is frozen at training time. Retrieval Augmented Generation (RAG) solves this by giving the model access to a dynamic, up-to-date knowledge base at inference time. Instead of relying on parametric memory, the model retrieves relevant documents and reasons over them to produce grounded, citable answers. This article explains how RAG works, where it fails, and how to build systems that actually perform well in production.'
      },
      {
        type: 'section',
        heading: 'The Core RAG Loop',
        text: 'A RAG system has three stages. First, ingestion: documents are split into chunks, each chunk is converted to a dense vector embedding, and the vectors are stored in a vector database alongside the original text. Second, retrieval: when a user submits a query, the query is embedded using the same model, and the vector database returns the top-k most similar chunks by cosine similarity. Third, generation: the retrieved chunks are injected into the LLM prompt as context, and the model generates a response grounded in that context.'
      },
      {
        type: 'section',
        heading: 'Chunking Strategy Is Everything',
        text: 'The single biggest lever on RAG quality is how you split documents. Fixed-size chunking is a reasonable baseline, but it frequently splits sentences mid-thought. Recursive character splitting respects paragraph and sentence boundaries, producing more coherent chunks. For structured content like code or markdown, specialised splitters that understand document syntax produce dramatically better results.'
      },
      {
        type: 'section',
        heading: 'Evaluating Retrieval Quality',
        text: 'A RAG system can fail at two independent points: retrieval and generation. If the right chunks are not retrieved, no amount of prompting will produce a correct answer. Measure retrieval quality separately using hit rate and mean reciprocal rank (MRR) against a golden dataset of query–answer pairs.'
      },
      {
        type: 'section',
        heading: 'Production Considerations',
        text: 'In production, latency and cost are real constraints. Caching embeddings for frequently seen queries reduces both. Hybrid retrieval — combining dense vector search with sparse BM25 keyword search — often outperforms either approach alone, especially for queries containing rare terms or proper nouns.'
      }
    ]
  },
  {
    title: 'Developing VS Code Extensions with AI: Code Intelligence & Privacy',
    slug: 'vscode-ai-extension',
    date: '2023-11-15',
    author: 'Sameem Qureshi',
    description: 'Architectural patterns and implementation details of AI-powered developer tooling, structured AST code indexing, hybrid vector-symbol storage, and privacy-preserving LLM integrations.',
    content: [
      {
        type: 'intro',
        text: 'Building an AI-powered VS Code extension that genuinely understands a repository — not just the file open in the active editor — requires solving several hard engineering problems at once: how do you index a large repository efficiently, how do you retrieve the most relevant context for a query, and how do you do all of this without sending proprietary code to third-party endpoints?'
      },
      {
        type: 'section',
        heading: 'Parsing Code with Tree-sitter',
        text: 'Text-level chunking works for prose documents, but code has syntax and scope that matter. A function definition, its docstring, and its call sites are related in ways line-based splitting cannot capture. Tree-sitter provides a language-aware parser producing a concrete syntax tree. By walking the AST, the indexer extracts semantically meaningful units — functions, classes, interfaces — storing them with their symbol signature, file path, and line range.'
      },
      {
        type: 'section',
        heading: 'Hybrid Storage: SQLite + LanceDB',
        text: 'The indexer maintains two parallel stores: SQLite holds structural metadata (symbol names, types, file paths, raw syntax ranges) enabling instant keyword search and exact symbol lookups. LanceDB holds vector embeddings of the same code chunks for conceptual semantic queries. When a developer asks a question, the extension runs both and re-ranks the candidate context.'
      },
      {
        type: 'section',
        heading: 'Incremental Indexing & Privacy',
        text: 'Incremental indexing watches for file save events, hashes content chunks, and updates only modified files in both stores. Privacy is preserved by injecting strictly scoped context chunks into user queries, avoiding blanket repository exfiltration.'
      }
    ]
  }
];
