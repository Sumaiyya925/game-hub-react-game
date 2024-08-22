import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

//to prevent the form from being submitted to the server => event.preventDefault
//to get the access to the input field we use ref hook
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {
    if (ref.current) onSearch(ref.current.value);
  };

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          fontSize={"14px"}
          placeholder="Search Games..."
          variant="filled"
          onChange={handleInputChange}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
