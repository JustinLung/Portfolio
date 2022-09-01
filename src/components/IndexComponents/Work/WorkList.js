import {
  Img,
  Grid,
  Stack,
  Box,
  Button,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react'
import projects from '../../../data/projects.json'
import { theme } from '../../../styles/style'
import { useRouter } from 'next/router'

export default function WorkList() {
  const router = useRouter()
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={5}
    >
      {projects.map((project) => {
        return (
          <Stack w='100%' as='section' key={project.id}>
            <Box
              bg={theme.styles.colors.secondary}
              borderRadius='.5rem'
              p={10}
              h='100%'
            >
              <Img src={project.mockup} alt={project.project_title} />
            </Box>
            <Heading as='h3' size='md' pt={2}>
              {project.project_title}
            </Heading>
            <Text as='p' fontSize='large'>
              {project.small_description}
            </Text>
            <Flex gap={2}>
              <Button
                w='100%'
                onClick={() => router.push(`/project/${project.id}`)}
              >
                See More
              </Button>
              <Button
                w='100%'
                onClick={() => window.open(project.github_repository)}
              >
                Github
              </Button>
            </Flex>
          </Stack>
        )
      })}
    </Grid>
  )
}
