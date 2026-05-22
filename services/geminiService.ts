import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the AI assistant for Mensch Robotics. 
Your goal is to help potential customers understand our robotic fleet and mission.
We have three main robots:
1. Reception & Guidance Robot: For hospitality, facial recognition, LiDAR navigation.
2. ROBI: AI Teacher for education (K-12), adaptive learning, gamification.
3. Max Robot: Open source platform for research, Ubuntu/ROS2 support.

Our mission is to build physical AI that integrates seamlessly into human environments.
Be helpful, concise, and professional. Do not invent robots we don't have.
`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', parts: [{text: string}]}[]): Promise<string> => {
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            return "I'm sorry, my AI brain is currently offline (API Key missing). Please contact support.";
        }

        const ai = new GoogleGenAI({ apiKey });
        
        // Convert history to format expected by the SDK
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            },
            history: history, 
        });

        const result = await chat.sendMessage({
            message: message,
        });

        return result.text || "I'm processing that...";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I seem to be having trouble connecting to the network. Please try again later.";
    }
};