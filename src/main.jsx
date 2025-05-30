import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './components/Auth/AuthContext.jsx'
import DataProvider from './components/Context/DataContext.jsx'
import ToastNotifProvider from './components/Context/ToastNotifContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastNotifProvider>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </ToastNotifProvider>
  </StrictMode>,
)
