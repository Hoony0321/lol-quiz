"use client";
import { Flex, Box, Button } from "@chakra-ui/react";
import GameScreen from "./_components/GameScreen";
import QuestionInputBox from "./_components/QuestionInputBox";
import AnswerBtn from "./_components/AnswerBtn";
import useQuestion from "./_hooks/useQuestion";
import gameStatusStore from "@/src/clients/stores/gameStatusStore";
import AnswerDialog from "@/src/clients/components/common/Dialog/AnswerDialog";
import { modalStore } from "@/src/clients/stores/modalStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function GamePage() {
  const router = useRouter();
  const { chatHistory, status, setStatus } = gameStatusStore();
  const { question, handleQuestionChange, handleQuestionSubmit } =
    useQuestion();
  const { open } = modalStore();

  useEffect(() => {
    if (status === "win" || status === "lose") {
      router.replace("/end");
    }
    if (status === "setting") {
      router.replace("/");
    }
  }, [status]);

  const handleEndGame = () => {
    setStatus("lose");
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
      width="100%"
    >
      <GameScreen chatHistory={chatHistory} />
      <Box h={{ base: "5rem", md: "8rem", lg: "10rem" }} />
      <QuestionInputBox
        value={question}
        onChange={handleQuestionChange}
        onSubmit={handleQuestionSubmit}
      />
      <Box h={{ base: "5rem", md: "8rem", lg: "10rem" }} />
      <AnswerBtn onClick={() => open("answer")} />
      <Box h={{ base: "5rem", md: "8rem", lg: "10rem" }} />
      <AnswerDialog />
      <Button onClick={handleEndGame}>게임 종료</Button>
    </Flex>
  );
}
