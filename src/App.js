import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header'
import './App.css'

export class App extends Component {
    render() {
        return (
            <div className="main_container">
                <Header />
            </div>
        )
    }
}

export default App
