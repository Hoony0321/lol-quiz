"use client";
import TeemoHi from "@/public/assets/teemo-hi-500.png";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import PrimaryBtn from "@/src/clients/components/common/Buttons/PrimaryBtn";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const router = useRouter();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
    >
      <Image
        src={TeemoHi.src}
        alt="Teemo"
        width={{ base: "150px", md: "250px", lg: "350px" }}
      />
      <Box h="2rem" />
      <Text
        fontWeight="black"
        fontSize={{ base: "2rem", md: "3.5rem", lg: "5rem" }}
      >
        Teemo&apos;s Champion Quiz
      </Text>
      <Text
        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        fontWeight="normal"
      >
        티모가 생각하는 롤 챔피언을 맞춰보세요!
      </Text>
      <Box h={{ base: "3rem", md: "4rem", lg: "5rem" }} />
      <PrimaryBtn
        w={{ base: "20rem", md: "30rem", lg: "40rem" }}
        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
        fontWeight="bold"
        onClick={() => router.push("/settings")}
      >
        시작하기
      </PrimaryBtn>
    </Flex>
  );
}
