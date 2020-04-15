import React, { Component } from 'react'
import CardList from './CardList'
import axios from 'axios'

class PokemonList extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/generation/1/',
        pokemon: null
    }
    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['pokemon_species'] })
    }
    render() {
        return (
            <div>
                {this.state.pokemon ? (
                    <div className="row">
                        {this.state.pokemon.map(pokemon => (
                            <CardList
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}
                    </div>
                ) : (
                        <h1>Welcome Trainer !</h1>
                    )}
            </div>
        )
    }
}

export default PokemonList
