import React, { Component } from 'react'
import axios from 'axios';

class IndCard extends Component {

    state = {
        name: '',
        pokemonIndex: '',
        imageURL:''
    }

    async componentDidMount() {
        const {pokemonIndex} = this.props.match.params;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

         const pokemonRes = await axios.get(pokemonUrl);
         const name = pokemonRes.data.name;
         this.setState({name})
    }

  render() {
    return (
      <div class="card_container">
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default IndCard
