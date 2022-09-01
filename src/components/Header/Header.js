import { Flex, Heading, Stack } from '@chakra-ui/react'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu/MobileMenu'
import ToggleColorMode from './ToggleColorMode/ToggleColorMode'

export default function Header() {

  return (
    <Flex
      as='header'
      align='center'
      p={{ base: 5, md: 10 }}
      maxW='80rem'
      position='fixed'
      w='100%'
      left='50%'
      transform='translateX(-50%)'
      zIndex='100'
    >
      <Heading as='h1' size={{ base: 'lg', md: 'xl' }}>
        Portfolio
      </Heading>
      <Stack
        as='nav'
        direction={{ md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        w={{ md: 'auto' }}
        gap={10}
        alignItems='center'
        justifyContent='end'
        flexGrow={1}
        fontSize='xl'
        mr={10}
      >
        <Navigation />
      </Stack>
      <ToggleColorMode />
      <MobileMenu />
    </Flex>
  )
}
