import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftAddon children="+234" />
        <Input type="tel" placeholder="phone number" />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
