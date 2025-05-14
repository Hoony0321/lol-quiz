import { Chat } from "@/src/app/game/_components/ChatBox";
import { create } from "zustand";

interface GameStatusStore {
  status: "setting" | "playing" | "win" | "lose";
  champ: string;
  champEnglishName: string;
  questionLimit: number;
  questionUsed: number;
  hintLimit: number;
  hintUsed: number;
  chatHistory: Chat[];
  setChamp: (champ: string) => void;
  setChampEnglishName: (champEnglishName: string) => void;
  setQuestionLimit: (questionLimit: number) => void;
  setQuestionUsed: (questionUsed: number) => void;
  setHintLimit: (hintLimit: number) => void;
  setHintUsed: (hintUsed: number) => void;
  addChatHistory: (chat: Chat) => void;
  setStatus: (status: "setting" | "playing" | "win" | "lose") => void;
  clear: () => void;
}

const gameStatusStore = create<GameStatusStore>((set) => ({
  status: "setting",
  champ: "",
  champEnglishName: "",
  questionLimit: 15,
  questionUsed: 0,
  hintLimit: 1,
  hintUsed: 0,
  chatHistory: [{ text: "안녕하세요! 자유롭게 질문해주세요!", isUser: false }],
  setChamp: (champ: string) => set({ champ }),
  setChampEnglishName: (champEnglishName: string) => set({ champEnglishName }),
  setQuestionLimit: (questionLimit: number) => set({ questionLimit }),
  setQuestionUsed: (questionUsed: number) => set({ questionUsed }),
  setHintLimit: (hintLimit: number) => set({ hintLimit }),
  setHintUsed: (hintUsed: number) => set({ hintUsed }),
  addChatHistory: (chat: Chat) =>
    set((state) => ({ chatHistory: [...state.chatHistory, chat] })),
  setStatus: (status: "setting" | "playing" | "win" | "lose") =>
    set({ status }),
  clear: () =>
    set({
      status: "setting",
      champ: "",
      champEnglishName: "",
      questionLimit: 15,
      questionUsed: 0,
      hintLimit: 1,
      hintUsed: 0,
      chatHistory: [
        { text: "안녕하세요! 자유롭게 질문해주세요!", isUser: false },
      ],
    }),
}));

export default gameStatusStore;
