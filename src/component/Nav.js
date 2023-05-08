import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar color='success' position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog Dashboard
          </Typography>
          <Button color="inherit" variant='outlined'>
            <Link to='/'>Home</Link>
            </Button>
          <Button color="inherit" variant='outlined'>
            <Link to='/add'>Add Blog</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Nav
