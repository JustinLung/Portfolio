import { Flex } from '@chakra-ui/react'
import { children } from 'react'
export default function DetailLinksAndDescriptionContainer({ children }) {
  return (
    <Flex
      as='div'
      flexDir='column'
      p={{ base: 5, md: 10 }}
      gap={10}
      maxW='80rem'
      mx='auto'
    >
      {children}
    </Flex>
  )
}
