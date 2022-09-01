import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import { theme } from "../../../styles/style";
import WorkList from "../Work/WorkList";

export default function Work() {
  return (
    <Stack
      as="section"
      id="work"
      my={10}
      maxW="80rem"
      px={{ base: 5, md: 10 }}
      mx="auto"
    >
      <Heading
        as="h2"
        size="lg"
        textAlign={{ base: "center", md: "left" }}
        mb={2}
      >
        Latest Projects
      </Heading>
      <WorkList />
      <Text
        as="p"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        textAlign="center"
        py={{ base: 5, md: 10 }}
      >
        And many more projects can be found on my{" "}
        <Link
          href="https://github.com/JustinLung"
          target="_blank"
          color={theme.styles.colors.secondary}
        >
          Github!
        </Link>
      </Text>
    </Stack>
  );
}
