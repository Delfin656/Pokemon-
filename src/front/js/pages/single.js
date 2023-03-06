import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const [pokemon, setPokemon] = useState();

  const getSingle = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.theid}`
      );
      const body = await response.json();
      setPokemon(body);
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingle();
  }, []);

  const params = useParams();

  return (
    <div className="jumbotron">
      <div className="cards-container">
        <div className="card-details row">
          <h1 style={{ fontSize: 100 }}>{pokemon && pokemon.name}! </h1>
          
        
          

        </div>
        {pokemon && (
          <img src={pokemon.sprites.front_default} style={{ fontSize: 100 }} alt={pokemon.name} />
        )}
        <hr className="my-4" />
        <h3>Types 🧨</h3>
        <ul>
          {pokemon &&
            pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
        </ul>
        <h3>Moves 🎀</h3>
        <ol>
          {pokemon &&
            pokemon.moves.map((skill, index) => (
              <li key={index}>{skill.move.name}</li>
            ))}
        </ol>
        <div className="btn-backPokemones d-flex justify-content-center">
          <Link to="/pokemones">
            <button type="button" className="btn btn-secondary">
              Back to pokemones
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
