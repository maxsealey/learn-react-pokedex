import React from 'react';
import Pokemon from './Pokemon';
import axios from 'axios'

export default class PokemonList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
            pokemon: null // stores retrieved data
        }
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
                        {this.state.pokemon.map(poke => <Pokemon key={poke.name} name={poke.name} url={poke.url}/>)}
                    </div>) : <h1>Loading</h1>
                }
            </React.Fragment>
        )
    }
}