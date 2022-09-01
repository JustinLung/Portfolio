import { Flex, Text, Link } from '@chakra-ui/react'
import links from '../../data/links.json'

export default function Footer() {
  return (
    <Flex
      as='footer'
      p={{ base: 5, md: 10 }}
      py={10}
      opacity={0.4}
      fontSize='md'
      maxW='80rem'
      mx='auto'
      justify='space-between'
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Text as='p'>
        &copy; {new Date().getFullYear()} Justin Lung &middot; All Rights
        Reserved
      </Text>
      <Flex gap={2}>
        {links.map((link) => {
          return (
            <Link href={link.link} target='_blank'>
              {link.title} &middot;
            </Link>
          )
        })}
      </Flex>
    </Flex>
  )
}
