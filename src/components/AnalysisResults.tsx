import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, AlertCircle, Info } from "lucide-react";

export interface AnalysisData {
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

interface AnalysisResultsProps {
  analysis: AnalysisData;
}

const AnalysisResults = ({ analysis }: AnalysisResultsProps) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL":
        return "bg-gradient-to-br from-red-900 to-red-700";
      case "HIGH":
        return "bg-gradient-danger";
      case "MEDIUM":
        return "bg-gradient-warning";
      case "LOW":
        return "bg-gradient-success";
      default:
        return "bg-muted";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "CRITICAL":
        return <AlertTriangle className="w-12 h-12 text-white animate-pulse" />;
      case "HIGH":
        return <AlertTriangle className="w-12 h-12 text-danger-foreground" />;
      case "MEDIUM":
        return <AlertCircle className="w-12 h-12 text-warning-foreground" />;
      case "LOW":
        return <Shield className="w-12 h-12 text-success-foreground" />;
      default:
        return <Info className="w-12 h-12" />;
    }
  };

  return (
    <section className="py-12 px-6 animate-slide-up">
      <div className="container mx-auto max-w-4xl space-y-6">
        {/* Risk Score Card */}
        <Card className={`p-8 ${getRiskColor(analysis.riskLevel)} text-white shadow-lg`}>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Risk Level: {analysis.riskLevel}</h2>
              <p className="text-lg opacity-90">{analysis.reason}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {getRiskIcon(analysis.riskLevel)}
              <div className="text-4xl font-bold">{analysis.riskScore}/100</div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-sm">
              <span>Confidence Level</span>
              <span className="font-semibold">{analysis.confidence}%</span>
            </div>
          </div>
        </Card>

        {/* Suspicious Elements */}
        {(analysis.suspiciousWords.length > 0 || analysis.suspiciousPatterns.length > 0) && (
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-4">Suspicious Elements Detected</h3>
            
            {analysis.suspiciousWords.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.suspiciousWords.map((word, index) => (
                    <Badge key={index} variant="destructive" className="text-sm">
                      {word}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {analysis.suspiciousPatterns.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Patterns:</h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.suspiciousPatterns.map((pattern, index) => (
                    <Badge key={index} variant="outline" className="text-sm font-mono">
                      {pattern}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Card>
        )}

        {/* Detection Factors */}
        {analysis.detectionFactors.length > 0 && (
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-4">Detection Analysis</h3>
            <ul className="space-y-2">
              {analysis.detectionFactors.map((factor, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">{factor}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* AI Adviser */}
        <Card className="p-6 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            AI Security Adviser
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Summary:</h4>
              <p className="text-foreground text-sm leading-relaxed">{analysis.aiAdviser.summary}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Verdict:</h4>
              <p className="text-foreground text-sm font-semibold">{analysis.aiAdviser.verdict}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommended Actions:</h4>
              <ul className="space-y-2">
                {analysis.aiAdviser.actionPlan.map((action, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-foreground">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Intent Detection */}
        <Card className="p-6 shadow-md">
          <h3 className="text-xl font-semibold text-foreground mb-4">Intent Detection</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Primary Intent:</h4>
              <Badge variant="destructive" className="text-sm">{analysis.intentDetection.primaryIntent}</Badge>
            </div>
            {analysis.intentDetection.subIntents.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Sub-Intents:</h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.intentDetection.subIntents.map((intent, index) => (
                    <Badge key={index} variant="outline" className="text-xs">{intent}</Badge>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Targeted Action:</h4>
              <p className="text-foreground text-sm">{analysis.intentDetection.targetedAction}</p>
            </div>
          </div>
        </Card>

        {/* Linguistic Analysis */}
        <Card className="p-6 shadow-md">
          <h3 className="text-xl font-semibold text-foreground mb-4">Deep Linguistic Analysis</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Tone Detection:</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.linguisticAnalysis.tone.map((tone, index) => (
                  <Badge key={index} className="text-xs bg-secondary">{tone}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Urgency Level:</h4>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-red-500" 
                    style={{ width: `${analysis.linguisticAnalysis.urgencyLevel}%` }}
                  />
                </div>
                <span className="text-sm font-semibold">{analysis.linguisticAnalysis.urgencyLevel}%</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Manipulation Tactics:</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.linguisticAnalysis.manipulationTactics.map((tactic, index) => (
                  <Badge key={index} variant="destructive" className="text-xs">{tactic}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Emotional Triggers:</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.linguisticAnalysis.emotionalTriggers.map((trigger, index) => (
                  <Badge key={index} variant="outline" className="text-xs">{trigger}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Graph Data Visualization */}
        <Card className="p-6 shadow-md">
          <h3 className="text-xl font-semibold text-foreground mb-4">Analysis Metrics</h3>
          <div className="space-y-6">
            {/* Keyword Frequency */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Keyword Frequency:</h4>
              <div className="space-y-2">
                {analysis.graphData.keywordFrequency.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-sm text-foreground w-32 truncate">{item.keyword}</span>
                    <div className="flex-1 h-6 bg-muted rounded-md overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${(item.count / Math.max(...analysis.graphData.keywordFrequency.map(k => k.count))) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-8 text-right">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Breakdown */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Suspicious Category Breakdown:</h4>
              <div className="space-y-2">
                {analysis.graphData.categoryBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-sm text-foreground w-32">{item.category}</span>
                    <div className="flex-1 h-6 bg-muted rounded-md overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-warning to-danger" 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-12 text-right">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Component Scores */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Scam Probability by Component:</h4>
              <div className="space-y-2">
                {analysis.graphData.componentScores.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-sm text-foreground w-32">{item.component}</span>
                    <div className="flex-1 h-6 bg-muted rounded-md overflow-hidden">
                      <div 
                        className={`h-full ${item.score >= 70 ? 'bg-danger' : item.score >= 40 ? 'bg-warning' : 'bg-success'}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-12 text-right">{item.score}/100</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        {analysis.recommendations.length > 0 && (
          <Card className="p-6 shadow-md bg-accent/5 border-accent/20">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              Safety Recommendations
            </h3>
            <ul className="space-y-3">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-foreground pt-0.5">{rec}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </section>
  );
};

export default AnalysisResults;
