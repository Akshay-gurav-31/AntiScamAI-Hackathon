import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Search } from "lucide-react";

interface AnalysisInputProps {
  onAnalyze: (message: string) => void;
  isLoading: boolean;
}

const AnalysisInput = ({ onAnalyze, isLoading }: AnalysisInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onAnalyze(message);
    }
  };

  const exampleMessages = [
    "Congratulations! You've won $10,000. Click here to claim your prize: bit.ly/win-now",
    "Your account has been suspended. Verify your identity immediately to avoid closure.",
    "Hi! Just wanted to confirm our meeting tomorrow at 3 PM. See you then!",
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 shadow-lg animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="message" className="text-lg font-semibold text-foreground">
                Paste the message you want to analyze
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter any email, text message, or suspicious communication here..."
                className="min-h-[200px] text-base resize-none"
                disabled={isLoading}
              />
              <p className="text-sm text-muted-foreground">
                Minimum 10 characters, maximum 5000 characters
              </p>
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Try these examples:
            </h3>
            <div className="space-y-2">
              {exampleMessages.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(example)}
                  disabled={isLoading}
                  className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted text-sm text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AnalysisInput;
