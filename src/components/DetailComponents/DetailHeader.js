import { Flex, Box, Heading, Img } from '@chakra-ui/react'
import { theme } from '../../styles/style'

export default function DetailHeader({ projectTitle, projectMockup }) {
  return (
    <Flex
      as='section'
      w='100%'
      h={{ base: '25rem', md: '40rem' }}
      flexDir='column'
      justify='flex-end'
      align='center'
      position='relative'
      overflow='hidden'
    >
      <Box
        position='absolute'
        top='0'
        w='100%'
        h='90%'
        bg={theme.styles.colors.secondary}
        transform='scaleX(1.3)'
        borderBottomLeftRadius='50%'
        borderBottomRightRadius='50%'
        zIndex={-1}
      />
      <Heading
        as='h2'
        pb={{ base: 5, md: 10 }}
        color={theme.styles.colors.white}
      >
        {projectTitle}
      </Heading>
      <Img src={projectMockup} w={{ base: '22rem', md: '40rem' }} />
    </Flex>
  )
}
