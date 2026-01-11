import { Github, Linkedin, Mail } from 'lucide-react';

export const socialLinks = [
  { icon: Github, href: 'https://github.com/sameemqureshi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sameemqureshi/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:qureshisameem01@gmail.com', label: 'Email' }
];

export const projects = [
  {
    title: 'Heart Disease Prediction: End-to-End Production MLOps Pipeline on GCP',
    slug: 'heart-disease-prediction-mlops',
    desc: 'Production-ready heart disease prediction system featuring an end-to-end MLOps workflow from training to deployment on GKE, complete with CI/CD, observability, and model governance.',
    tags: ['MLOps', 'GCP', 'Kubernetes', 'FastAPI', 'Docker', 'GitHub Actions', 'Prometheus', 'SHAP'],
    image: '/heart-disease-prediction.png',
    color: 'from-red-500/20 to-rose-600/20',
    link: '/projects/heart-disease-prediction-mlops',
    github: 'https://github.com/sameemqureshi/21f1000868_IITMBS_MLOPS_OPPE2',
    content: {
      overview: 'A robust, production-grade machine learning pipeline for heart disease prediction. This project demonstrates a full MLOps lifecycle, ensuring model reliability, scalability, and maintainability in a cloud-native environment.',
      features: [
        'Containerized FastAPI inference service deployed on Google Kubernetes Engine (GKE) with auto-scaling.',
        'Automated CI/CD pipeline using GitHub Actions for building and pushing images to Artifact Registry.',
        'Comprehensive observability with Prometheus metrics and structured logging.',
        'Advanced model governance including SHAP-based explainability, fairness evaluation with Fairlearn, and drift detection with Evidently.'
      ],
      challenges: 'Ensuring consistent model performance and reliability in a production environment while managing infrastructure complexity and model fairness.',
      solutions: 'Implemented a GitOps approach with automated pipelines. Integrated specialized tools for monitoring model drift and bias to maintain high standards of AI ethics and reliability.'
    }
  },
  {
    title: 'DocuVision RAG: AI-Driven Visual Knowledge Extraction',
    slug: 'docuvision-rag',
    desc: 'End-to-end Retrieval Augmented Generation (RAG) system for querying visually rich PDFs, images, and text using Vision Language Models and FastAPI. Designed for sourced, context-aware responses with improved accuracy and processing speed over traditional RAG systems.',
    tags: ['RAG', 'Python', 'FastAPI', 'PyTorch', 'Vision Language Models', 'ChromaDB'],
    image: '/Docu-Vision-Rag.png',
    color: 'from-cyan-500/20 to-blue-600/20',
    link: '/projects/docuvision-rag',
    github: 'https://github.com/sameemqureshi/DocuVision-RAG-AI-Driven-Visual-Knowledge-Extraction',
    content: {
      overview: 'Traditional RAG systems struggle with complex documents containing charts, diagrams, and tables. DocuVision RAG solves this by leveraging Vision Language Models (VLMs) to interpret visual elements alongside textual content, providing a holistic understanding of documents.',
      features: [
        'Multi-modal ingestion pipeline capable of processing PDFs, images, and mixed-media documents.',
        'Integration with ChromaDB for efficient vector storage and similarity search.',
        'Context-aware retrieval that preserves document structure and layout information.',
        'High-performance API built with FastAPI for real-time query processing.'
      ],
      challenges: 'Extracting meaningful semantic information from complex layouts (e.g., multi-column PDFs, embedded charts) was a major bottleneck. Standard OCR tools often lost context.',
      solutions: 'Implemented a custom pre-processing pipeline using layout analysis models to segment documents into meaningful chunks before embedding. Used VLMs to generate textual descriptions for visual components, enriching the vector index.'
    }
  },
  {
    title: 'Household Services App',
    slug: 'household-services-app',
    desc: 'Full-stack multi-role household services platform with user registration, task workflows, admin verification, background jobs, and real-time data pipelines to streamline operations.',
    tags: ['Python', 'Flask', 'SQLAlchemy', 'Vue.js', 'Redis', 'Celery'],
    image: 'https://placehold.co/600x400/png?text=Household+Services',
    color: 'from-purple-500/20 to-pink-600/20',
    link: '/projects/household-services-app',
    github: 'https://github.com/sameemqureshi/HouseholdServices',
    content: {
      overview: 'A comprehensive platform connecting service professionals with homeowners. It manages the entire lifecycle of a service request, from booking to completion and payment.',
      features: [
        'Role-based access control (RBAC) for Admins, Professionals, and Customers.',
        'Asynchronous background jobs using Celery and Redis for email notifications and report generation.',
        'Interactive dashboard built with Vue.js for real-time status tracking.',
        'RESTful API backend with Flask and SQLAlchemy for robust data management.'
      ],
      challenges: 'Handling concurrent bookings and ensuring data consistency across multiple user roles while maintaining a responsive UI.',
      solutions: 'Utilized database transactions and optimistic locking in SQLAlchemy to prevent race conditions. Implemented a reactive frontend with Vue.js to provide instant feedback to users without full page reloads.'
    }
  },
  {
    title: 'End-to-End Speech-to-Text Data Pipeline',
    slug: 'speech-to-text-pipeline',
    desc: 'Scalable automated speech-to-text pipeline for audio extraction, preprocessing, ASR dataset curation, and reporting using NVIDIA NeMo, ffmpeg, and Python tooling.',
    tags: ['WebScraping', 'Audio Preprocessing', 'Text Processing', 'Python', 'NVIDIA NeMo', 'ffmpeg'],
    image: 'https://placehold.co/600x400/png?text=Speech+to+Text',
    color: 'from-emerald-500/20 to-teal-600/20',
    link: '/projects/speech-to-text-pipeline',
    github: 'https://github.com/sameemqureshi/Speech-To-Text',
    content: {
      overview: 'Building high-quality ASR datasets requires processing thousands of hours of audio. This pipeline automates the collection, cleaning, and transcription of audio data for training speech models.',
      features: [
        'Automated web scraping and audio extraction from various sources.',
        'Audio normalization and noise reduction using ffmpeg.',
        'Speaker diarization and transcription using NVIDIA NeMo toolkit.',
        'Quality assurance reporting to identify and filter low-confidence transcriptions.'
      ],
      challenges: 'Processing large volumes of audio data efficiently and handling diverse audio formats and quality levels.',
      solutions: 'Designed a parallel processing architecture using Python multiprocessing. Implemented adaptive filtering logic to automatically discard or flag poor-quality audio segments based on signal-to-noise ratio.'
    }
  },
  {
    title: 'Sentiment Prediction on Movie Reviews',
    slug: 'sentiment-movie-reviews',
    desc: 'NLP pipeline for sentiment analysis on movie reviews, covering preprocessing, classical ML models, and evaluation for practical decision-making insights.',
    tags: ['NLP', 'Python', 'Machine Learning', 'Data Preprocessing', 'Model Evaluation'],
    image: 'https://placehold.co/600x400/png?text=Sentiment+Analysis',
    color: 'from-amber-500/20 to-orange-600/20',
    link: '/projects/sentiment-movie-reviews',
    github: 'https://github.com/sameemqureshi/Sentiment-Analysis',
    content: {
      overview: 'An analytical tool designed to gauge public opinion by classifying movie reviews as positive or negative. It serves as a foundational project for understanding NLP workflows.',
      features: [
        'Text preprocessing pipeline: tokenization, lemmatization, and stop-word removal.',
        'Comparison of multiple classifiers: Naive Bayes, Logistic Regression, and SVM.',
        'Visualization of model performance using confusion matrices and ROC curves.',
        'Deployment-ready model serialization.'
      ],
      challenges: 'Dealing with sarcasm and context-dependent sentiment in informal review text.',
      solutions: 'Experimented with n-gram features and TF-IDF weighting to capture more context. Fine-tuned model hyperparameters to balance precision and recall.'
    }
  },
  {
    title: 'Answerly – Q&A Chatbot using LLM and LangChain',
    slug: 'answerly-chatbot',
    desc: 'Conversational Q&A assistant leveraging LangChain, Hugging Face models, vector stores, and DataStax to deliver grounded answers over enterprise data.',
    tags: ['LLM', 'LangChain', 'Hugging Face', 'Vector Stores', 'DataStax', 'Python'],
    image: 'https://placehold.co/600x400/png?text=Answerly+Chatbot',
    color: 'from-fuchsia-500/20 to-purple-600/20',
    link: '/projects/answerly-chatbot',
    github: 'https://github.com/sameemqureshi/Answerly-Chat-Bot',
    content: {
      overview: 'Answerly is a bridge between static enterprise knowledge bases and dynamic user queries. It uses RAG to provide accurate, source-cited answers.',
      features: [
        'Integration with DataStax Astra DB for scalable vector storage.',
        'Usage of open-source LLMs via Hugging Face for cost-effective inference.',
        'Memory management to maintain context across multi-turn conversations.',
        'Streamlit-based user interface for easy interaction.'
      ],
      challenges: 'Ensuring the chatbot restricts its answers to the provided context and avoids hallucinations.',
      solutions: 'Implemented strict prompt engineering techniques and a retrieval verification step. Used LangChain chains to enforce source grounding in the final response generation.'
    }
  },
  {
    title: 'Business Data Management Capstone',
    slug: 'business-data-management',
    desc: 'Analytics capstone studying real-world enterprise sales data for demand forecasting, product performance, and data-driven business decisions.',
    tags: ['Data Collection', 'Data Analysis', 'Data Visualization', 'Microsoft Excel'],
    image: 'https://placehold.co/600x400/png?text=Business+Data',
    color: 'from-sky-500/20 to-indigo-600/20',
    link: '/projects/business-data-management',
    github: 'https://github.com/sameemqureshi?tab=repositories',
    content: {
      overview: 'A deep dive into business intelligence, transforming raw sales data into actionable strategic insights.',
      features: [
        'Comprehensive data cleaning and normalization of sales records.',
        'Dashboard creation for tracking key performance indicators (KPIs).',
        'Trend analysis to identify seasonal demand patterns.',
        'Predictive modeling for future inventory requirements.'
      ],
      challenges: 'Aggregating data from disparate sources with inconsistent formatting.',
      solutions: 'Developed standardized data transformation protocols in Excel and Python. Created automated validation scripts to ensure data integrity before analysis.'
    }
  }
];

export const articles = [
  {
    title: 'End-to-End MLOps on GCP: From Training to Deployment',
    slug: 'mlops-on-gcp',
    date: '2024-02-01',
    author: 'M. Qureshi',
    description: 'A comprehensive guide to building production-ready MLOps pipelines on Google Cloud Platform, covering containerization, Kubernetes deployment, and automated CI/CD with GitHub Actions.',
  },
  {
    title: 'Building Serverless Analytics Pipelines with AWS EventBridge & Lambda',
    slug: 'aws-serverless-analytics',
    date: '2024-02-15',
    author: 'M. Qureshi',
    description: 'Learn how to design and implement scalable, serverless telemetry pipelines using AWS EventBridge, Lambda, Kinesis, and S3 for real-time application usage analytics.',
  },
  {
    title: 'Mastering RAG: Building Context-Aware LLM Applications',
    slug: 'mastering-rag',
    date: '2023-11-01',
    author: 'M. Qureshi',
    description: 'A deep dive into Retrieval Augmented Generation (RAG) and how to build LLM applications that provide grounded, context-aware responses, leveraging techniques for efficient information retrieval.',
  },
  {
    title: 'Developing VS Code Extensions with AI: Code Intelligence & Privacy',
    slug: 'vscode-ai-extension',
    date: '2023-11-15',
    author: 'M. Qureshi',
    description: 'Learn the architectural patterns and implementation details of creating an AI-powered VS Code extension, focusing on structured code indexing, hybrid storage, and privacy-preserving LLM integrations.',
  },
  {
    title: 'Leveraging Vector Databases for Semantic Search in AI Systems',
    slug: 'vector-databases-ai',
    date: '2023-12-01',
    author: 'M. Qureshi',
    description: 'Explore the power of vector databases like LanceDB and ChromaDB for enabling semantic search and efficient similarity retrieval in modern AI and RAG applications.',
  },
  {
    title: 'Beyond ChatGPT: Integrating Open-Source LLMs (Meta, Alibaba) in Production',
    slug: 'open-source-llms',
    date: '2023-12-15',
    author: 'M. Qureshi',
    description: 'A practical guide to integrating and deploying open-source Large Language Models from providers like Meta and Alibaba into scalable production environments using Python and FastAPI.',
  },
  {
    title: 'Advanced Retrieval Techniques for RAG: Multi-Query & MMR',
    slug: 'advanced-rag',
    date: '2024-01-01',
    author: 'M. Qureshi',
    description: 'Delve into advanced retrieval strategies such as multi-query retrieval and Maximum Marginal Relevance (MMR) to significantly improve the accuracy and diversity of responses in RAG systems.',
  },
];
 
export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Product Manager',
    text: 'Sameem transformed our vague requirements into a robust RAG pipeline that actually understands context. His ability to bridge the gap between research models and production code is rare.'
  },
  {
    name: 'David Miller',
    role: 'Lead Developer @ TechFlow',
    text: 'I worked with Sameem on the Household Services app. His backend architecture was clean, scalable, and he was always proactive about solving potential bottlenecks before they became issues.'
  }
];

export const experience = [
  {
    company: 'Logitech',
    role: 'AI/ML/GenAI Engineer',
    period: 'May 2024 – Present',
    highlights: [
      'Application Usage Analytics Pipeline (AWS Serverless): Built a serverless telemetry pipeline using EventBridge → Lambda → Firehose → S3 to log application usage events into an S3-based data lake. Implemented event enrichment and conditional routing for segmented analytics, with strict trigger detection and structured logging.',
      'AI-powered VS Code Extension: Built an AI-assisted VS Code extension for in-editor code completion, explanations, and debugging with a focus on privacy and developer productivity. Developed a Tree-sitter-based code indexing pipeline and hybrid retrieval system using SQLite (metadata) + LanceDB (vector search) for fast repository-level context search.',
      'Scalable AI Backend, Console & MCP Integrations: Built a scalable Python/FastAPI backend on an Azure Private Instance, integrating multiple LLM providers. Developed a developer console for usage, billing, and model consumption insights. Improved RAG quality using Multi-Query Retrieval and MMR, and added extensible support for Model Context Protocol (MCP) servers.'
    ],
    stack: ['Python', 'FastAPI', 'AWS Serverless', 'Tree-sitter', 'SQLite', 'LanceDB', 'Azure', 'OpenAI', 'Bedrock', 'Meta LLMs', 'Alibaba Cloud', 'VS Code Extensions', 'RAG']
  }
];

export const education = [
  {
    period: '2020 – Present',
    degree: "Bachelor's in Data Science and Applications",
    institute: 'IIT Madras',
    note: 'CGPA: 8.09'
  },
  {
    period: '2020 – 2024',
    degree: "Bachelor's in Computer Science",
    institute: 'DYPIEMR, Pune',
    note: 'CGPA: 8.70'
  },
  {
    period: '2018 – 2020',
    degree: 'Class 12th HSC',
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
  programming: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  ml: ['LLMs', 'NLP', 'LangChain', 'Vector Stores', 'Embeddings', 'Text Chunking', 'RAG'],
  data: ['Data Preprocessing', 'Data Manipulation', 'Statistical Methods', 'Data Analysis'],
  web: ['VS Code Extension Development', 'Flask', 'FastAPI', 'Django']
};

export const certifications = [
  'Foundation Level Certificate – IITM BS',
  'Diploma Level Certificate – IITM BS',
  'Python – Programming for Everybody (Coursera)',
  'Computer Networks – NPTEL',
  'Social Networks – NPTEL',
  'SQL – HackerRank'
];
