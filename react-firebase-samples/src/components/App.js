import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'
import Content from './Content'

const App = () => (
  <Grid container direction='column'>
    <Header />
    <Grid item container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Content />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  </Grid>
)

export default App
