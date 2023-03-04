import React, { Component } from "react";
import Pokebola from "../../img/pokebola.png";

export const Footer = () => (
  <footer className="footer bg-danger mt-auto py-3 text-center">
    <p>
      Made with{" "}
      <img src={Pokebola} width="30" height="30" className="img-fluid"></img> by{" "}
      <a href="http://www.4geeksacademy.com">
        <strong>4Geeks Academy</strong>
      </a>
    </p>
  </footer>
);
