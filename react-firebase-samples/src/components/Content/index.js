import React from 'react'
import ContentCard from './ContentCard'
import { Grid } from '@material-ui/core'

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <ContentCard
          title={'Hamilton Beach FlexBrew'}
          subtitle={'89.99'}
          avatarSrc='https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png'
          imgSrc={'https://www.cdn-docs-cft.com/docs/img/gross/6669/scuderia-ferrari-cup-scudetto-black.jpg'}
          description='Loren ipsum dolor lorem dolor impsun dest resdipsum dolor lorem dolor impsun dest resdipsum dolor lorem dolor impsun dest resd' />
      </Grid>
    </Grid>
  )
}

export default Content
