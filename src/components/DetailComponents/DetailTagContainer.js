import { Flex } from '@chakra-ui/react'
import { children } from 'react'

export default function DetailTagContainer({ children }) {
  return (
    <Flex maxW='80rem' mx='auto' p={{ base: 5, md: 10 }} justify='center'>
      <Flex as='div' gap={3} align='center' flexWrap='wrap'>
        {children}
      </Flex>
    </Flex>
  )
}
