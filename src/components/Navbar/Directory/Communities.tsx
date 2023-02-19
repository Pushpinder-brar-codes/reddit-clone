import { Box, Flex, Text } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import React, { useState } from "react";
import CreateCommunityModel from "./CreateCommunityModel/CreateCommunityModel";
import { GrAdd } from "react-icons/gr";
import Icon from "@chakra-ui/icon";
import { useRecoilValue } from "recoil";
import { communityState } from "@/src/atoms/communityAtom";
import MenuListItem from "./MenuListItem";
import { FaReddit } from "react-icons/fa";
import useCommunityData from "@/src/hooks/useCommunityData";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);
  const { communityStateValue } = useCommunityData();

  return (
    <>
      <CreateCommunityModel open={open} handleClose={() => setOpen(false)} />
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          MODERATING
        </Text>
        {communityStateValue.mySnippets
          .filter((snippet) => snippet.isModerator)
          .map((snippet) => {
            return (
              <MenuListItem
                key={snippet.communityId}
                icon={FaReddit}
                displayText={`r/${snippet.communityId}`}
                link={`/r/${snippet.communityId}`}
                iconColor="blue.500"
                imageURL={snippet.imageURL}
              />
            );
          })}
      </Box>
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          MY COMMUNITIES
        </Text>
        <MenuItem
          width="100%"
          fontSize="10pt"
          _hover={{ bg: "gray.200" }}
          onClick={() => setOpen(true)}
        >
          <Flex align="center">
            <Icon fontSize={20} mr={2} as={GrAdd} />
            Create Community
          </Flex>
        </MenuItem>
        {communityStateValue.mySnippets.map((snippet) => {
          return (
            <MenuListItem
              key={snippet.communityId}
              icon={FaReddit}
              displayText={`r/${snippet.communityId}`}
              link={`/r/${snippet.communityId}`}
              iconColor="blue.500"
              imageURL={snippet.imageURL}
            />
          );
        })}
      </Box>
    </>
  );
};
export default Communities;
