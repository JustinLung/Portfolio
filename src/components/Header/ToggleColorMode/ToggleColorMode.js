import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { theme } from '../../../styles/style'

export default function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Button
        onClick={() => toggleColorMode()}
        ml={{ base: 'auto' }}
        mr={{ base: 2 }}
        p={2}
        variant='outline'
      >
        {colorMode === 'dark' ? (
          <SunIcon />
        ) : (
          <MoonIcon color={theme.styles.colors.secondaryDarken} />
        )}
      </Button>
    </>
  )
}
