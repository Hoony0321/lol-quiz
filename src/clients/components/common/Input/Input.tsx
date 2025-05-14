import { Input as ChakraInput } from "@chakra-ui/react";
import { InputProps } from "@chakra-ui/react";
const Input = ({ ...props }: InputProps) => {
  return (
    <ChakraInput
      {...props}
      border="2px solid EDEDED"
      borderRadius="40rem"
      boxShadow="md"
      bg="white"
      _focus={{ borderColor: "#494BBE" }}
    />
  );
};

export default Input;
