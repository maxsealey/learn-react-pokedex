import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import axios from 'axios'
import './PokemonList.css';

export default class PokemonList extends React.Component {

    state = {
        url: " https://pokeapi.co/api/v2/pokemon/",
        pokemon: null // stores retrieved data
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url)
        this.setState({ pokemon: res.data['results'] })
    } // asynchronously gets data from pokeapi

    render(){
        return (
            <React.Fragment>
                {
                    this.state.pokemon ? 
                    (<div className = "row">
                        {this.state.pokemon.map(poke => <Pokemon />)}
                    </div>) : <h1>Loading</h1>
                }
            </React.Fragment>
        )
    }
}