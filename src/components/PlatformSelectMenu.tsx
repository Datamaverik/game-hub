import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  SkeletonText,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelectMenu = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        {selectedPlatform?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {isLoading && (
          <SkeletonText noOfLines={14} skeletonHeight={8}></SkeletonText>
        )}
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelectMenu;
