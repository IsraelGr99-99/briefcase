import React from "react";
import "../stylesheets/about.css";
import Card from "../Components/Card";
function About() {
  return (
    <section className="container-fluid about p-0">
      <div className="separation"></div>
      <div className="content-about">
        <div className="col-md-4  info-left">
          <Card title="Education" parr="-Estoy estudiando Ing. Sistenas y TI"  num='uno'/>
          <Card title="Education" parr="-Estoy estudiando Ing. Sistenas y TI" />
          <Card title="Education" parr="-Estoy estudiando Ing. Sistenas y TI" num='tres'/>
        </div>
        <div className="col-md-4 content-text-goal">
          <h2>MI OBJETICO</h2>
          <p>Mi objetico es poder aprender maching learning</p>
        </div>
        <div className="col-md-4 info-rigth">
          <Card title="Education" parr="-Estoy estudiando Ing. Sistenas y TI"  num='cuatro'/>
          <Card title="Education" parr="-Estoy estudiando Ing. Sistenas y TI" />
          <Card title="Education" parr="-Estoy estudiando Ing. Sistenas y TI" num='seis'/>
        </div>
      </div>
    </section>
  );
}

export default About;
