import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
// this is just for testing our endpoint before our components are even built
// we do it here to avoid any re-renders/re-pinging the API
// import searchImages from './api'
// searchImages()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
