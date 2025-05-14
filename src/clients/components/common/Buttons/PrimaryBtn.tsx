import { ButtonProps } from "@chakra-ui/react";
import NormalBtn from "./NormalBtn";

const PrimaryBtn = (props: ButtonProps) => {
  return (
    <NormalBtn backgroundColor="#494BBE" color="#FFFFFF" {...props}>
      {props.children}
    </NormalBtn>
  );
};

export default PrimaryBtn;
