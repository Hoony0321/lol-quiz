import { Flex } from "@chakra-ui/react";
import Logo from "@/src/clients/components/common/Logo";

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      py="1.5rem"
    >
      <Logo />
    </Flex>
  );
};

export default Header;
