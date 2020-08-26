import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Grid } from '@material-ui/core'

import Header from './Header'
import Dashboard from './Dashboard'
import SignIn from './SignIn'
import store from '../store/configureStore'
import history from '../history'
import PageNotFound from './PageNotFound'

const App = () => (
  <Provider store={store}>
    <Grid container direction='column'>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path={'/sigin'} component={SignIn} />
          <Route exact path={'/'} component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Grid>
  </Provider>
)

export default App
