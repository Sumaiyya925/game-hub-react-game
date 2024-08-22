import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";
import Score from "./Score";
import best from "../assets/best.webp";
import meh from "../assets/meh.webp";
import ok from "../assets/ok.webp";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

interface Props {
  game: Game;
}

// interface Props {
//   game: {
//     id: number;
//     title: string;
//     thumbnail: string;
//     short_description: string;
//     game_url: string;
//     genre: string;
//     platform: string;
//     publisher: string;
//     developer: string;
//     release_date: string;
//     freetogame_profile_url: string;
//   };
// }

const GameCards = ({ game }: Props) => {
  const iconmap: { [key: string]: IconType } = {
    PC: FaWindows,
    Web: BsGlobe,
  };

  return (
    <Card
      marginBottom={3}
      borderRadius={10}
      overflow={"hidden"}
      style={{
        cursor: "pointer",
        transform: "scale(1)",
        transition: "transform 0.3s ease",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.015)"; // scaling up on hover
        e.currentTarget.style.boxShadow = "0 0 7px 1px rgba(255, 0, 255)"; // more prominent shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // scaling back to original on mouse leave
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // default shadow
      }}
    >
      <Image src={game.thumbnail} />
      <CardBody marginBottom="-6px">
        <Heading fontSize="14px">{game.title}</Heading>
        <HStack marginY="5px" justifyContent={"space-between"}>
          <HStack>
            {game.platform.split(",").map((icon) => (
              <Icon
                key={game.id}
                as={iconmap[icon]}
                color="gray.400"
                paddingY="1px"
              />
            ))}
          </HStack>
          <HStack>
            {game.id <= 200 ? (
              <Image boxSize={"18px"} src={meh}></Image>
            ) : game.id > 200 && game.id <= 400 ? (
              <Image boxSize={"18px"} src={ok}></Image>
            ) : (
              <Image boxSize={"18px"} src={best}></Image>
            )}

            <Score score={game.id}></Score>
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
