import { Avatar, Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RoadmapItem from "./Features/Roadmap/RoadmapItem";

const IndividualFeed = ({ index, ...props }) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const roadmap = JSON.parse(props.feedDetails.data);

  /**
   *
   * Author: Janvi Patel, Ferin Patel
   * Banner ID: B00896196, B00891975
   * Email: jn398689@dal.ca, ferin@dal.ca
   */
  return (
    <Flex my="5" justify="center">
      <Flex
        w="100%"
        h="100%"
        maxW="800px"
        flexDirection="column"
        p="5"
        shadow="2xl"
        borderRadius="2xl"
        align="center"
        bg={colorMode === "dark" ? "#2d3436" : "white"}
        className="feedItem"
        cursor="pointer"
      >
        <Flex w="100%" align="center" my="5">
          <Link to={`/profile/${props.userDetails.id}`}>
            <Avatar
              src={props.userDetails.profileUrl}
              name={`${props.userDetails.firstName} ${props.userDetails.lastName}`}
              size={["md", "md", "lg"]}
            />
          </Link>
          <Text m="3">{props.feedDetails.title}</Text>
        </Flex>

        <Box
          onClick={() => navigate(`/feed/${props.feedDetails.id}`)}
          w={["80%", "60%", "50%"]}
          bg={"teal.50"}
          borderRadius={"5"}
          maxHeight={["50vh", "60vh", "70vh"]}
          overflow={"auto"}
          css={{
            ":focus": {
              background: "#FFFFFF",
            },
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "gray",
              borderRadius: "24px",
            },
          }}
        >
          <Flex
            bg={`${roadmap.theme.bgColor}`}
            direction={"column"}
            borderColor="gray.400"
            width="100%"
            bgGradient={`url('/${roadmap.theme.bgImage}')`}
            backgroundRepeat="repeat-y"
            backgroundPosition="50% 0%"
            justifyItems={"center"}
            alignItems={"center"}
          >
            {roadmap.data.map((item, i) =>
              (i + 1) % 2 === 0 ? (
                <RoadmapItem key={i + 1} align="right" text={false}>
                  {item.content}
                </RoadmapItem>
              ) : (
                <RoadmapItem key={i + 1} align="left" text={false}>
                  {item.content}
                </RoadmapItem>
              )
            )}
          </Flex>
        </Box>

        <Flex w="100%" h="5vh" justify="space-evenly" align="center" p="3">
          <Box cursor="pointer">
            {props.feedDetails.isLiked ? (
              <Flex>
                <AiFillHeart
                  color="red"
                  size={25}
                  onClick={() => {
                    props.handleLikeClick(index, props.feedDetails.id, false);
                  }}
                />

                <p>{props.feedDetails.likes + 1}</p>
              </Flex>
            ) : (
              <Flex>
                <AiOutlineHeart
                  color="red"
                  size={25}
                  onClick={() => {
                    props.handleLikeClick(index, props.feedDetails.id, true);
                  }}
                />
                <p>{props.feedDetails.likes}</p>
              </Flex>
            )}
          </Box>
          <Box cursor="pointer">
            <FaRegComment
              size={25}
              onClick={() => navigate(`/feed/${props.feedDetails.id}`)}
            />
          </Box>{" "}
          <Box cursor="pointer">
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => toast("Share link copied to clipboard")}
            >
              <AiOutlineShareAlt size={25} color="#0AF" />
            </CopyToClipboard>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IndividualFeed;
