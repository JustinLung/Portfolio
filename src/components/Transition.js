import { motion, AnimatePresence } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
}

export default function Transition({ children }) {
  const { asPath } = useRouter()

  return (
    <Box as='div' overflow='hidden'>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Box
          as={motion.div}
          key={asPath}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
        >
          {children}
        </Box>
      </AnimatePresence>
    </Box>
  )
}
