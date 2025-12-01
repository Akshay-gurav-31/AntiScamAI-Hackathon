const GEMINI_API_KEY = "AIzaSyCOS_bc1Zd6QxEAcp2vz4Znv7PO6QswAuI";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

interface GeminiRequest {
  contents: {
    parts: {
      text: string;
    }[];
  }[];
}

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export interface ScamAnalysisResult {
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

export async function analyzeWithGemini(message: string): Promise<ScamAnalysisResult> {
  try {
    const prompt = `
      Analyze the following message for scam/fraud indicators and provide a detailed analysis in JSON format:
      
      Message: "${message}"
      
      Please analyze this message and respond with ONLY a JSON object that matches this exact structure:
      {
        "riskScore": number (0-100),
        "riskLevel": "CRITICAL" | "HIGH" | "MEDIUM" | "LOW",
        "reason": string,
        "suspiciousWords": string[],
        "suspiciousPatterns": string[],
        "recommendations": string[],
        "confidence": number (0-100),
        "detectionFactors": string[],
        "intentDetection": {
          "primaryIntent": string,
          "subIntents": string[],
          "targetedAction": string
        },
        "linguisticAnalysis": {
          "tone": string[],
          "manipulationTactics": string[],
          "urgencyLevel": number (0-100),
          "emotionalTriggers": string[]
        },
        "graphData": {
          "keywordFrequency": { "keyword": string, "count": number }[],
          "categoryBreakdown": { "category": string, "percentage": number }[],
          "componentScores": { "component": string, "score": number }[]
        },
        "aiAdviser": {
          "summary": string,
          "verdict": string,
          "actionPlan": string[]
        }
      }
      
      Ensure all fields are populated with appropriate values based on your analysis. The riskScore should be a number between 0-100.
    `;

    const requestBody: GeminiRequest = {
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    };

    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No candidates returned from Gemini API');
    }

    const responseText = data.candidates[0].content.parts[0].text;
    
    // Extract JSON from the response (in case there's extra text)
    const jsonStart = responseText.indexOf('{');
    const jsonEnd = responseText.lastIndexOf('}') + 1;
    const jsonString = responseText.substring(jsonStart, jsonEnd);
    
    const result: ScamAnalysisResult = JSON.parse(jsonString);
    
    // Validate that all required fields are present
    if (!result.riskScore || !result.riskLevel || !result.reason) {
      throw new Error('Invalid response format from Gemini API');
    }
    
    return result;
  } catch (error) {
    console.error('Error analyzing with Gemini:', error);
    throw error;
  }
}