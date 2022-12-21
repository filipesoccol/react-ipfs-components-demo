import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {IPFSFetcher} from 'react-ipfs-components'

IPFSFetcher.Initialize();

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
