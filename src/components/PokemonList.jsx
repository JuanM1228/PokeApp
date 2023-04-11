import React from "react";
import { useState, useEffect } from "react";
import { CardPokemonName } from "./CardPokemonName";
import '../StyleSheets/PokemonList.css'

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        console.log(data.results)
      });
  }, []);

  return (
    <div className="pokemonList">
      {
        pokemons.map(pokemon => ( 
          <div key={pokemons.indexOf(pokemon)}>
            <CardPokemonName {...pokemon}/>
          </div>
        ))
      }
    </div>
  );
};
