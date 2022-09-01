import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  IconButton,
  Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { theme } from '../../../styles/style'

export default function MobileMenu() {
  return (
    <Box as='div' display={{ base: 'block', md: 'none' }} fontSize='lg'>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant='outline'
          aria-label='Options'
        />
        <MenuList
          fontSize='md'
          bg={theme.styles.colors.secondary}
          color={theme.styles.colors.white}
        >
          <MenuItem _focus={{ bg: 'none' }}>
            <Link href='/'>Home</Link>
          </MenuItem>
          <MenuItem _focus={{ bg: 'none' }}>
            <Link href='/#work'>Work</Link>
          </MenuItem>
          <MenuItem _focus={{ bg: 'none' }}>
            <Link href='/#about'>About</Link>
          </MenuItem>
          <MenuItem _focus={{ bg: 'none' }}>
            <Link href='/#contact'>Contact</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
