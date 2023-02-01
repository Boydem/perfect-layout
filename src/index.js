// import { Router } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './root-cmp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <App />
    </Router>
)
