export interface DictionaryEntry {
  english: string;
  hindi: string;
  bangla: string;
  bishnupriya: string;
  example?: string;
}

export interface DictionaryData {
  [key: string]: DictionaryEntry;
}

export interface User {
  uid?: string;
  name: string;
  email: string;
  profileImage?: string;
}

export enum LyricsType {
  TRADITIONAL = 'Traditional/Folk',
  MODERN = 'Modern/Contemporary',
  DEVOTIONAL = 'Devotional/Spiritual',
  LOVE = 'Love/Romance',
  PATRIOTIC = 'Patriotic',
  FESTIVAL = 'Festival/Celebration',
}

export interface LyricsState {
  topic: string;
  type: LyricsType;
  generatedLyrics: string;
  isLoading: boolean;
  error: string | null;
}

export enum PromptTone {
  FORMAL = 'Formal',
  CASUAL = 'Casual',
  TECHNICAL = 'Technical',
  CREATIVE = 'Creative',
}

export enum PromptLength {
  SHORT = 'Short',
  MEDIUM = 'Medium',
  DETAILED = 'Detailed',
}

export interface PromptState {
  category: string;
  types: string[];
  tone: PromptTone;
  length: PromptLength;
  generatedPrompt: string;
  isLoading: boolean;
  error: string | null;
}

export type TabType = 
  | 'dictionary' 
  | 'saved'
  | 'translator' 
  |