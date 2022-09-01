import { Heading, Text, Flex, Button, Link } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { theme } from '../../../styles/style'

export default function AboutText() {
  return (
    <Flex flexDir='column' justify='center' color={theme.styles.colors.white}>
      <Heading as='h2' fontSize={{ base: '2xl', md: '3xl' }}>
        About
      </Heading>
      <Text as='p' fontSize='lg' mb={5} maxW={{ base: '100%', md: '30rem' }}>
        My name is Justin Lung I am 21 years old, born and raised in a small
        country called The Netherlands. Currently studying at Amsterdam
        University of Applied Sciences.
      </Text>
      <Text as='p' fontSize='lg' maxW={{ base: '100%', md: '30rem' }}>
        I started as a Front End Developer in 2018. Since then I have been
        dedicating my life to build beautiful digital products made with React
        and Svelte (also made some projects with Vue.js & Nuxt.js 🎉). I’m never
        done with learning new things and hope to learn more along the road.
      </Text>
      <Link
        href='docs/cv.pdf'
        download='cv'
        fontSize='xl'
        mt={3}
        py={2}
        textAlign='center'
        borderRadius='.5rem'
        w={{ md: '50%' }}
        bg={theme.styles.colors.black}
        color={theme.styles.colors.white}
        _hover={{
          bg: theme.styles.colors.white,
          color: theme.styles.colors.black,
        }}
      >
        Resume
        <DownloadIcon ml={2} />
      </Link>
    </Flex>
  )
}
