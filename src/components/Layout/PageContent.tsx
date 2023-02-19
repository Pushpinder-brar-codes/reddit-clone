import { Flex } from "@chakra-ui/layout";
import React from "react";

type PageContentProps = {
  children: any;
  maxWidth?: String;
};

const PageContent: React.FC<PageContentProps> = ({ children, maxWidth }) => {
  return (
    <Flex justifyContent="center" p="16px 0">
      <Flex width="95%" maxWidth="860px" justify="center" gap="20px">
        <Flex direction="column" width={{ base: "100%", md: "65%" }}>
          {children[0]}
        </Flex>
        <Flex
          direction="column"
          width="35%"
          display={{ base: "none", md: "flex" }}
        >
          {children[1]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
