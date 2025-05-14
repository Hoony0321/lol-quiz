import { ButtonProps } from "@chakra-ui/react";
import NormalBtn from "./NormalBtn";

interface SelectableBtnProps extends ButtonProps {
  isSelected?: boolean;
}

const SelectableBtn = (props: SelectableBtnProps) => {
  return (
    <NormalBtn
      {...props}
      backgroundColor={props.isSelected ? "#494BBE" : "white"}
      color={props.isSelected ? "white" : "black"}
      borderRadius={{ base: "10px", md: "15px", lg: "20px" }}
    >
      {props.children}
    </NormalBtn>
  );
};

export default SelectableBtn;
