"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PrimaryButton from "@/src/clients/components/common/Buttons/PrimaryBtn";
import gameStatusStore from "@/src/clients/stores/gameStatusStore";
import { useRouter } from "next/navigation";

const EndPage = () => {
  const router = useRouter();
  const { champ, champEnglishName, status } = gameStatusStore();
  const champImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champEnglishName}_0.jpg`;

  const handleOnClick = () => {
    router.push("/settings");
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
      width="100%"
    >
      <Image
        src={champImageUrl}
        alt="champion"
        width={{ base: "200px", md: "300px", lg: "400px" }}
        height={{ base: "200px", md: "300px", lg: "400px" }}
        borderRadius="50%"
      />
      <Box h={{ base: "3rem", md: "4rem", lg: "5rem" }} />
      <Text
        fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}
        fontWeight="bold"
      >
        {status === "win" ? "정답입니다!" : "틀렸습니다!"}
      </Text>
      <Box h={{ base: "1rem", md: "1.5rem", lg: "2rem" }} />
      <Text
        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        fontWeight="bold"
      >
        티모가 생각했던 챔피언은 [{champ}]입니다.
      </Text>
      <Box h={{ base: "1rem", md: "2rem", lg: "3rem" }} />
      <PrimaryButton
        width={{ base: "20rem", md: "30rem", lg: "40rem" }}
        height={{ base: "4rem", md: "5rem", lg: "6rem" }}
        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        onClick={handleOnClick}
      >
        다시하기
      </PrimaryButton>
    </Flex>
  );
};

export default EndPage;
