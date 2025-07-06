# 🩺 Medical AI Agent

Build and deploy a **real-time AI-powered medical voice assistant** using Next.js, React, TypeScript, Clerk, AssemblyAI, and Neon DB. This full-stack SaaS project walks you through building a virtual doctor that listens to user symptoms and responds intelligently using voice recognition and generative AI — all in real time.

> 🚀 Ideal for developers building cutting-edge healthcare SaaS applications powered by AI and speech technologies.

---

## ✨ Features

- 🎙️ **Real-Time Voice Recognition** – Convert patient speech to text using [AssemblyAI](https://dcmk.short.gy/assemblyai)
- 🤖 **AI-Powered Responses** – Generate medical responses and suggestions dynamically
- 🔐 **User Authentication** – Secure login/signup with [Clerk](https://go.clerk.com/zIDA7q9)
- 💾 **Database Integration** – Store sessions and records with [Neon Postgres](https://fyi.neon.tech/tg9)
- 💬 **Real-Time Communication** – Use Vapi for voice interaction flow ([vapi.ai](https://vapi.ai/))
- 🌐 **Modern Tech Stack** – Built with Next.js 14, React 18, and TypeScript
- 🧑‍⚕️ **Healthcare Focused UI** – Clean, teal-themed design tailored for medical use cases

---

## 🔧 Stack

| Frontend       | Backend       | Auth         | Voice AI       | Database      |
|----------------|----------------|--------------|----------------|----------------|
| Next.js 14     | Vapi.ai        | Clerk        | AssemblyAI     | Neon (Postgres) |
| React 18       | TypeScript     | JWT / Clerk  |                | Prisma ORM      |

---


## 📦 Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/medical-ai-agent.git
cd medical-ai-agent

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env.local
# Fill in your Clerk, AssemblyAI, Neon, and Vapi credentials

# 4. Run the development server
npm run dev
