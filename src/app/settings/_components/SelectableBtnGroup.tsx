import { Box, Flex, Text } from "@chakra-ui/react";
import SelectableBtn from "@/src/clients/components/common/Buttons/SelectableBtn";

interface SelectableBtnGroupProps {
  title: string;
  options: number[];
  onSelect: (option: number) => void;
  selected: number;
}

const SelectableBtnGroup = (props: SelectableBtnGroupProps) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Text
        fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
        fontWeight="bold"
      >
        {props.title}
      </Text>
      <Box w={{ base: "3rem", md: "4rem", lg: "5rem" }} />
      <Flex gap={{ base: "2rem", md: "2.5rem", lg: "3rem" }}>
        <SelectableBtn
          isSelected={props.selected === props.options[0]}
          fontWeight="bold"
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
          w={{ base: "8rem", md: "10rem", lg: "12rem" }}
          onClick={() => props.onSelect(props.options[0])}
        >
          {props.options[0]}개
        </SelectableBtn>
        <SelectableBtn
          isSelected={props.selected === props.options[1]}
          fontWeight="bold"
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
          w={{ base: "8rem", md: "10rem", lg: "12rem" }}
          onClick={() => props.onSelect(props.options[1])}
        >
          {props.options[1]}개
        </SelectableBtn>
        <SelectableBtn
          isSelected={props.selected === props.options[2]}
          fontWeight="bold"
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
          w={{ base: "8rem", md: "10rem", lg: "12rem" }}
          onClick={() => props.onSelect(props.options[2])}
        >
          {props.options[2]}개
        </SelectableBtn>
      </Flex>
    </Flex>
  );
};

export default SelectableBtnGroup;
