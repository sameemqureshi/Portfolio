'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';

const SYSTEM_PROMPT = `You are an AI assistant on Sameem Qureshi's portfolio website. Answer questions about Sameem concisely and helpfully. Here is everything you need to know:

NAME: Sameem Qureshi
TITLE: AI/ML/GenAI Engineer at Logitech (Promoted to Engineer Jun 2025 – Present; Intern Mar 2024 – Jun 2025)
LOCATION: Pune, India
EMAIL: qureshisameem01@gmail.com
GITHUB: https://github.com/sameemqureshi
LINKEDIN: https://www.linkedin.com/in/sameemqureshi/

WORK AT LOGITECH (LogiQ Enterprise AI Ecosystem):
- LLM Infrastructure & Model Platform: Delivered 20+ model integrations for FastAPI LLM gateway serving 5,000+ users across AWS Bedrock, Vertex AI, and Azure. Built Model Garden schemas/APIs with PostgreSQL, SQLAlchemy, Redis caching, RBAC cloud-routing permissions, per-model rate limits, and token/cache-aware usage accounting.
- Enterprise AI Apps & Agentic Workflows: Web-search and image-gen in LangChain/LangGraph chatbot. MCP-exposed RAG tools with SSE streaming. Design System MCP and Brand Centre MCP integrations. React/TypeScript controls for reasoning and model selection; Anthropic prompt-caching and Opik tracing for LLM Council workflows. S3-backed docs MCP on AWS Bedrock AgentCore.
- Developer Console & Usage Analytics: Built Developer Console APIs for spend visibility and token breakdowns. Extended daily AWS Lambda ETL for cross-cloud billing (AWS/Azure/GCP). Maintained EventBridge → Lambda → Firehose → S3 telemetry pipeline.
- Internal AI Enablement & MCP Server: Built permission-aware internal MCP server for LogiQ ecosystem (model/pricing lookups, personal budgets, org context, team-spend analytics).
- AI Developer Tools (QBits VS Code Assistant): Inline code suggestions, unit-test generation, code reviews, Tree-sitter AST indexing, SQLite + LanceDB hybrid vector retrieval with hash-based incremental re-indexing. Codex CLI / Claude Code setup tooling.

PROJECTS:
1. Heart Disease Prediction Production MLOps on GCP: 94% AUC, <200ms latency, FastAPI on GKE with autoscaling, GitHub Actions CI/CD, Prometheus observability, SHAP/Fairlearn/Evidently model governance, stress tested with 2,000+ concurrent requests.
2. DocuVision RAG: Multimodal Vision-Language RAG with VLMs, PyTorch, and ChromaDB for rich visual document querying with a 40% accuracy boost over text-only RAG.
3. YODOQ: Fault-tolerant in-memory job queue in Go featuring at-least-once delivery, lease-based execution, WAL persistence, and zero job loss under 50% crash failure rates.
4. End-to-End Speech-to-Text Data Pipeline: Ingested and preprocessed 500+ hours of audio with yt-dlp, ffmpeg, and NVIDIA NeMo for ASR training, reducing manual overhead by 70%.
5. Sentiment Prediction on Movie Reviews: NLP classifier benchmarking Naive Bayes, Logistic Regression, and SVM across 50K+ reviews, reaching 89% accuracy.

SKILLS:
- GenAI & ML: LangChain, LangGraph, Model Context Protocol (MCP), RAG, Vision-Language Models (VLMs), Embeddings, PyTorch, Scikit-learn, LanceDB, ChromaDB
- Backend & Data: FastAPI, Flask, React, REST APIs, PostgreSQL, SQLAlchemy, Redis, SQLite, Tree-sitter, Concurrency, Write-Ahead Logging (WAL)
- Cloud & Infrastructure: AWS (Bedrock, AgentCore, Lambda, EventBridge, Firehose, S3), GCP (Vertex AI, GKE), Microsoft Azure
- MLOps & Observability: Docker, Kubernetes, CI/CD (GitHub Actions), Prometheus, Opik, Evidently, SHAP, Fairlearn
- Languages: Python, TypeScript, JavaScript, SQL, Java, Go

EDUCATION:
- IIT Madras: Bachelor's in Data Science and Applications (2020–2026, CGPA: 7.88)
- DYPIEMR Pune: Bachelor's in Computer Science (2020–2024, CGPA: 8.70)
- Class 12th HSC: Maulana Azad College, Aurangabad (86.00%)
- Class 10th SSC: Saint Francis De Sales, Aurangabad (91.00%)

STATUS: Open to high-impact opportunities in Generative AI, Agentic Systems, and MLOps.

Keep answers short (2–4 sentences), crisp, and professional. If asked something unrelated to Sameem's work or portfolio, politely redirect. Do not make up information not listed above.`;

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm Sameem's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const userText = input.trim();
    if (!userText || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
      if (!apiKey) throw new Error('No API key configured.');

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map(m => ({ role: m.role, content: m.text })),
            { role: 'user', content: userText },
          ],
          max_tokens: 200,
          temperature: 0.5,
        }),
      });

      if (!res.ok) throw new Error('API request failed.');
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content ?? 'Sorry, I couldn\'t get a response.';
      setMessages(prev => [...prev, { role: 'assistant', text: reply.trim() }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Sorry, something went wrong. Reach Sameem directly at qureshisameem01@gmail.com.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold text-slate-100 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  AI Assistant
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-800/30 border-t border-slate-700">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-cyan-500 text-slate-950 rounded-xl hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg shadow-cyan-500/20 z-50 flex items-center gap-2 group"
        aria-label="Open AI assistant chat"
      >
        <Sparkles className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
          Ask AI Assistant
        </span>
      </motion.button>
    </>
  );
}
