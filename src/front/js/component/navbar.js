import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pokemon from "../../img/pokemon-logo-transparente.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger pt-0 pb-0">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-3">
          <img
            src={Pokemon}
            alt=""
            width="80"
            height="80"
            className="img-fluid"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0"></ul>

          <div>
            {!store.tokenUserLogin ? (
              <>
                <Link
                  to="/login"
                  style={{
                    color: "Black",
                    textDecoration: "none",
                  }}
                >
                  <button
                    className="button-login btn btn-light me-2 p-2 "
                    type="submit"
                    style={{
                      borderRadius: "8px",
                    }}
                  >
                    Iniciar Sesión
                  </button>
                </Link>

                <Link
                  to="/registro"
                  style={{ color: "Black", textDecoration: "none" }}
                >
                  <button
                    className="button-registro btn btn-light p-2 me-3"
                    type="submit"
                    style={{
                      borderRadius: "8px",
                    }}
                  >
                    Registrate
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/favoritos"
                  style={{ color: "Black", textDecoration: "none" }} >
                  <button
                    className="button-login btn btn-light me-2 p-2 "
                    type="submit"
                    onClick={() => {
                      
                      navigate("/");
                    }}
                    style={{
                      borderRadius: "8px",
                    }}
                  >
                    Favoritos
                  </button>
                </Link>
                <button
                  className="button-login btn btn-light me-2 p-2 "
                  type="submit"
                  onClick={() => {
                    actions.logout();
                    navigate("/");
                  }}
                  style={{
                    borderRadius: "8px",
                  }}
                >
                  Cerrar Sesión
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
