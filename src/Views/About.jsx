import React from "react";
import "../stylesheets/about.css";
import Link from "../Components/Link";
const About = () => {
  return (
    <div className="container-fluid grid-about">
      <div className="parent">
        <div className="div1 grid-item" data-aos="flip-up">
          <i class="fa-solid fa-bullseye ic"></i> Objetivo
          <p className="mt-4"> 
            Desarrollar una app móvil para la comunidad universitaria de México.
          </p>
        </div>
        <div className="div2 grid-item" data-aos="flip-up">
          <i className="fa-solid fa-building-columns ic"></i> Educación
          <p className="mt-4">
            Actualmente estoy estudiando Ingeniería de Sistemas y Tecnologías de
            la Información en la{" "}
            <strong>Universidad del Valle de Puebla</strong>.
          </p>
        </div>
        <div className="div3 grid-item" data-aos="flip-up">
          <i class="fa-solid fa-code ic"></i> Estoy aprendiendo
          <p className="mt-4">
            Desarrollo movil en React Native (ios/Android).
          </p>
        </div>
        <div className="div4 grid-item" data-aos="flip-up">

        </div>
        <div className="div5 grid-item" data-aos="flip-up">
        <i class="fa-solid fa-brain ic"></i> Conocimientos en...
          <ul className="mt-4">
            <li>
              <strong>Interfaces de usuario</strong>
            </li>
            <li>
              <strong>Sistemas embebidos</strong>
            </li>
            <li>
              <strong>Bases de datos</strong>
            </li>
            <li>
              <strong>Arquitectura de computadoras</strong>
            </li>
            <li>
              <strong>Tecnologías de la información</strong>
            </li>
            <li>
              <strong>Ciberseguridad</strong>
            </li>
            <li>
              <strong>Android Studio</strong>
            </li>
            <li>
              <strong>Matlab</strong>
            </li>
          </ul>
        </div>
        <div className="div6 grid-item" data-aos="flip-up">
          <i class="fa-solid fa-briefcase ic"></i> Experiencia
          <ul className="mt-4">
            <li>
              Creación, gestión y mantenimiento de plataformas y páginas web{" "}
              {`(año y medio)`}.
            </li>
            <li>
              Responsable del diseño, implementación y configuración del
              cableado estructurado de red para la empresa CMIP.
            </li>
            <li>Elaboración de contenido para redes sociales (6 meses).</li>
          </ul>
        </div>
        <div className="div7 grid-item" data-aos="flip-up">
          <i class="fa-solid fa-certificate ic"></i> Cursos completados
          <div className="d-flex justify-content-center align-items-center div-vermas">
            <Link
            href="https://drive.google.com/drive/folders/1WfNoK5sJC3MTvDGHWqrxpTLCNVgvyXol?usp=sharing"
            text="ver todos"
            className="verMas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
