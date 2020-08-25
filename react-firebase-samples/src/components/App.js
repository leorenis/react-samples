import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'

const App = () => (
  <Grid container direction='column'>
    <Header />
    <Grid item container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
            This is where the content will be.This is where the content will be.This is where the content will be.
            This is where the content will be.This is where the content will be.This is where the content will be.
            This is where the content will be.This is where the content will be.This is where the content will be.
            This is where the content will be.This is where the content will be.This is where the content will be.
            This is where the content will be.This is where the content will be.This is where the content will be.
            This is where the content will be.This is where the content will be.This is where the content will be.
            This is where the content will be.This is where the content will be.This is where the content will be.
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  </Grid>
)

export default App
