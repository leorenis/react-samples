import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import styles from './styles'

const useStyles = makeStyles(styles)

const SignIn = () => {
  const classes = useStyles()
  return (
    <main className={classes.main}>
      <CssBaseline />
      <h1>Login</h1>
      <h1>Login</h1>
      <h1>Login</h1>
    </main>
  )
}
export default SignIn
