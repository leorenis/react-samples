import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { DEV_MODE } from './shared/consts.js'
import './app.css'

// Mount component function
const mount = (element) => {
  ReactDOM.createRoot(element).render(
    <StrictMode>
      <div>
        Login
      </div>
    </StrictMode>
  )
}

// Performs only development mode
if (process.env.NODE_ENV === DEV_MODE) {
  const root = document.getElementById('root')
  mount(root)
}

export { mount }