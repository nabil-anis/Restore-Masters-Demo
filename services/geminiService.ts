import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a helpful, professional, and empathetic customer service representative for "Restore Masters". 
Your goal is to assist website visitors who may be dealing with stressful property damage.

Key Information about Restore Masters:
- Services: Water Damage Restoration, Fire & Smoke Damage Repair, Mold Remediation, Storm Damage Repair, and Commercial Restoration.
- Availability: We operate 24/7 for emergencies. We have a 60-minute response time guarantee.
- Location: Servicing the greater metropolitan area (assume local to the user).
- Tone: Calming, professional, expert, and reassuring.

Guidelines:
1. If a user reports an emergency (e.g., "my house is flooding"), urge them to call our emergency hotline immediately at 1-800-RESTORE.
2. Keep responses concise (under 3 sentences usually) as this is a chat widget.
3. Collect basic info if they want a quote: Name and Issue type.
4. Do not make up pricing. Say that a technician needs to assess the damage for an accurate quote.
`;

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session");
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I apologize, but I'm having trouble connecting right now. Please call us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I encountered an error. Please try again or call our support line.";
  }
};