import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { User } from "@firebase/auth";
import React from "react";

interface Props {
  user?: User | null;
}

const SearchInput = ({ user }: Props) => {
  return (
    <Flex height="100%" flexGrow="1" maxW={!user ? "500px" : "initial"}>
      <InputGroup height="100%">
        <InputLeftElement
          height="100%"
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          height="100%"
          placeholder="Search Reddit"
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
