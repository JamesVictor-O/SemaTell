import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";

// Initialize only if key exists to avoid immediate crash, though strict mode will catch it in logic
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const analyzeMarket = async (
  marketTitle: string,
  currentYes: number,
  volume: number
): Promise<string> => {
  if (!ai)
    return "Gemini API Key is missing. Please configure it to use the AI Analyst.";

  try {
    const prompt = `
      You are an expert prediction market analyst for "Prophet", a cultural prediction market.
      
      Analyze the following market:
      Market: "${marketTitle}"
      Current 'Yes' Price: $${currentYes.toFixed(
        2
      )} (Implied probability: ${Math.round(currentYes * 100)}%)
      Volume: $${volume.toLocaleString()}

      Provide a brief, witty, and data-driven insight (max 2 sentences) about whether this seems overvalued, undervalued, or a toss-up based on general knowledge of the topic.
      Keep it fun and engaging for a crypto-native audience.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Could not generate analysis at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Oracle is currently silent. Please try again later.";
  }
};

export const chatWithOracle = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  if (!ai) return "Gemini API Key is missing.";

  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction:
          "You are The Prophet, a mystical AI entity living inside a prediction market. You speak in riddles but provide sharp financial advice about cultural events. You are helpful but mysterious.",
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I cannot speak right now.";
  }
};
