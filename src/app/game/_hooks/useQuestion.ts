import questionToAI from "@/src/clients/lib/api/questionToAI";
import { useState } from "react";
import gameStatusStore from "@/src/clients/stores/gameStatusStore";

const useQuestion = () => {
  const [question, setQuestion] = useState("");
  const { questionUsed, setQuestionUsed, addChatHistory, champ } =
    gameStatusStore();

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleQuestionSubmit = async () => {
    if (!question.trim()) return;

    addChatHistory({ text: question, isUser: true });
    setQuestion("");
    setQuestionUsed(questionUsed + 1);
    try {
      const res = await questionToAI({ question, answer: champ });
      if (res.includes(champ)) {
        addChatHistory({
          text: "티모가 대답을 못했어요... 다시 시도해 주세요!",
          isUser: false,
        });
        setQuestionUsed(questionUsed - 1);
      } else {
        addChatHistory({ text: res, isUser: false });
      }
    } catch (err) {
      console.error("AI 응답 오류:", err);
      addChatHistory({
        text: "티모가 대답을 못했어요... 다시 시도해 주세요!",
        isUser: false,
      });
    }
  };

  return {
    question,
    handleQuestionChange,
    handleQuestionSubmit,
  };
};

export default useQuestion;
