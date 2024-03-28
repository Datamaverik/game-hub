import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  slectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, slectedGenre }: Props) => {
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
            <Box flexWrap="wrap">
              <Button
                onClick={() => onSelectGenre(data)}
                variant="link"
                fontSize={data.name === slectedGenre?.name ? "xl" : "lg"}
                textAlign="left"
                whiteSpace="normal"
                wordBreak="break-word"
                fontWeight={data.name === slectedGenre?.name ? "bold" : "none"}
              >
                {data.name}
              </Button>
            </Box>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
