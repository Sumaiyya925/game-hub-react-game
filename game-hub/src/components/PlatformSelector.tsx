import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

let platforms = ["All", "PC", "Web"];

interface Props {
  onSelectPlatform: (platform: string) => void;
  selectedPlatform: string;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  return (
    <div>
      <Menu>
        <MenuButton
          marginLeft={"28px"}
          marginTop={"10px"}
          as={Button}
          rightIcon={<BsChevronDown />}
          fontSize={"14px"}
        >
          Platform : {selectedPlatform}
        </MenuButton>
        <MenuList>
          {platforms.map((platform, index) => (
            <MenuItem onClick={() => onSelectPlatform(platform)} key={index}>
              {platform}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
