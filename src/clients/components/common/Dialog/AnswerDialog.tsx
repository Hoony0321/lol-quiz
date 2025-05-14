import { Dialog as ChakraDialog, Text, VStack, HStack } from "@chakra-ui/react";
import PrimaryButton from "@/src/clients/components/common/Buttons/PrimaryBtn";
import { modalStore } from "@/src/clients/stores/modalStore";
import Input from "@/src/clients/components/common/Input/Input";
import { useState, useEffect } from "react";
import submitAnswer from "@/src/clients/lib/submitAnswer";

const AnswerDialog = () => {
  const { openModal, close } = modalStore();
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (openModal === "answer") {
      setAnswer("");
    }
  }, [openModal]);

  const handleSubmit = () => {
    submitAnswer(answer);
    close();
  };

  return (
    <ChakraDialog.Root open={openModal === "answer"} onOpenChange={close}>
      <ChakraDialog.Backdrop />
      <ChakraDialog.Positioner
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChakraDialog.Content
          style={{
            width: "90%",
            maxWidth: "500px",
            borderRadius: "16px",
            padding: "36px",
            backgroundColor: "white",
          }}
        >
          <VStack align="stretch" gap={12}>
            <Text
              fontSize="3rem"
              fontWeight="bold"
              textAlign="center"
              color="gray.700"
              mb={8}
            >
              정답을 입력해주세요
            </Text>

            <Text fontSize="2rem" color="black">
              챔피언 이름을 입력하세요
            </Text>

            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && answer.trim()) {
                  handleSubmit();
                }
              }}
              placeholder="예: 가렌, 아리, 이즈리얼"
              px="3rem"
              py="1.5rem"
              fontWeight="bold"
              fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
              height={{ base: "3rem", md: "4rem", lg: "5rem" }}
              autoFocus
            />

            <HStack justify="flex-end">
              <PrimaryButton
                onClick={close}
                px="2rem"
                py="1.5rem"
                fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
                height={{ base: "3rem", md: "4rem", lg: "5rem" }}
              >
                취소
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                onClick={handleSubmit}
                disabled={!answer.trim()}
                px="2rem"
                py="1.5rem"
                fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}
                height={{ base: "3rem", md: "4rem", lg: "5rem" }}
              >
                정답 제출
              </PrimaryButton>
            </HStack>
          </VStack>
        </ChakraDialog.Content>
      </ChakraDialog.Positioner>
    </ChakraDialog.Root>
  );
};

export default AnswerDialog;
