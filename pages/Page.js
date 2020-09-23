import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { head } from 'presta/head'

import { Nav } from '@/components/Nav'

export function Page ({ pathname }) {
  head({ title: pathname })

  return (
    <>
      <Nav activePath={pathname} />

      <Box as='h1' mt={3}>
        This is server-rendered. You're on {pathname}
      </Box>
    </>
  )
}
