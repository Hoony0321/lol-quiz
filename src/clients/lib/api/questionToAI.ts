import { BASE_API_URL } from "@/src/clients/constants/URL";

interface QuestionToAIProps {
  answer: string;
  question: string;
}

const questionToAI = async ({ question, answer }: QuestionToAIProps) => {
  const res = await fetch(`${BASE_API_URL}/chat`, {
    method: "POST",
    body: JSON.stringify({ question, answer }),
  });

  const data = await res.json();

  return data;
};

export default questionToAI;
