import { Flex, Img } from "@chakra-ui/react";
import { theme } from "../../../styles/style";

export default function AboutHero() {
  return (
    <Flex
      justify="center"
      align="center"
    >
      <Img src="images/memoji.png" w={{ base: "70%", md: "100%" }}></Img>
    </Flex>
  );
}
