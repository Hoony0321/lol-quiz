import gameStatusStore from "@/src/clients/stores/gameStatusStore";
import { toaster } from "@/src/clients/components/chakra/toaster";

const submitAnswer = (answer: string) => {
  const { champ, questionLimit, questionUsed, setQuestionUsed, setStatus } =
    gameStatusStore.getState();
  if (questionUsed + 1 >= questionLimit) {
    setStatus("lose");
  } else {
    if (answer.trim() === champ) {
      setStatus("win");
    } else {
      setQuestionUsed(questionUsed + 1);
      toaster.create({
        description: "틀렸습니다.",
        type: "error",
        duration: 2000,
      });
    }
  }
};
export default submitAnswer;
