import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { DEV_MODE } from './shared/consts.js'
import SignIn from './components/signin/SignIn.js'
import './index.css'

// Mount component function
const mount = (element) => {
  ReactDOM.createRoot(element).render(
    <StrictMode>
      <SignIn />
    </StrictMode>
  )
}

// Performs only development mode
if (process.env.NODE_ENV === DEV_MODE) {
  const root = document.getElementById('sandbox-auth-root')
  mount(root)
}

export { mount }