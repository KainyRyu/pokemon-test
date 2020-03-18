import React, { useState, useEffect } from 'react';
import './pokemon.css';

export default function Pokemon() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function generator() {
        setIsLoading(!isLoading);
    }

    function randomNum() {
        return Math.floor(Math.random() * 100);
    }

    useEffect(() => {
        isLoading && fetchPokemon();
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomNum()}`)
            const data = await response.json()
            setName(data.name);
            setImage(data.sprites.front_default);
            setIsLoading(false);
        }
    },[isLoading]);

    return (
        <div className='pokemon'>  
            <button className="btn" onClick={generator}>Generator!</button>
            <div className='card'>
                {
                    isLoading ? 
                        <h1>Loading..</h1> : 
                        <>
                            <img src={image} alt={name} />
                            <h1>{name}</h1>
                        </>
                }
            </div>
            
        </div>
    )
}
