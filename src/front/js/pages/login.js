import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";
import Pokebola from "../../img/pokebola.png";

export const Login = (props) => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await actions.login(email, password);
    if(
      response
    ) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Inicio de sesión exitoso",
        icon: "success",
        confirmButtonColor: "#dc3545",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Inicio de sesión exitoso",
        icon: "error",
        confirmButtonColor: "#dc3545",
      });
    }
  }

  // const ingreso = async () => {
  //   console.log(email, password);
  //   // if (email.trim() == "") {
  //   //   Swal("¡Ups!", "Debes colocar un Email");
  //   // } else if (password.trim() == "") {
  //   //   Swal("¡Ups!", "Debes colocar tu contraseña");
  //   // } else {
  //   //   let success = await login(email, password);
  //   //   if (success == true) {
  //   //     Swal("¡Bienvenido!", "Inicio de sesión exitoso", "success");
  //   //   }
  //   //   Swal("Email o contraseña invalidos", "Intenta de nuevo", "error");
  //   // }
  // };
  const showAlert = () => {
    Swal.fire({
      title: "¡Bienvenido!",
      text: "Inicio de sesión exitoso",
      icon: "success",
      confirmButtonColor: "#dc3545",
    });
  };

  useEffect(() => {
    if (
      store.tokenUserLogin &&
      store.tokenUserLogin !== "" &&
      store.tokenUserLogin !== undefined
    )
      navigate("/pokemones");
  }, [store.tokenUserLogin]);

  return (
    <div className="container-fluid">
      <div className="container p-2 w-75 bg-danger mt-3 mb-3 rounded shadow">
        <div className="row align-items-stretch">
          <div
            className="bg-login col d-none d-lg-block col-ms-5 col-lg-5 col-xl-6 rounded"
            style={{ background: "#adb5bd" }}
          ></div>
          <div className="col bg-white p-5 rounded-end">
            <h2
              className="fw-bold text-center py-2"
              style={{
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              Poke Login
            </h2>
            <h6
              className="fw-bold text-center py-2"
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              <img
                src={Pokebola}
                width="30"
                height="30"
                className="img-fluid me-2"
              ></img>
              Bienvenido a tu mejor lugar{" "}
              <img
                src={Pokebola}
                width="30"
                height="30"
                className="img-fluid ms-1"
              ></img>
            </h6>
            {store.tokenUserLogin &&
            store.tokenUserLogin !== "" &&
            store.tokenUserLogin !== undefined ? (
              "You are logged in with this token " + store.tokenUserLogin
            ) : (
              <form action="#" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="inputEmail4" className="form-label">
                    <i className="fa-solid fa-user m-2"></i>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ingresa tu email"
                    id="inputEmail4"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    style={{
                      border: "1px solid #CED4DA",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <div className="mb-1">
                  <label htmlFor="inputPassword4" className="form-label">
                    <i className="fa-solid fa-key m-2"></i>
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ingresa tu contraseña"
                    id="inputPassword4"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    style={{
                      border: "1px solid #CED4DA",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <div className="mb-3">
                  <span>
                    <a
                      href="#"
                      style={{
                        color: "black",
                        float: "right",
                        textDecoration: "underline",
                      }}
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </span>
                </div>
                <br></br>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    // onClick={() => {
                    //   ingreso();
                    // }}
                    style={{
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            )}

            <div className="col  text-center mt-5">
              ¿Aun no tienes una cuenta?
              <Link to="/registro" style={{ color: "black" }} className="ms-1">
                Registrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
