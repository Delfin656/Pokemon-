import React, { useState, useEffect, useContext } from "react";
import PokeAPI from "../../img/poke-api.png";

import { Context } from "../store/appContext";
import { Card } from "../pages/card";
export const Pokemones = () => {
  const { store, actions } = useContext(Context);
  const [pokemones, setPokemones] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  // Traer lista de pokemones de la APi
  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        new error("Paso algo malo en el fetchPokemon");
      }
      const body = await response.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  //Buscar pokemones en el inputfield

  const searchPokemon = async (pokemon) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const body = await response.json();
      console.log(body);
      setPokemones(body);
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  const searcher = (event) => {
    setSearch(event.target.value);
    // verifico por la console que si imprime el escrito
    // console.log(event.target.value)
  };

  // Metodo de filtrado del search

  let results = [];
  if (!search) {
    results = pokemones;
  } else {
    results = pokemones.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }


  useEffect(() => {
    async function getPokemones() {
      try {
        let auxArray = [];
        for (let i = 1; i <= 28; i++) {
          auxArray.push(await fetchPokemon(i));
        }
        setPokemones([...auxArray]);
      } catch (error) {
        console.error("Oh-no ocurrio un error", error);
      }
    }
    getPokemones();
    searchPokemon();
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

        {/* input search */}
        <div className="input-pokemon d-flex justify-content-center">
          <input
            type="search"
            className="form-control-cards mt-3 p-2"
            placeholder="Buscar pokemon "
            id="inputSearch"
            aria-describedby="emailHelp"
            value={search}
            // onClick={async (event) => {
            //   const body = await searchPokemon(search);

            //   setPokemones(body);
            // }}
            onChange={searcher}
            style={{
              border: "1px solid #CED4DA",
              borderRadius: "4px",
            }}
          ></input>
        </div>

        {/* importacion del Card */}

        <div className="flex-wrap d-flex">
          {pokemones &&
            pokemones.length > 0 &&
            results.map((pokemon) => (
              <Card key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
      </div>
    </div>
  );
};
