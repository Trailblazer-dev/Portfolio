import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Analytics from './components/Analytics.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Analytics measurementId="G-XXXXXXXXXX" /> {/* Replace with your Google Analytics ID */}
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
