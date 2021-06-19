import React from 'react'
import Header from '../Header/Header'
import Box from '@material-ui/core/Box'
import { Container } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <Box>
        <Header />
        <Container>
          {children}
        </Container>
      </Box>
  )
}

export default Layout