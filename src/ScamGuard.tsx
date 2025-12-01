import React, { useState, useEffect, useRef } from 'react';
import {
    Shield,
    Search,
    AlertTriangle,
    AlertCircle,
    Info,
    Check,
    X,
    ExternalLink,
    Mail,
    MessageSquare,
    Loader2,
    ChevronRight
} from 'lucide-react';

// --- Types ---

interface AnalysisData {
    riskScore: number;
    riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
    reason: string;
    suspiciousWords: string[];
    suspiciousPatterns: string[];
    recommendations: string[];
    confidence: number;
    detectionFactors: string[];
    intentDetection: {
        primaryIntent: string;
        subIntents: string[];
        targetedAction: string;
    };
    linguisticAnalysis: {
        tone: string[];
        manipulationTactics: string[];
        urgencyLevel: number;
        emotionalTriggers: string[];
    };
    graphData: {
        keywordFrequency: { keyword: string; count: number }[];
        categoryBreakdown: { category: string; percentage: number }[];
        componentScores: { component: string; score: number }[];
    };
    aiAdviser: {
        summary: string;
        verdict: string;
        actionPlan: string[];
    };
}

// --- UI Components ---

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link', size?: 'default' | 'sm' | 'lg' | 'icon' }>(
    ({ className = "", variant = "default", size = "default", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

        const variants = {
            default: "bg-blue-600 text-white hover:bg-blue-700",
            destructive: "bg-red-600 text-white hover:bg-red-700",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        };

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = "", ...props }, ref) => (
        <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm bg-white ${className}`} {...props} />
    )
);
Card.displayName = "Card";

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'secondary' | 'destructive' | 'outline' }>(
    ({ className = "", variant = "default", ...props }, ref) => {
        const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
        const variants = {
            default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
            secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
            destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
            outline: "text-foreground",
        };
        return (
            <div ref={ref} className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
        );
    }
);
Badge.displayName = "Badge";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className = "", ...props }, ref) => {
        return (
            <textarea
                className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

// --- Toast Component ---

const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white ${type === 'success' ? 'bg-green-600' : 'bg-red-600'} animate-in slide-in-from-top-2 fade-in duration-300`}>
            {type === 'success' ? <Check className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            <span className="font-medium">{message}</span>
            <button onClick={onClose} className="ml-2 hover:opacity-80">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

// --- Main Component ---

export default function ScamGuard() {
    const [analysis, setAnalysis] = useState<AnalysisData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [message, setMessage] = useState("");
}
    };

const exampleMessages = [
    "Congratulations! You've won $10,000. Click here to claim your prize: bit.ly/win-now",
    "Your account has been suspended. Verify your identity immediately to avoid closure.",
    "Hi! Just wanted to confirm our meeting tomorrow at 3 PM. See you then!",
];

const realScamExamples = [
    {
        category: "Financial Fraud",
        type: "Email",
        message: "URGENT: Your account has been compromised. Someone may have accessed your Microsoft account. Verify your identity and change your password immediately. Click 'Recover account' now.",
        source: "CanIPhish - Microsoft Security Alert",
        riskLevel: "HIGH",
        compromiseRate: "11%",
        url: "https://caniphish.com/phishing-email-examples"
    },
    {
        category: "Invoice Scam",
        type: "Email",
        message: "Apple Tax Invoice - You were charged $89.99 for iCloud + storage. Order ID: #APL-89234. Click here to dispute or cancel this charge immediately.",
        source: "CanIPhish - Apple Tax Invoice",
        riskLevel: "HIGH",
        compromiseRate: "12%",
        url: "https://caniphish.com/phishing-email-examples"
    },
    {
        category: "Delivery Scam",
        type: "SMS",
        message: "Australia Post: Your package is awaiting delivery. Please update your delivery details and pay a $2.50 fee to receive your parcel. Click: auspost-delivery[.]com",
        source: "ACMA - Parcel Delivery Scams",
        riskLevel: "CRITICAL",
        compromiseRate: "High",
        url: "https://www.acma.gov.au/articles/2024-09/scam-alert-5-most-common-sms-impersonation-scams"
    }
];

const getRiskColor = (level: string) => {
    switch (level) {
        case "CRITICAL": return "bg-red-900 text-white border-red-800";
        case "HIGH": return "bg-orange-600 text-white border-orange-500";
        case "MEDIUM": return "bg-yellow-500 text-white border-yellow-400";
        case "LOW": return "bg-green-600 text-white border-green-500";
        default: return "bg-gray-500 text-white";
    }
};

const getRiskIcon = (level: string) => {
    switch (level) {
        case "CRITICAL": return <AlertTriangle className="w-12 h-12 text-white animate-pulse" />;
        case "HIGH": return <AlertTriangle className="w-12 h-12 text-white" />;
        case "MEDIUM": return <AlertCircle className="w-12 h-12 text-white" />;
        case "LOW": return <Shield className="w-12 h-12 text-white" />;
        default: return <Info className="w-12 h-12 text-white" />;
    }
};

return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-20 px-6 text-white">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm shadow-2xl">
                        <Shield className="w-16 h-16 text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        AntiScam<span className="text-blue-400">AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                        AI-powered fraud detection that analyzes messages in seconds to protect you from scams, phishing, and financial fraud.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            Real-time Analysis
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            Multi-Model Detection
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            Instant Results
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Input Section */}
        <section className="py-12 px-6 -mt-10 relative z-20">
            <div className="container mx-auto max-w-4xl">
                <Card className="p-8 shadow-xl border-0 ring-1 ring-gray-200">
                    <form onSubmit={handleAnalyze} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-lg font-semibold text-gray-900">
                                Paste the message you want to analyze
                            </label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Enter any email, text message, or suspicious communication here..."
                                className="min-h-[200px] text-base resize-none bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                disabled={isLoading}
                            />
                            <p className="text-sm text-gray-500 flex justify-between">
                                <span>Minimum 10 characters</span>
                                <span>{message.length}/5000</span>
                            </p>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-14 text-lg shadow-lg shadow-blue-500/20"
                            disabled={isLoading || message.trim().length < 10}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <Search className="mr-2 h-5 w-5" />
                                    Analyze Message
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                            Try these examples:
                        </h3>
                        <div className="space-y-2">
                            {exampleMessages.map((example, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMessage(example)}
                                    disabled={isLoading}
                                    className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm text-gray-600 transition-colors flex items-center justify-between group"
                                >
                                    <span className="truncate">{example}</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                                </button>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </section>

        {/* Results Section */}
        {analysis && (
            <section ref={resultsRef} className="py-12 px-6 animate-in slide-in-from-bottom-8 duration-700">
                <div className="container mx-auto max-w-4xl space-y-6">
                    {/* Risk Score Card */}
                    <Card className={`p-8 ${getRiskColor(analysis.riskLevel)} shadow-xl border-0 overflow-hidden relative`}>
                        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-2 text-center md:text-left">
                                <h2 className="text-3xl font-bold tracking-tight">Risk Level: {analysis.riskLevel}</h2>
                                <p className="text-lg opacity-90 max-w-xl">{analysis.reason}</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                {getRiskIcon(analysis.riskLevel)}
                                <div className="text-4xl font-bold">{analysis.riskScore}/100</div>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/20 relative z-10">
                            <div className="flex items-center justify-between text-sm">
                                <span className="opacity-80">Confidence Level</span>
                                <span className="font-semibold text-lg">{analysis.confidence}%</span>
                            </div>
                        </div>
                    </Card>

                    {/* AI Adviser */}
                    <Card className="p-6 shadow-lg border-blue-100 bg-blue-50/50">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-blue-600" />
                            AI Security Adviser
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                                <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">Summary</h4>
                                <p className="text-gray-900 text-sm leading-relaxed">{analysis.aiAdviser.summary}</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                                    <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">Verdict</h4>
                                    <p className="text-gray-900 text-sm font-semibold">{analysis.aiAdviser.verdict}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                                    <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">Action Plan</h4>
                                    <ul className="space-y-2">
                                        {analysis.aiAdviser.actionPlan.slice(0, 3).map((action, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <span className="text-blue-600 mt-1">→</span>
                                                <span className="text-gray-900">{action}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Suspicious Elements */}
                    {(analysis.suspiciousWords.length > 0 || analysis.suspiciousPatterns.length > 0) && (
                        <Card className="p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Suspicious Elements Detected</h3>

                            {analysis.suspiciousWords.length > 0 && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-500 mb-3">Keywords Found:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {analysis.suspiciousWords.map((word, index) => (
                                            <Badge key={index} variant="destructive" className="text-sm px-3 py-1">
                                                {word}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {analysis.suspiciousPatterns.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-3">Patterns Identified:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {analysis.suspiciousPatterns.map((pattern, index) => (
                                            <Badge key={index} variant="outline" className="text-sm font-mono bg-gray-50 text-gray-700 border-gray-200">
                                                {pattern}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Card>
                    )}

                    {/* Analysis Metrics */}
                    <Card className="p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Analysis Metrics</h3>
                        <div className="space-y-8">
                            {/* Keyword Frequency */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-3">Keyword Frequency</h4>
                                <div className="space-y-3">
                                    {analysis.graphData.keywordFrequency.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <span className="text-sm text-gray-700 w-32 truncate">{item.keyword}</span>
                                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-600 rounded-full"
                                                    style={{ width: `${(item.count / Math.max(...analysis.graphData.keywordFrequency.map(k => k.count))) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900 w-8 text-right">{item.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category Breakdown */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-3">Category Breakdown</h4>
                                <div className="space-y-3">
                                    {analysis.graphData.categoryBreakdown.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <span className="text-sm text-gray-700 w-32">{item.category}</span>
                                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                                                    style={{ width: `${item.percentage}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900 w-12 text-right">{item.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Recommendations */}
                    {analysis.recommendations.length > 0 && (
                        <Card className="p-6 shadow-md bg-green-50/50 border-green-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-green-600" />
                                Safety Recommendations
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {analysis.recommendations.map((rec, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm bg-white p-3 rounded-lg border border-green-100 shadow-sm">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold text-xs">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700 pt-0.5">{rec}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}
                </div>
            </section>
        )}

        {/* Scam Sources Section */}
        <section className="py-16 px-6 bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <AlertTriangle className="h-8 w-8 text-orange-500" />
                        <h2 className="text-4xl font-bold text-gray-900">Real-World Scam Examples</h2>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Authentic scam messages documented by leading cybersecurity organizations.
                        <span className="font-semibold text-gray-900"> No dummy data - all examples are real threats.</span>
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {realScamExamples.map((example, index) => (
                        <Card
                            key={index}
                            className="p-6 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-300 bg-white"
                        >
                            <div className="space-y-4">
                                <div className="flex items-start justify-between gap-2">
                                    <Badge variant="outline" className="font-semibold bg-gray-50">
                                        {example.category}
                                    </Badge>
                                    <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
                                        {example.type === "Email" ? <Mail className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}
                                        {example.type}
                                    </Badge>
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                                    <p className="text-sm text-gray-700 leading-relaxed italic">
                                        "{example.message}"
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">Risk Level:</span>
                                        <Badge className={example.riskLevel === 'CRITICAL' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}>
                                            {example.riskLevel}
                                        </Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">Compromise Rate:</span>
                                        <span className="text-xs font-semibold text-red-600">{example.compromiseRate}</span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-gray-100">
                                    <a
                                        href={example.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 transition-colors group"
                                    >
                                        <span className="font-medium">Source: {example.source}</span>
                                        <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-white border-t border-gray-200">
            <div className="container mx-auto max-w-4xl text-center space-y-4">
                <p className="text-sm text-gray-500">
                    AntiScamAI uses advanced multi-layer analysis to detect fraud, phishing, and manipulation.
                    Always verify suspicious messages through official channels.
                </p>
                <p className="text-xs text-gray-400 font-semibold">
                    Developed by TrustWave
                </p>
            </div>
        </footer>
    </div>
);
}
