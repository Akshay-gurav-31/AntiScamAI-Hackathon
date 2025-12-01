import { Shield } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-6">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Cybersecurity protection" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm animate-pulse-glow">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            AntiScam<span className="text-accent">AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            AI-powered fraud detection that analyzes messages in seconds to protect you from scams, phishing, and financial fraud.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Real-time Analysis
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Multi-Model Detection
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Instant Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
