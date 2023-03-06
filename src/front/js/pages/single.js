import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PokeBola from "../../img/pokebola.png";

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
        <div className="card-details row text-center">
          <h1 style={{ fontSize: 100 }}>{pokemon && pokemon.name}! </h1>
        </div>
        <div className="img-pokemon d-flex justify-content-center">
          {pokemon && (
            <img
              src={pokemon.sprites.front_default}
              style={{ fontSize: 100 }}
              alt={pokemon.name}
              width="200"
              height="200"
              className="img-fluid"
            />
          )}
        </div>
        <hr className="my-4" />
        <div className="type-pokemon ms-5">
          <h3>
            <img
              src={PokeBola}
              width="30"
              height="30"
              className="img-fluid me-2"
            ></img>
            Tipo de pokemon
            <img
              src={PokeBola}
              width="30"
              height="30"
              className="img-fluid ms-2"
            ></img>
          </h3>
          <ul>
            {pokemon &&
              pokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
          </ul>
        </div>

        <div className="moves-pokemon ms-5">
        <h3>💥Moves💥</h3>
        <ol>
          {pokemon &&
            pokemon.moves.map((skill, index) => (
              <li key={index}>{skill.move.name}</li>
            ))}
        </ol>

        </div>
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
