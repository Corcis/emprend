import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/login/Login'

const App = () => (
    <BrowserRouter>
        <Switch >
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/login" component = { Login } />
        </Switch> 
    </BrowserRouter>
)

export default App;