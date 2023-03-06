import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  const redHeart = "❤";
  const blackHeart = "🖤";

  return (
    <>
      <div className="col-3 p-3">
        <div className="card">
          <div className="card-body text-center">
            <h5>{props.pokemon.name}</h5>
            <img
              src={props.pokemon.sprites.front_default}
              alt={props.pokemon.name}
            />

            <div>
              <Link to={`/single/${props.pokemon.id}`}>
                <button className="btn btn-secondary">PokeDetalles</button>
              </Link>
              <button
                className={`btn btn-${
                  props.pokemon && store.favorites.includes(props.pokemon.name)
                    ? "info"
                    : "danger"
                } m-1`}
                onClick={() => actions.addFavorite(props.pokemon.name)}
              >
                
                Favorites {blackHeart}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
