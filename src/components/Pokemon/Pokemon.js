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
            console.log(data.version_group)
            const res = await fetch(data.version_group.url);
            const level = await res.json();
            console.log(level)
        }
    },[isLoading]);

    return (
        <div className='pokemon'>  
            <div className='card'>
                <button className="btn" onClick={generator}>Generator!</button>
                {
                    isLoading ? 
                        <h1>Loading..</h1> : 
                        <>
                            <h1>{name}</h1>
                            <img src={image} alt={name} />
                        </>
                }
            </div>
            
        </div>
    )
}
