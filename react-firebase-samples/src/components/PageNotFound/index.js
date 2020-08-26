import React from 'react'
import { Typography, Grid } from '@material-ui/core'

const PageNotFound = () => (
  <Grid item container>
    <Grid item xs={false} sm={2} />
    <Grid item xs={12} sm={8}>
      <Typography variant={'h5'}>
      404 Page not found
      </Typography>
    </Grid>
    <Grid item xs={false} sm={2} />
  </Grid>

)
export default PageNotFound
