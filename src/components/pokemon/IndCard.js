import React, { Component } from 'react'
import axios from 'axios';

//color pills by ChrisStayte 
const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};
class IndCard extends Component {

    state = {
        name: '',
        pokemonIndex: '',
        imageURL:'',
        types: [],
        height: '',
        weight: '',
        abilities: ''
        }

    async componentDidMount() {
        const {pokemonIndex} = this.props.match.params;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        // const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

         const pokemonRes = await axios.get(pokemonUrl);
         const name = pokemonRes.data.name;
         const imageUrl = pokemonRes.data.sprites.front_default;
         // Convert Decimeters to Feet... The + 0.0001 * 100 ) / 100 is for rounding to two decimal places :)
        const height = Math.round((pokemonRes.data.height * 0.328084 + 0.00001) * 100) / 100;
        const weight = Math.round((pokemonRes.data.weight * 0.220462 + 0.00001) * 100) / 100;
        const types = pokemonRes.data.types.map(type => type.type.name);
         const abilities = pokemonRes.data.abilities
      .map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split('-')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');

        this.setState({name, imageUrl, height, weight, types, abilities})
    }

  render() {
    return (
      <div class="card_container">
          <div className="float-right">
                  {this.state.types.map(type => (
                    <span
                      key={type}
                      className="badge badge-pill mr-1"
                      style={{
                        backgroundColor: `#${TYPE_COLORS[type]}`,
                        color: 'white'
                      }}
                    >
                      {type
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </span>
                  ))}
                </div>
        <h1>{this.state.name}</h1>
         <h1>{this.state.height}</h1>
         <h1>{this.state.weight}</h1>
         <h1>{this.state.abilities}</h1>
         <img src={this.state.imageUrl}/>
      </div>
    )
  }
}

export default IndCard
