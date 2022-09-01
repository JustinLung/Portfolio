import { Flex, Heading, Text } from '@chakra-ui/react'

export default function DetailDescriptionContainer({ description }) {
  return (
    <Flex as='div' flexDir='column'>
      <Heading as='h3' fontSize='xl'>
        Description
      </Heading>
      <Text fontSize='lg' maxW='45rem'>
        {description}
      </Text>
    </Flex>
  )
}
