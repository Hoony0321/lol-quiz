import { Flex, Text } from "@chakra-ui/react";
import gameStatusStore from "@/src/clients/stores/gameStatusStore";

const GameStatusBoard = () => {
  const { hintUsed, hintLimit, questionUsed, questionLimit } =
    gameStatusStore();
  return (
    <Flex
      w="100%"
      flexDirection="row"
      alignItems="center"
      gap="3rem"
      justifyContent="flex-end"
    >
      <Text
        fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
        fontWeight="bold"
      >
        💡 {hintUsed} / {hintLimit}
      </Text>
      <Text
        fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
        fontWeight="bold"
      >
        💬 {questionUsed} / {questionLimit}
      </Text>
    </Flex>
  );
};

export default GameStatusBoard;
