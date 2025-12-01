import { useState } from "react";
import { toast } from "sonner";
import Hero from "@/components/Hero";
import AnalysisInput from "@/components/AnalysisInput";
import AnalysisResults, { AnalysisData } from "@/components/AnalysisResults";
import ScamSources from "@/components/ScamSources";
import { analyzeWithGemini, ScamAnalysisResult } from "@/lib/gemini-api";

const Index = () => {
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const performGeminiAnalysis = async (message: string): Promise<AnalysisData> => {
    try {
      const result = await analyzeWithGemini(message);
      return result;
    } catch (error) {
      console.error('Gemini analysis failed:', error);
      throw error;
    }
  };

  const handleAnalyze = async (message: string) => {
    if (message.trim().length < 10) {
      toast.error("Message too short. Please enter at least 10 characters.");
      return;
    }

    if (message.length > 5000) {
      toast.error("Message too long. Please limit to 5000 characters.");
      return;
    }

    setIsLoading(true);
    setAnalysis(null);

    try {
      const result = await performGeminiAnalysis(message);
      setAnalysis(result);
      
      toast.success("Analysis complete!");
      
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.querySelector('section:last-of-type');
        resultsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error("Analysis failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AnalysisInput onAnalyze={handleAnalyze} isLoading={isLoading} />
      {analysis && <AnalysisResults analysis={analysis} />}
      <ScamSources />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border mt-12">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            AntiScamAI uses advanced multi-layer analysis to detect fraud, phishing, and manipulation. 
            Always verify suspicious messages through official channels.
          </p>
          <p className="text-xs text-muted-foreground font-semibold">
            Developed by TrustWave
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
