import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import './App.css'
import Dashboard from './components/layout/Dashboard';

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
                    </Switch>
                </div>
            </div>
            </div>
           </BrowserRouter>
        )
    }
}

export default App
