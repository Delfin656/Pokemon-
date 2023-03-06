import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PokemonHome from "../../img/pokemon-home.png";
import PikachuHome from "../../img/pikachu-home.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="welcome-home text-center mt-5">
      <h1><img src={PikachuHome} width="70" height="70" className="img-fluid me-2"></img>Bienvenidos a la pokedex<img src={PikachuHome} width="70" height="70" className="img-fluid ms-2"></img></h1>
      <p>
        <img className="poke-home img-fluid" src={PokemonHome} />
      </p>
    </div>
  );
};
