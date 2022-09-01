import { Flex, Img } from '@chakra-ui/react'
import { theme } from '../../styles/style'

export default function DetailDemoContainer({ projectDemo }) {
  return (
    <Flex
      bg={theme.styles.colors.secondary}
      w={{ base: '90%', md: '85%' }}
      borderRadius={5}
      p={{ base: 5, md: 10 }}
      mx='auto'
      justify='center'
    >
      <Img src={projectDemo} borderRadius={5} />
    </Flex>
  )
}
