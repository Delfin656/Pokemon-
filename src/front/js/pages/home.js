import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PokemonHome from "../../img/pokemon-home.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Bienvenidos a la pokedex</h1>
      <p>
        <img className="poke-home img-fluid" src={PokemonHome} />
      </p>
    </div>
  );
};
