import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

import './PokemonList.css';

export default class PokemonList extends React.Component {
    render(){
        return (
            <div>
                <Pokemon/>
                <Pokemon/>
                <Pokemon/>
                <Pokemon/>
                <Pokemon/>
                <Pokemon/>
            </div>
        )
    }
}