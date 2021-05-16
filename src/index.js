import React from 'react'
import ReactDom from 'react-dom'
import App from './routes/App'
import './assets/styles/App.scss'
import bootstrap from 'bootstrap'

ReactDom.render( < App /> ,
    document.getElementById('app')
)