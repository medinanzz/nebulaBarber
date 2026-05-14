import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteApp } from './routes'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <RouteApp />
  </HashRouter>,
)
