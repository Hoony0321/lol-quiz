import { Button, ButtonProps } from "@chakra-ui/react";

const NormalBtn = (props: ButtonProps) => {
  return (
    <Button
      borderRadius="20px"
      boxShadow="0px 8px 8px 0px rgba(0, 0, 0, 0.25)"
      lineHeight="1"
      height="auto"
      py="1.5rem"
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default NormalBtn;
