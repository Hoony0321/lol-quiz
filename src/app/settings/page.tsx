"use client";

import { Flex, Text, Box } from "@chakra-ui/react";
import SelectableBtnGroup from "./_components/SelectableBtnGroup";
import gameStatusStore from "@/src/clients/stores/gameStatusStore";
import PrimaryBtn from "@/src/clients/components/common/Buttons/PrimaryBtn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SettingsPage() {
  const router = useRouter();
  const { questionLimit, setQuestionLimit, hintLimit, setHintLimit, clear } =
    gameStatusStore();

  useEffect(() => {
    clear();
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
    >
      <Text
        fontSize={{ base: "3rem", md: "4rem", lg: "5rem" }}
        fontWeight="bold"
      >
        🕹️ 난이도 선택
      </Text>
      <Box h={{ base: "6rem", md: "8rem", lg: "10rem" }} />
      <SelectableBtnGroup
        title="질문 개수"
        options={[10, 15, 20]}
        onSelect={(option) => setQuestionLimit(option)}
        selected={questionLimit}
      />
      <Box h="6rem" />
      <SelectableBtnGroup
        title="힌트 개수"
        options={[1, 2, 3]}
        onSelect={(option) => setHintLimit(option)}
        selected={hintLimit}
      />
      <Box h={{ base: "8rem", md: "10rem", lg: "12rem" }} />
      <PrimaryBtn
        w={{ base: "20rem", md: "30rem", lg: "40rem" }}
        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        fontWeight="bold"
        onClick={() => router.push("/loading")}
      >
        게임 시작
      </PrimaryBtn>
    </Flex>
  );
}
