import { Flex, Box } from "@chakra-ui/react";

export interface Chat {
  text: string;
  isUser: boolean;
}

const ChatBubble = ({ text, isUser }: Chat) => {
  return (
    <Flex justifyContent={isUser ? "flex-end" : "flex-start"}>
      <Box
        bg={isUser ? "#494BBE" : "white"}
        color={isUser ? "white" : "black"}
        p="1rem 2rem"
        borderRadius="2rem"
        border={isUser ? "none" : "1px solid EDEDED"}
        width="fit-content"
        fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
        fontWeight="semibold"
        boxShadow="md"
      >
        {text}
      </Box>
    </Flex>
  );
};

interface ChatBoxProps {
  chatHistory: Chat[];
}

const ChatBox = ({ chatHistory }: ChatBoxProps) => {
  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      bg="#EFEFEF"
      p={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
      borderRadius="2rem"
      border="1px solid black"
      height={{ base: "30rem", md: "40rem", lg: "50rem" }}
      overflowY="auto"
      style={{
        scrollbarWidth: "none",
      }}
    >
      {chatHistory.map((message, index) => (
        <ChatBubble key={index} text={message.text} isUser={message.isUser} />
      ))}
    </Flex>
  );
};

export default ChatBox;
