import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "../src/hooks/useGenres";
import PlatformSelectMenu from "./components/PlatformSelectMenu";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //wider than 1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            slectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelectMenu
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
