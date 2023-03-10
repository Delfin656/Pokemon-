import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favoritos = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="d-flex flex-wrap">
        {store.favorites.map((pokemon) => {
          return (
            <div className="col-3 p-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5>{pokemon}</h5>
                  <img src={pokemon} alt={pokemon} />

                  <div>
                    <Link to={`/single/${pokemon}`}>
                      <button className="btn btn-secondary">
                        PokeDetalles
                      </button>
                    </Link>
                    <i
                      className="btn btn-danger btn-sm fas fa-trash ms-2"
                      onClick={(event) => actions.deleteFavorite(pokemon)}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="btn-backPokemones d-flex justify-content-center">
        <Link to="/pokemones">
          <button type="button" className="btn btn-secondary">
            Back to pokemones
          </button>
        </Link>
      </div>
    </>
  );
};
