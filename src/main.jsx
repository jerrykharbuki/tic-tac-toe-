import { StrictMode } from 'react' // Helps detect potential problems in React during development.
import { createRoot } from 'react-dom/client' // Connects React to the browser.
import './index.css' // Global styles
import App from './App.jsx' // Imports the main component
import './App.css' // Imports App component styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)