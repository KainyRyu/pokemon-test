import React, { useState, useEffect } from 'react'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState('');

    useEffect(() => {
        fetchPokemon();
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/25`)
            const data = await response.json();
            setPokemon(data)

    }
    },[]);

    return (
        <div> 


                <h1>{pokemon.name}</h1>
                {/* <img src={pokemon.sprites.front_default} alt='' /> */}
            
        </div>
    )
}
