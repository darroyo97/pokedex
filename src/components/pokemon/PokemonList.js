import React, { Component } from 'react'
import CardList from './CardList'

class PokemonList extends Component {
    render() {
        return (
            <div className="row">
                <CardList />
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </div>
        )
    }
}

export default PokemonList
