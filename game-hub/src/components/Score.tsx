import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  let color =
    score >= 500
      ? "green"
      : score >= 400
      ? "blue"
      : score >= 300
      ? "yellow"
      : "red";
  return (
    <Badge
      colorScheme={color}
      fontSize="11px"
      margin={1}
      borderRadius="8px"
      paddingY={0.5}
      paddingX={2}
    >
      {score}
    </Badge>
  );
};

export default Score;
