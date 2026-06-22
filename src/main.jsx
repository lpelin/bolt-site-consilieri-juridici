import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Global image handler for CORS bypass
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Apply global image attributes after mount
setTimeout(() => {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('crossorigin', 'anonymous');
    img.setAttribute('referrerpolicy', 'no-referrer');
  });
}, 1000);
