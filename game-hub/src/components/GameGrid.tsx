import { Heading, SimpleGrid } from "@chakra-ui/react";
import gamesData from "../constants/gamesData";
import GameCards from "./GameCards";

// interface Game {
//   id: number;
//   title: string;
//   thumbnail: string;
//   short_description: string;
//   game_url: string;
//   genre: string;
//   platform: string;
//   publisher: string;
//   developer: string;
//   release_date: string;
//   freetogame_profile_url: string;
// }

interface Props {
  genreFilter: string;
  platformFilter: string;
  sort: string;
  search: string;
}

const GameGrid = ({ genreFilter, platformFilter, sort, search }: Props) => {
  let filterGames = gamesData.filter(
    (game) =>
      (genreFilter === "All Games" || game.genre === genreFilter) &&
      (platformFilter === "All" || game.platform === platformFilter) &&
      game.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "ID") filterGames.sort((a, b) => b.id - a.id);
  else if (sort === "Name")
    filterGames.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        padding={7}
        spacing={3}
      >
        {filterGames.length > 0 ? (
          filterGames.map((game) => <GameCards key={game.id} game={game} />)
        ) : (
          <Heading margin={5} whiteSpace={"nowrap"}>
            Oops!... Can't find the games for Current Settings
          </Heading>
        )}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
