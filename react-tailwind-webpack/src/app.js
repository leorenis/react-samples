import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { DEV_MODE } from './shared/consts.js'
import Boxes from './components/boxes/Boxes.js'
import './index.css'

// Mount component function
const mount = (element) => {
  ReactDOM.createRoot(element).render(
    <StrictMode>
      <Boxes />
    </StrictMode>
  )
}

// Performs only development mode
if (process.env.NODE_ENV === DEV_MODE) {
  const root = document.getElementById('rootsandbox')
  mount(root)
}

export { mount }