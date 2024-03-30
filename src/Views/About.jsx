import React from "react";
import "../stylesheets/about.css";
import Card from "../Components/Card";
function About() {
  return (
    <section className="container-fluid about p-0" id="about">
      <div className="content-about">
        <div className="col-md-4  info-left">
          <Card
            title="Education"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="uno"
          />
          <Card
            title="Cursos"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="dos"
          />
          <Card
            title="Certificados"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="tres"
          />
        </div>
        <div className="col-md-4 content-text-goal">
          <h2>MI OBJETIVO</h2>
          <p>Aprender maching learning</p>
        </div>
        <div className="col-md-4 info-rigth">
          <Card
            title="Concursos"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="cuatro"
          />
          <Card
            title="Experiencia"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="cinco"
          />
          <Card
            title="Estoy aprendiendo"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="seis"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
