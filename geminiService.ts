import { GoogleGenAI } from "@google/genai";
import { LyricsType, PromptTone, PromptLength } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// --- Dummy Lyrics Data ---
const RATI_LYRICS_DUMMY = `## **Title: Emotional Depth (Sad)**

<br/>

### **[Verse]**

তি কোনদিন 
রাতি হ'জাক অইয়া 
নিজরে নিজে মাতাসিলেতা

তি কোনদিন 
আপ্পানে আখ্যূলা আহা সিলেতা..

আৰ - পৰে.. 
ইম্পানি ইম্পানি অ'ছিলে তা..

<br/>

### **[Chorus]**

খালি কাগজে লিখিছিলু জেতা মিঃ
এবাকা পেয়া, 
তিঙিয়া আসে।

শব্দ কতোগো
মাতানি নারেছিলু 
এবাকাও হৃদির কুঞ্জে, 
লুকেইয়া আসে।

<br/>

### **[Bridge]**

*(Sad, emotional deep feel loud vocal)*

সানিয়া আসু, বোউদে মি 
বিসারাউড়ি মৰে মি,

সানিয়া আসে নিঃশিং হাবি   
খম করে, আখুলা নাৰুৰি

হাবিতা জাগাত আসে  
কিন্তু হূদ্দা তি নেই,
কিয়া।

হুম্ হুম্ হুম্

<br/>

### **[Outro]**

হাবি আছে , উসাদে আসে কিন্তু, 
কিয়া.. 
খালি খালি 
লাগের কিয়া

উড়ে জে তর ডাকহান আছিল,
লগে যে মুখশী আছিল,
গুনগুনিয়ে জেবাকাউ মনে 
আজি‌ নেই কিত্তাউ কিয়া

---
*Composed in Bishnupriya Manipuri*
`;

export const generateBishnupriyaLyrics = async (
  topic: string,
  type: LyricsType
): Promise<string> => {
  // 1. Intercept "rati" topic for dummy data
  if (topic.trim().toLowerCase().includes('rati')) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return RATI_LYRICS_DUMMY;
  }

  // 2. Real API Call
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure your environment.");
  }

  const prompt = `
    Act as a poet and songwriter fluent in the Bishnupriya Manipuri language (closely related to Bengali and Meitei).
    Create lyrics for a song about "${topic}".
    
    Style/Genre: ${type}.
    
    Requirements:
    1. The lyrics must be in Bishnupriya Manipuri (Bengali script).
    2. Provide a transliteration (romanized) for pronunciation.
    3. Provide an English translation for each stanza in parentheses or below the line.
    4. Structure it with verses and a chorus.
    5. Keep it culturally relevant and emotional.
    
    Format the output clearly with Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Failed to generate lyrics.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to Remo AI services.");
  }
};

export const translateToBishnupriya = async (text: string): Promise<string> => {
  const normalizedText = text.trim().toLowerCase().replace(/[?.]/g, '');

  // 1. Intercept specific phrases for dummy data
  if (normalizedText === 'how are you') {
    await new Promise(resolve => setTimeout(resolve, 800));
    return "কিমে ওয়া আহত (Kime wa ahoto)";
  }
  if (normalizedText === 'what can i do') {
    await new Promise(resolve => setTimeout(resolve, 800));
    return "মি কিহান করানি পারুরিতা (Mi kihan korani parurita)";
  }

  // 2. Real API Call
  if (!apiKey) {
    // Fallback if no API key is present for other texts
    return "Translation service unavailable (Missing API Key). Try 'How are you' or 'What can I do?' for demo.";
  }

  const prompt = `
    Translate the following English text into Bishnupriya Manipuri.
    
    Input: "${text}"
    
    Output format:
    Bishnupriya Manipuri Script (Transliteration)
    
    Example Output:
    কিমে ওয়া আহত (Kime wa ahoto)
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Translation failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to translation services.");
  }
};

export const generateOptimizedPrompt = async (
  category: string,
  selectedTypes: string[],
  tone: PromptTone,
  length: PromptLength
): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  const prompt = `
    Act as an expert Prompt Engineer.
    Create a highly optimized, professional prompt for an AI model (like Gemini or ChatGPT).
    
    Goal Category: ${category}
    Intended Use Cases: ${selectedTypes.join(', ')}
    Desired Tone: ${tone}
    Desired Length/Detail Level: ${length}
    
    The output should be a single, copy-pasteable prompt block that a user can use. 
    Include placeholders like [Insert text here] where necessary.
    
    After the prompt, briefly explain (in 1 bullet point) why this prompt is effective.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Failed to generate prompt.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to Remo AI services.");
  }
};