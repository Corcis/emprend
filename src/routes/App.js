import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import ListaIdea from '../components/ideas/ListaIdea'
import RegisterIdea from '../components/ideas/RegisterIdea'

//Definimos las rutas de nuestro sistema y que componente consume cada una
const App = () => (
    <BrowserRouter>
        <Switch >
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/login" component = { Login } />   
            <Route exact path = "/register" component = { Register } />
            <Route exact path = "/ideasRegister" component = { RegisterIdea } />
            <Route exact path = "/ideasLista" component = { ListaIdea } />
        </Switch> 
    </BrowserRouter>
)

export default App;