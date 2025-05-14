import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import GameStatusBoard from "./GameStatusBoard";
import TeemoSalute from "@/public/assets/teemo-salute-500.png";
import ChatScreen, { Chat } from "./ChatBox";

interface GameScreenProps {
  chatHistory: Chat[];
}

const GameScreen = ({ chatHistory }: GameScreenProps) => {
  const [isMobile] = useMediaQuery(["(max-width: 425px)"]);
  return (
    <Flex flexDirection="column" alignItems="center" width="100%">
      <GameStatusBoard />
      <Box h="3rem" />
      <Flex
        flexDirection="row"
        gap="5rem"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        {!isMobile && (
          <Image
            src={TeemoSalute.src}
            alt="Teemo"
            width={{ base: "15rem", md: "20rem", lg: "30rem" }}
            height="auto"
            style={{ objectFit: "contain" }}
          />
        )}
        <Box flex="1">
          <ChatScreen chatHistory={chatHistory} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default GameScreen;
