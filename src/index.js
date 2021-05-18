import React from 'react'
import ReactDom from 'react-dom'
import App from './routes/App'
import './assets/styles/App.scss'
import bootstrap from 'bootstrap'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'

const initialState = {
    user: {
        name: localStorage.name,
        email: localStorage.email,
        token: localStorage.token
    },
    ideas: []
}

const store = createStore(reducer, initialState)

ReactDom.render( 
    <Provider store={store}>
        < App /> 
    </Provider>,
    document.getElementById('app')
)