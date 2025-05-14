import PrimaryButton from "@/src/clients/components/common/Buttons/PrimaryBtn";

const AnswerBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <PrimaryButton
      width={{ base: "20rem", md: "30rem", lg: "40rem" }}
      height={{ base: "4rem", md: "5rem", lg: "6rem" }}
      fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
      onClick={onClick}
    >
      정답 외치기
    </PrimaryButton>
  );
};

export default AnswerBtn;
