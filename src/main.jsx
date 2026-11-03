import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import ThemeRoot from './theme/ThemeRoot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeRoot>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeRoot>
  </StrictMode>,
)
