# AntiScamAI 🛡️

**AI-powered fraud detection that analyzes messages in seconds to protect you from scams, phishing, and financial fraud.**

AntiScamAI is a modern, privacy-focused web application designed to help users identify potential scam messages, phishing attempts, and fraudulent communications. It performs instant, client-side analysis using advanced pattern matching and heuristic algorithms to provide a detailed risk assessment.

## 🚀 Features

- **Real-time Analysis**: Instant feedback on pasted messages without sending data to external servers (privacy-first).
- **Comprehensive Risk Scoring**: Calculates a risk score (0-100) based on keywords, patterns, urgency, and emotional triggers.
- **Detailed Insights**:
  - **Keyword Detection**: Identifies suspicious terms related to urgency, finance, threats, and more.
  - **Pattern Recognition**: Detects malicious URLs, phone numbers, and financial formats.
  - **Intent Analysis**: Determines the likely goal of the message (e.g., phishing, extortion).
  - **Linguistic Analysis**: Evaluates tone, manipulation tactics, and emotional triggers.
- **AI Security Adviser**: Provides a summary verdict and actionable safety recommendations.
- **Educational Resources**: Includes a library of real-world scam examples (Email, SMS) with analysis.
- **Responsive Design**: Beautiful, mobile-friendly UI built with Tailwind CSS and Shadcn UI.

## 🛠️ Technologies Used

- **Frontend Framework**: [React](https://reactjs.org/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akshay-gurav-31/AntiScamAI-Hackathon.git
   cd AntiScamAI-Hackathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Open your browser and navigate to `http://localhost:8080` (or the port shown in your terminal).

## 📂 Project Structure

```
src/
├── components/         # UI components (AnalysisInput, AnalysisResults, etc.)
├── lib/               # Utility functions
├── pages/             # Page components
├── ScamGuard.tsx      # Main application component
├── App.tsx            # Root component and routing
└── main.tsx           # Entry point
```

## 🎯 PPT Presentation

### PROJECT TITLE
AntiScamAI - AI-powered Fraud Detection System

### PROBLEM STATEMENT
In today's digital world, scams and phishing attacks are becoming increasingly sophisticated, targeting individuals through emails, SMS, and messaging platforms. Traditional spam filters often fail to detect these advanced social engineering attacks that rely on psychological manipulation rather than obvious malicious signatures. Users need a real-time, intelligent solution that can analyze suspicious communications and provide immediate risk assessment to protect them from financial loss and identity theft.

### SOLUTION
AntiScamAI leverages cutting-edge AI technology to analyze messages and detect potential scams in real-time. Our solution provides:
- Instant risk scoring (0-100) with detailed breakdown
- Multi-dimensional analysis including keyword detection, pattern recognition, intent classification, and linguistic analysis
- AI-powered security adviser with personalized safety recommendations
- Privacy-first approach with all processing happening locally in the browser
- Educational resources with real-world scam examples

### INNOVATION & USP
- **AI-Powered Analysis**: Uses Google's Gemini 2.0 Flash model for sophisticated scam detection
- **Privacy-First**: All analysis happens locally in-browser, ensuring zero data transmission
- **Multi-Dimensional Detection**: Goes beyond simple keyword matching to analyze intent, tone, and manipulation tactics
- **Real-Time Results**: Instant feedback with comprehensive risk assessment
- **Educational Value**: Includes real-world scam examples to increase user awareness
- **Cross-Platform**: Works on any device with a modern web browser

### WORKFLOW DIAGRAM WITH TECH STACK

#### Technology Stack:
- **Frontend Framework**: React (v18) with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API (Gemini 2.0 Flash model)
- **State Management**: React Hooks
- **Deployment**: Static hosting compatible (Netlify, Vercel, GitHub Pages)

#### Workflow:
1. User inputs suspicious message through web interface
2. Message is analyzed locally using AI-powered detection algorithms
3. Gemini API processes the message for advanced scam detection
4. Detailed risk assessment is generated with scoring and insights
5. AI Security Adviser provides personalized safety recommendations
6. Results are displayed in an intuitive dashboard with visualizations

### TEAM MEMBERS

**Team Lead:**
- Name: Akshay Gurav
- Name: Rituraj
- Shreyas
- Sakshi
---

*Developed by TrustWave*
