import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <HStack padding="20px">
      <Image marginRight={3} src={logo} boxSize="60px"></Image>
      {children}
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
