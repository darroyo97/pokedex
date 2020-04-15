import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header'
import './App.css'
import Dashboard from './components/layout/Dashboard';

export class App extends Component {
    render() {
        return (
            <div className="App">
            <div className="main_container">
                <Header />
                <div className="inner_container">
                    <Dashboard />
                </div>
            </div>
            </div>
        )
    }
}

export default App
