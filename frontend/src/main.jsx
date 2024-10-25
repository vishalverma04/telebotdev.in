import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { Toaster } from 'react-hot-toast';
import { AuthProvider } from './components/contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <App />
    </AuthProvider>
    <Toaster/>
  </StrictMode>,
)
