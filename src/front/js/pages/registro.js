import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";

export const Registro = (props) => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    actions.registro(nombre, apellido, email, phone, password);
    if (
      nombre != "" &&
      apellido != "" &&
      email != "" &&
      phone != "" &&
      password != ""
    )
      navigate("/login");
  }
  // try {
  //   const response = await fetch(process.env.BACKEND_URL + "/api/user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //       nombre: nombre,
  //       apellido: apellido,
  //       telefono: telefono,
  //     }),
  //   });
  //   if (!response.ok) {
  //     alert("Error al crear el usuario");
  //     return;
  //   }
  //   alert("Usuario creado");
  //   navigate("/login");
  // } catch (error) {
  //   console.log(error);
  // }
  const showAlert = () => {
    Swal.fire({
      title: "¡Felicitaciones!",
      text: "Te has registrado con éxito",
      icon: "success",
      confirmButtonColor: "#dc3545",
    });
  };

  return (
    <div className="container-fluid">
      <div className="container p-2 w-75 bg-danger mt-3 mb-3 rounded shadow">
        <div className="row align-items-stretch">
          <div className="bg-registro col bg-secondary d-none d-lg-block col-ms-5 col-lg-5 col-xl-6 rounded">
            <img
              className="img-registro mt-5"
              src={""}
              alt=""
              style={{ height: "250px", width: "300px" }}
              align="right"
            />
          </div>
          <div className="col bg-white p-5 rounded-end">
            <h2
              className="fw-bold text-center"
              style={{
                fontSize: "32px",
                fontWeight: "500",
              }}
            >
              Registro
            </h2>
            <h6
              className="fw-bold text-center py-2"
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              La mejor experiencia de tu vida
            </h6>

            {/* <h6 className="fw-bold text-center py-2">
              <Link
                target={"_blank"}
                to="/registrocuidador"
                style={{ color: "#20C997" }}
              >
                ¿Quieres ser cuidador? Haz Click Aqui
              </Link>
            </h6> */}
            <form action="#" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="inputname4" className="form-label">
                  <i className="fa-solid fa-user m-2"></i>
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu nombre"
                  id="inputname4"
                  aria-describedby="emailHelp"
                  value={nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputapellido4" className="form-label mt-2">
                  <i className="fa-regular fa-user m-2"></i>
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu apellido"
                  id="inputapellido4"
                  aria-describedby="emailHelp"
                  value={apellido}
                  onChange={(event) => {
                    setApellido(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputemail4" className="form-label mt-2">
                  <i className="fa-regular fa-at m-2"></i>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  id="inputemail4"
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
                <label htmlFor="inputtelefono4" className="form-label mt-2">
                  <i className="fa-solid fa-phone m-2"></i>
                  Telefono
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu telefono"
                  id="inputtelefono4"
                  aria-describedby="emailHelp"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
              </div>
              <div className="mb-2">
                <label htmlFor="Password" className="form-label">
                  <i className="fa-solid fa-key m-2"></i>
                  Contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  id="inputpassword4"
                  aria-describedby="emailHelp"
                  style={{
                    border: "1px solid #CED4DA",
                    borderRadius: "4px",
                  }}
                ></input>
                <label htmlFor="inputpassword4" className="form-label mt-2">
                  <i className="fa-solid fa-unlock m-2"></i>
                  Repetir contraseña
                </label>
                <input
                  type="Password"
                  className="form-control"
                  placeholder="Repite contraseña"
                  id="inputpassword4"
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
              <div className="d-grid">
                <div className="form-check d-flex justify-content-center mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    id="exampleCheck1"
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                  Haz leído y aceptas los <strong>Términos y Condiciones</strong>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger m-2"
                  onClick={async (event) => {
                    showAlert(event.target.value);
                  }}
                  style={{
                    border: "2px solid black",
                    borderRadius: "8px",
                  }}
                >
                  Crear Cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
