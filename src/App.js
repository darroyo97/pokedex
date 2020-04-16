import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import './App.css'
import Dashboard from './components/layout/Dashboard';
import IndCard from './components/pokemon/IndCard'

export class App extends Component {
    render() {
        return (
           <BrowserRouter>
            <div className="App">
            <div className="main_container">
                <Header />
                <div className="inner_container">
                    <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/pokemon/:pokemonIndex" component={IndCard} />
                    </Switch>
                </div>
            </div>
            </div>
           </BrowserRouter>
        )
    }
}

export default App
