import React from "react";
import { Games } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" spacing={5}>
          <PlatformIconList
            platfroms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
