import React, { Component } from 'react';
// import styled from 'styled-components';

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed top">
                    <button class="blue-button button5">Pokedex</button>
                    <button class="green-button button5">o</button>
                    <button class="red-button button5">o</button>
                    <button class="yellow-button button5">o</button>
                </nav>
            </div>
        )
    }
}

export default Header
