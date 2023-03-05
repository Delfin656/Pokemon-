import React, { useState, useEffect } from "react";
import PokeAPI from "../../img/poke-api.png";

export const Cards = () => {
  const [pokemon, setPokemon] = useState([]);

  let search = "";

  async function getPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/${id}");
      if (!response.ok) {
        new error("Paso algo malo en el getPokemon");
      }
      const body = await response.json();
      setPokemon(body.abilities);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-3">
          <img
            src={PokeAPI}
            alt=""
            width="150"
            height="150"
            className="img-fluid"
          />
        </div>
        <div className="input-pokemon d-flex justify-content-center">
          <input
            type="search"
            className="form-control-cards mt-3 p-2"
            placeholder="Buscar pokemon "
            id="inputSearch"
            aria-describedby="emailHelp"
            value=""
            onChange=""
            style={{
              border: "1px solid #CED4DA",
              borderRadius: "4px",
            }}
          ></input>
        </div>

        <div className="col-12 d-dlex">
          {pokemon.map((pokemon) => {
            return (
              <div className="card" style={{ width: "18rem;" }}>
                <img src={pokemon.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Este pokemon es: {pokemon.name}
                  </h5>
                  <p className="card-text">
                    Habilidades:
                    {pokemon.abilities}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detalles
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    // <div className="card-body">
    //   <h5 className="card-title">Título de la tarjeta</h5>
    //   <p className="card-text">
    //     Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y
    //     componer la mayor parte del contenido de la tarjeta.
    //   </p>
    //   <a href="#" className="btn btn-primary">
    //     Ir a algún lugar
    //   </a>
    // </div>
  );
};
