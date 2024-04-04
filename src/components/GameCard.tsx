import { Games } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  const source = getCroppedImageURL(game.background_image);

  return (
    <Card>
      {source ? (
        <Image src={source}></Image>
      ) : (
        <Skeleton height="200px"></Skeleton>
      )}
      <CardBody>
        <HStack justifyContent="space-between" spacing={5}>
          <PlatformIconList
            platfroms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
