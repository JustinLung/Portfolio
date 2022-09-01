import { Heading, Stack, Flex, Link } from '@chakra-ui/react'
import { theme } from '../../../styles/style'
import BoxContainer from '../../BoxComponents/BoxContainer'
import links from '../../../data/links.json'

export default function Contact() {
  return (
    <Flex
      as='section'
      id='contact'
      maxW='80rem'
      p={{ base: 5, md: 10 }}
      h={{ base: '40rem', md: '30rem' }}
      mx='auto'
      justify='center'
      align='center'
      flexDir={{ base: 'column', md: 'row-reverse' }}
      gap={20}
    >
      <Stack alignSelf={{ base: 'flex-start', md: 'center' }}>
        <Heading as='h2' size={{ base: 'xl', md: '2xl' }}>
          Have an idea?
        </Heading>
        <Heading
          as='h3'
          size={{ base: 'lg', md: 'xl' }}
          color={theme.styles.colors.secondary}
        >
          I can help you bring it to life!
        </Heading>

        <Flex gap={{ base: 2, md: 4 }} flexWrap='wrap'>
          {links.map((link) => {
            return (
              <Link href={link.link} target='_blank' fontSize='2xl'>
                {link.title}
              </Link>
            )
          })}
        </Flex>
      </Stack>
      <Flex h='20rem'>
        <BoxContainer />
      </Flex>
    </Flex>
  )
}
