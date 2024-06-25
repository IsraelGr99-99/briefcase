import React from "react";
import "../stylesheets/about.css";
import Link from "../Components/Link";
function About() {
  return (
    <section className="container about" id="about">
      <div className="col-12 content-text-goal">
        <h2>Acerca de mí</h2>
        {/* <p>
              Busco perfeccionar mis habilidades en programación para orientarme
            hacia el campo del Machine Learning.
            </p> */}
      </div>
      <div className="col-md-12 content-about">
        <div className="col-md-5 formation">
          <ul>
            <li className="ng">Formación Académica</li>
            <ul>
              <li>
                Actualmente estoy estudiando Ingeniería de Sistemas y
                Tecnologías de la Información en la{" "}
                <strong>Universidad del Valle de Puebla</strong>.
              </li>
            </ul>
          </ul>
        </div>
        <div className="col-md-5 learning">
          <ul>
            <li className="ng">Estoy aprendiendo</li>
            <ul>
              <li>Desarrollo movil en React Native (ios/Android).</li>
            </ul>
          </ul>
        </div>
        <div className="col-md-5 conocimientos">
          <ul>
            <li className="ng">Conocimientos en...</li>
            <ul>
              <li><strong>Interfaces de usuario</strong></li>
              <li><strong>Sistemas embebidos</strong></li>
              <li><strong>Bases de datos</strong></li>
              <li><strong>Arquitectura de computadoras</strong></li>
              <li><strong>Tecnologías de la información</strong></li>
              <li><strong>Ciberseguridad</strong></li>
              <li><strong>Android Studio</strong></li>
              <li><strong>Matlab</strong></li>
            </ul>
          </ul>
        </div>
       
        <div className="col-md-5 experience">
          <ul>
            <li className="ng">Experiencia</li>
            <ul>
              <li>
                Creación, gestión y mantenimiento de plataformas y páginas web {`(año y medio)`}.
              </li>
              <li>
                Responsable del diseño, implementación y configuración del cableado estructurado de red para la empresa CMIP.
              </li>
              <li>
                Elaboración de contenido para redes sociales (6 meses).
              </li>
            </ul>
          </ul>
        </div>
        <div className="col-md-5 cursos">
          <ul>
            <li className="ng">Cursos completados</li>
            <Link
              href="https://drive.google.com/drive/folders/1WfNoK5sJC3MTvDGHWqrxpTLCNVgvyXol?usp=sharing"
              text="ver todos"
              className="verMas"
            />
          </ul>
        </div>
        <div className="col-md-5 cursos1">
        </div>
        {/* <Card
            title="Formación"
            parr="."
            num="uno"
          />
          <Card
            title="Cursos"
            parr=""
            num="tres"
            link={true}
          />
          <Card
            title="Experiencia"
            parr="He trabajado como Freelancer durante un año, y simultáneamente gestioné la plataforma, página web y redes sociales de una empresa durante seis meses, utilizando Wordpress."
            num="cinco"
          />
          <Card title="Estoy aprendiendo" parr={
                    <div>
                      <ul>
                        <li>Creación de interfaces de usuario intuitivas</li>
                        <li>Integración de APIs</li>
                        <li>Optimización de rendimiento para aplicaciones Android</li>
                        <li>Implementación y programación de sistemas embebidos</li>
                      </ul>
                    </div>
  } num="seis" /> */}
      </div>
    </section>
  );
}

export default About;
