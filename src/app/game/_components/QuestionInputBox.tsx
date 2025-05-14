import { Flex } from "@chakra-ui/react";
import Input from "@/src/clients/components/common/Input/Input";
import PrimaryButton from "@/src/clients/components/common/Buttons/PrimaryBtn";

const QuestionInputBox = ({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Flex
        gap={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
        alignItems="center"
        width="100%"
      >
        <Input
          value={value}
          onChange={onChange}
          placeholder="질문을 입력하세요"
          px="3rem"
          py="1.5rem"
          fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
          height={{ base: "4rem", md: "5rem", lg: "6rem" }}
        />
        <PrimaryButton
          type="submit"
          width={{ base: "8rem", md: "9rem", lg: "10rem" }}
          height={{ base: "4rem", md: "5rem", lg: "6rem" }}
          fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
        >
          질문
        </PrimaryButton>
      </Flex>
    </form>
  );
};

export default QuestionInputBox;
