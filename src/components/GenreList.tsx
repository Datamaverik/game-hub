import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageURL(data.image_background)}
            ></Image>
            <Text fontSize='lg'>{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
