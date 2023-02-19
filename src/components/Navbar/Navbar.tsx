import { auth } from "@/src/firebase/clientApp";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      justifyContent="space-between"
      gap="10px"
      backgroundColor="white"
      padding="6px 12px"
      height="50px"
    >
      <Flex alignItems="center">
        <Image
          src="/images/redditFace.svg"
          height="100%"
          // maxWidth="40px"
        />
        <Image
          src="/images/redditText.svg"
          height="100%"
          // maxWidth="42px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
