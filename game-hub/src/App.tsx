import { Box, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All Games");
  const [selectedPlatfrom, setSelectedPlatform] = useState("All");
  const [sortOrder, setSortOrder] = useState("Relevence");
  const [searchText, setSearchText] = useState("");

  let topHeading =
    selectedGenre !== "All Games"
      ? selectedPlatfrom + " " + selectedGenre + " Games"
      : "All Games ";
  return (
    <>
      <Box position="fixed" top="0" width="100%" zIndex="1000">
        <NavBar onSearch={(searchText) => setSearchText(searchText)}></NavBar>
      </Box>
      <Grid
        marginTop="90px"
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`, //1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "150px 1fr",
        }}
      >
        <Show above="lg">
          <Box
            className="genre-list"
            position="fixed"
            top="80px"
            left="0"
            width="fit-content"
            height="calc(100vh - 80px)"
            overflowY="auto"
            zIndex="900"
            paddingX={5}
          >
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </Box>
        </Show>

        <GridItem area="main">
          <div style={{ marginTop: -9 }}>
            <Heading fontSize={"3xl"} paddingX={7}>
              {topHeading}
            </Heading>
          </div>
          <HStack>
            <PlatformSelector
              selectedPlatform={selectedPlatfrom}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector
              sortOrder={sortOrder}
              selectedOrder={(order) => setSortOrder(order)}
            />
          </HStack>

          <GameGrid
            platformFilter={selectedPlatfrom}
            genreFilter={selectedGenre}
            sort={sortOrder}
            search={searchText}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
