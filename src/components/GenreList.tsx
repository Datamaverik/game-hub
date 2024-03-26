import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading)
    return <SkeletonText noOfLines={19} spacing="6" skeletonHeight="4" />;

  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageURL(data.image_background)}
            ></Image>
            <Button
              onClick={() => onSelectGenre(data)}
              variant="link"
              fontSize="lg"
            >
              {data.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
