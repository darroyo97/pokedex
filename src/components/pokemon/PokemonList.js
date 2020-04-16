import React, { Component } from 'react'
import CardList from './CardList'
import axios from 'axios'
import { connect } from 'react-redux'
import load from '../../actions/load'

class PokemonList extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/generation/1/',
        pokemon: null
    }
    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['pokemon_species'] }, () => {
            //dispatch our action
            //pass the current state to the dispatch function
            // this.state.pokemon
            this.props.load(this.state.pokemon)
        })
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
let mapStateToProps = (state) => {
    return {
        data: state.pokemon //global state
    }
}
//this.props.load(this.state.pokemon)
let mapDispatchToProps = (dispatch) => {
    return {
        load: (data) => dispatch(load(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
