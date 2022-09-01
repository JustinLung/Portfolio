import { Flex, Link } from '@chakra-ui/react'

export default function DetailPagination({ linkNextProject }) {
  return (
    <Flex
      justify='space-between'
      maxW='80rem'
      mx='auto'
      p={{ base: 5, md: 10 }}
    >
      <Link href='/'>Return to Home</Link>
      <Link href={linkNextProject}>Next Project</Link>
    </Flex>
  )
}
