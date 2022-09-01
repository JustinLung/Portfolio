import BoxContainer from '../components/BoxComponents/BoxContainer'
import NextLink from 'next/link'
import { Flex, Text, Heading, Button, Box } from '@chakra-ui/react'
import { theme } from '../styles/style'

export default function page404() {
  return (
    <Flex
      as='section'
      flexDir='column'
      justify='center'
      align='center'
      h={{ md: '40rem' }}
      px={{ base: 5, md: 10 }}
    >
      <Box h='20rem' mt={10}>
        <BoxContainer />
      </Box>
      <Heading as='h2'>Page Not Found</Heading>
      <Text as='p' align='center' maxW='27rem'>
        I'm sorry, the page you are looking for could not be found. Please go
        back to the homepage
      </Text>
      <NextLink href='/'>
        <Button
          bg={theme.styles.colors.secondary}
          color={theme.styles.colors.white}
          py={4}
          mt={2}
          fontSize='md'
          _hover={{ opacity: 0.8 }}
        >
          Go Home
        </Button>
      </NextLink>
    </Flex>
  )
}
