"use client";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import TeemoThink from "@/public/assets/teemo-think-500.png";
import AnimatedDots from "./_components/AnimatedDots";
import { useEffect } from "react";
import getRandomChamp from "@/src/clients/lib/api/getRandomChamp";
import gameStatusStore from "@/src/clients/stores/gameStatusStore";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const { setChamp, setChampEnglishName, setStatus } = gameStatusStore();
  const router = useRouter();

  useEffect(() => {
    const fetchChamp = async () => {
      const champ = await getRandomChamp();
      setChamp(champ.name);
      setChampEnglishName(champ.id);
      setStatus("playing");
      setTimeout(() => {
        router.replace("/game");
      }, 1500);
    };
    fetchChamp();
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
    >
      <Image
        src={TeemoThink.src}
        alt="Teemo"
        width={{ base: "20rem", md: "25rem", lg: "30rem" }}
      />
      <Box h="3rem" />
      <Text
        fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}
        fontWeight="bold"
      >
        티모가 챔피언을 생각하는 중이에요
        <AnimatedDots />
      </Text>
    </Flex>
  );
}
