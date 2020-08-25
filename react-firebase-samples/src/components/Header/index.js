import React from 'react'

import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <Typography>
        this is the header
      </Typography>
    </Toolbar>
  </AppBar>
)
export default Header
