import LogoImg from "@/public/assets/logo.png";
import Link from "next/link";
import { Flex, Text, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/">
      <Flex alignItems="center" gap="1rem">
        <Image
          src={LogoImg.src}
          alt="logo"
          width={{ base: "25px", md: "30px", lg: "35px" }}
        />
        <Text
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
          fontWeight="bold"
        >
          롤 챔피언 맞추기
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
