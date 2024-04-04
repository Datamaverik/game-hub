import { Text } from "@chakra-ui/react";

interface Props {
  genre: string | undefined;
  platform: string | undefined;
}

const DynamicHeading = ({ genre, platform }: Props) => {
  if (!genre) genre = "";
  if (!platform) platform = "";
  return (
    <Text fontSize="6xl" as="b" paddingLeft={10}>
      {platform + " " + genre} Games
    </Text>
  );
};

export default DynamicHeading;
