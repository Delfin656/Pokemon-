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
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  );
};
