import { AppBar, Avatar, Box, Button, IconButton, Toolbar } from '@material-ui/core'
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons'
import React from 'react'
import useAuth from '../../hooks/useAuth'

const Header = () => {
  const { session } = useAuth()
  return (
    <AppBar
      position='relative'
      color='inherit'
    >
      <Toolbar>
        <IconButton position="left">
          <MenuIcon />
        </IconButton>
        <Box
          flexGrow={1}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Button>Home</Button>
          <Button>Discover</Button>
          <Button>Profile</Button>
        </Box>
        {!session ? (
          <IconButton>
            <AccountCircle />
          </IconButton>
        ) : (
          <IconButton>
            <Avatar />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {

}

export default Header