import { Text, Flex, Heading, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { theme } from '../../../styles/style'
import BoxContainer from '../../BoxComponents/BoxContainer'

export default function Hero() {
  return (
    <>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        px={{ base: 5, md: 10 }}
        pt={20}
        as='section'
        align='center'
        justify='center'
        maxW='60rem'
        h={{ md: '30rem' }}
        mx={{ md: 'auto' }}
        gap={{ base: 4, md: 20 }}
      >
        <Flex flexDir='column' mt={{ base: 10 }}>
          <Heading as='h2' size={{ base: '2xl', md: '2xl' }} maxW='30rem'>
            Creative Designer & Developer.
          </Heading>
          <Text
            as='p'
            my={5}
            fontSize={{ base: 'large', md: '2xl' }}
            maxW='30rem'
          >
            👋 Hi, i’m Justin Lung. A passionate Front End Developer based in
            the Netherlands.
          </Text>
          <Flex gap={3}>
            <NextLink href='#work'>
              <Button w='100%' py={6} fontSize='lg'>
                See my works
              </Button>
            </NextLink>
            <NextLink href='#contact'>
              <Button
                bg={theme.styles.colors.secondary}
                color={theme.styles.colors.white}
                w='100%'
                py={6}
                fontSize='lg'
                _hover={{ opacity: 0.8 }}
              >
                Message me
              </Button>
            </NextLink>
          </Flex>
        </Flex>
        <Flex h={{ base: '15rem', md: '20rem' }}>
          <BoxContainer />
        </Flex>
      </Flex>
    </>
  )
}
