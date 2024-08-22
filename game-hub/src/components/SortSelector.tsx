import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

let sortOrders = ["Relevence", "Name", "ID"];

interface Props {
  selectedOrder: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({ selectedOrder, sortOrder }: Props) => {
  return (
    <Menu>
      <MenuButton
        marginX={3}
        marginTop={2.5}
        as={Button}
        rightIcon={<BsChevronDown />}
        fontSize={"14px"}
      >
        Order by : {sortOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder, index) => (
          <MenuItem onClick={() => selectedOrder(sortOrder)} key={index}>
            {sortOrder}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
