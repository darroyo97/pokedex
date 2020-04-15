import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;
class CardList extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    }
    componentDidMount() {
        const { name, url } = this.props
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({ name, imageUrl, pokemonIndex });
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        <p>
                            {this.state.name
                                .toLowerCase()
                                .split(' ')
                                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}
                        </p>
                    </div>
                    <div class="card-body">
                        <Sprite className="card-img-top rounded mx-auto" src={this.state.imageUrl} />
                    </div>
                </div>

            </div>
        )
    }
}

export default CardList
