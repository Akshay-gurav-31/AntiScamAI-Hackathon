import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, AlertTriangle, Mail, MessageSquare } from "lucide-react";

const ScamSources = () => {
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
    },
    {
      category: "Government Impersonation",
      type: "SMS",
      message: "MyGov: You have a pending tax refund of $847.50. Claim your refund now by verifying your details urgently. Link: mygov-refund[.]au",
      source: "ACMA - Government Impersonation",
      riskLevel: "CRITICAL",
      compromiseRate: "Very High",
      url: "https://www.acma.gov.au/articles/2024-09/scam-alert-5-most-common-sms-impersonation-scams"
    },
    {
      category: "Account Deactivation",
      type: "Email",
      message: "SecureNotify: Your email account has been inactive and is scheduled for deletion. Click to verify your account within 24 hours to prevent deactivation.",
      source: "CanIPhish - Email Account Deactivation",
      riskLevel: "HIGH",
      compromiseRate: "14%",
      url: "https://caniphish.com/phishing-email-examples"
    },
    {
      category: "HR Manipulation",
      type: "Email",
      message: "HR Peer Feedback Received: An anonymous colleague has submitted feedback about your recent workplace interactions. Click to view and respond confidentially. - Automated HR Solutions",
      source: "CanIPhish - HR Peer Feedback",
      riskLevel: "CRITICAL",
      compromiseRate: "40%",
      url: "https://caniphish.com/phishing-email-examples"
    },
    {
      category: "Loyalty Points Scam",
      type: "SMS",
      message: "Woolworths Rewards: Your 2,450 points will expire in 48 hours! Login now to claim your rewards before they're gone. Link: woolworths-rewards[.]net",
      source: "ACMA - Reward Point Scams",
      riskLevel: "HIGH",
      compromiseRate: "High",
      url: "https://www.acma.gov.au/articles/2024-09/scam-alert-5-most-common-sms-impersonation-scams"
    },
    {
      category: "Software Update",
      type: "Email",
      message: "IT Department: URGENT - Critical vulnerability found in device management software. Update your system immediately or you will be locked out by tomorrow. Click to access update portal.",
      source: "CanIPhish - Urgent Software Update",
      riskLevel: "CRITICAL",
      compromiseRate: "21%",
      url: "https://caniphish.com/phishing-email-examples"
    },
    {
      category: "Social Media Threat",
      type: "Email",
      message: "X (Twitter) Content Violation: Your account has violated our content policies. Review the alleged violation now or your page will be suspended for non-compliance.",
      source: "CanIPhish - X Content Violation",
      riskLevel: "CRITICAL",
      compromiseRate: "30%",
      url: "https://caniphish.com/phishing-email-examples"
    },
    {
      category: "Toll Road Scam",
      type: "SMS",
      message: "Linkt: You have an overdue toll road account of $12.70. Pay now to avoid additional fees and legal action. Visit: linkt-pay[.]com",
      source: "ACMA - Toll Road Operator Impersonation",
      riskLevel: "HIGH",
      compromiseRate: "High",
      url: "https://www.acma.gov.au/articles/2024-09/scam-alert-5-most-common-sms-impersonation-scams"
    },
    {
      category: "Domain Security",
      type: "Email",
      message: "GoDaddy Security Alert: Your domain has been compromised through SQL Injection. Critical issue detected. Click to validate your domain immediately to prevent illegal activity.",
      source: "CanIPhish - GoDaddy Security Breach",
      riskLevel: "CRITICAL",
      compromiseRate: "8%",
      url: "https://caniphish.com/phishing-email-examples"
    },
    {
      category: "Document Signing",
      type: "Email",
      message: "Adobe Acrobat Sign: Your signature is required on a mutual Non-Disclosure Agreement (NDA). Click 'Review and Sign' to complete this business process.",
      source: "CanIPhish - Adobe Acrobat Sign",
      riskLevel: "HIGH",
      compromiseRate: "14%",
      url: "https://caniphish.com/phishing-email-examples"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "CRITICAL":
        return "bg-danger/10 text-danger border-danger/20";
      case "HIGH":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-secondary/10 text-secondary-foreground border-secondary/20";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "Email" ? <Mail className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />;
  };

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-danger" />
            <h2 className="text-4xl font-bold text-foreground">Real-World Scam Examples</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Authentic scam messages documented by leading cybersecurity organizations. 
            <span className="font-semibold text-foreground"> No dummy data - all examples are real threats.</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realScamExamples.map((example, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant="outline" className="font-semibold">
                    {example.category}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    {getTypeIcon(example.type)}
                    {example.type}
                  </Badge>
                </div>

                <div className="bg-muted/50 border border-border/30 rounded-lg p-4">
                  <p className="text-sm text-foreground leading-relaxed italic">
                    "{example.message}"
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Risk Level:</span>
                    <Badge className={getRiskColor(example.riskLevel)}>
                      {example.riskLevel}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Compromise Rate:</span>
                    <span className="text-xs font-semibold text-danger">{example.compromiseRate}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <a 
                    href={example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors group"
                  >
                    <span className="font-medium">Source: {example.source}</span>
                    <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-3">Verified Sources</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="https://caniphish.com/phishing-email-examples"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                CanIPhish - 50 Phishing Email Examples (2025)
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="https://www.acma.gov.au/articles/2024-09/scam-alert-5-most-common-sms-impersonation-scams"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                ACMA - 5 Most Common SMS Scams (2024)
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScamSources;