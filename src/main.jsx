import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Initialize} from 'react-ipfs-components'

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />)

Initialize({
    verbose:true
});