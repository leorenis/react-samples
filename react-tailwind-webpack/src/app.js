import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { DEV_MODE } from './shared/consts.js'
import './index.css'
import Responsive from './components/breakpoints/Responsive.js'

// Mount component function
const mount = (element) => {
  ReactDOM.createRoot(element).render(
    <StrictMode>
      <Responsive />
    </StrictMode>
  )
}

// Performs only development mode
if (process.env.NODE_ENV === DEV_MODE) {
  const root = document.getElementById('rootsandbox')
  mount(root)
}

export { mount }