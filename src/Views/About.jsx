import React from "react";
import "../stylesheets/about.css";
import Card from "../Components/Card";
function About() {
  return (
    <section className="container-fluid about p-0" id="about">
      <div className="content-about">
        <div className="col-md-4  info-left">
          <Card
            title="Formación"
            parr="Estudio Ing. Sistemas y TI en la UVP."
            num="uno"
          />
          <Card
            title="Cursos"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="dos"
          />
          <Card
            title="Certificados"
            parr=""
            num="tres"
            link={true}
          />
        </div>
        <div className="col-md-4 content-text-goal" data-aos="flip-up">
          <h2>MI OBJETIVO</h2>
          <p>
            Busco perfeccionar mis habilidades en programación para orientarme
            hacia el campo del Machine Learning.
          </p>
        </div>
        <div className="col-md-4 info-rigth">
          <Card
            title="Concursos"
            parr="Programación Python en la Uni. IEU"
            num="cuatro"
          />
          <Card
            title="Experiencia"
            parr="-Estoy estudiando Ing. Sistenas y TI"
            num="cinco"
          />
          <Card title="Estoy aprendiendo" parr="Andriod Studio" num="seis" />
        </div>
      </div>
    </section>
  );
}

export default About;
