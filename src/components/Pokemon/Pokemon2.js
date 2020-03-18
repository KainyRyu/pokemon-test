import React, { useState, useEffect } from 'react'
import './pokemon.css';

export default function Pokemon2() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function randomNum() {
        return Math.round(Math.random() * 100);
    }
    useEffect(() => {
        isLoading && fetchPokemon();
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomNum()}`)
            const { name, sprites } = await response.json()
            setIsLoading(!isLoading);
            setImage(sprites.front_default)
            setName(name)
        }
    }, [isLoading]);

    return (
        <div className='card'>
            <button
                className="btn" 
                onClick={() => setIsLoading(!isLoading) }>
                    Click!
            </button>
            {isLoading ? 
                <h1>Loading...</h1> :
                <div>
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                </div>
            }
            
        </div>
    )
}
