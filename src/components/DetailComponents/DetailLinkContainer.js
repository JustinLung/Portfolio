import { Flex, Heading, Link } from '@chakra-ui/react'

export default function DetailLinkContainer({ liveLink, githubLink }) {
  return (
    <Flex as='div' flexDir='column' fontSize='lg' w='10rem'>
      <Heading as='h3' fontSize='xl'>
        Links
      </Heading>
      <Link href={liveLink} target='_blank'>
        Live Version
      </Link>
      <Link href={githubLink} target='_blank'>
        Github Repository
      </Link>
    </Flex>
  )
}
