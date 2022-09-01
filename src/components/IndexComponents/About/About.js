import { Flex } from '@chakra-ui/react'
import AboutText from './AboutText'
import AboutHero from './AboutHero'
import { theme } from '../../../styles/style'

export default function About() {
  return (
    <Flex
      as='section'
      p={{ base: 5, md: 10 }}
      mt={4}
      bg={theme.styles.colors.secondary}
      flexDir={{ base: 'column', md: 'row' }}
      justify={{ base: 'flex-start', md: 'center' }}
      h={{ md: '40rem' }}
      align={{ md: 'center' }}
      gap={4}
      id='about'
    >
      <AboutHero></AboutHero>
      <AboutText />
    </Flex>
  )
}
