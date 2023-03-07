import React from "react";
// import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favoritos = () => {
  return (
    <div className="d-flex justify-content-center">
      <h1>Hola mundo estas en Favoritos</h1>
      <div className="btn-backPokemones d-flex justify-content-center">
        <Link to="/pokemones">
          <button type="button" className="btn btn-secondary">
            Back to pokemones
          </button>
        </Link>
      </div>
    </div>
  );
};
