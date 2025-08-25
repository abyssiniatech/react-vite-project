import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
     name ="surafel mengist"
     age={26}
     id={123}
     isLogin={true}
     />
  </StrictMode>,
)
