import React from "react";
import "../stylesheets/proyects.css";
import CardProyect from "../Components/CardProyect";
import Link from "../Components/Link";
import Modal from "../Components/Modal";
function Proyects() {
  return (
    <section className="container-fluid proyects" id="proyects">
      <h3>Proyects</h3>
      <div className="col-md-10 offset-md-1 container-proyects">
        <CardProyect
          cardTitle="API LARAVEL"
          cardText="Api creada con laravel y protegida con HAS3"
          href="https://github.com/IsraelGr99-99/company"
          iconGit=" fa-brands fa-github"
          display="d-flex"
          className="card"
          src=""
          alt="API LARAVEL"
          displayLinkGit={true}
          displayWeb={false}
        />
        <CardProyect
          cardTitle="CRUD REACT"
          cardText="Creamos un crud para consumir la API"
          href="https://github.com/IsraelGr99-99/company-react"
          iconGit=" fa-brands fa-github"
          iconWeb="globe"
          display="d-flex"
          className="card"
          src=""
          alt="CRUD REACT"
          displayLinkGit={true}
          displayWeb={true}
        />
        <CardProyect
          cardTitle="CRUD VUE"
          cardText="Creamos un crud para consumir la API en VUE"
          href="https://github.com/IsraelGr99-99/company-react"
          iconGit=" fa-brands fa-github"
          iconWeb="globe"
          display="d-flex"
          className="card"
          src=""
          alt="CRUD REACT"
          displayLinkGit={true}
          displayWeb={true}
        />
      </div>
      <div className="btn-modal">
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalMore"
          className="btn btn-primary"
        >
          <i className="fa-solid fa-circle-plus"></i> Ver todos
        </button>
      </div>

      <Modal modal="modalMore" title="Mis proyectos">
        <div className="modal-body bg-dark">
          <CardProyect
            cardTitle="API LARAVEL"
            cardText="Api creada con laravel y protegida con HAS3"
            href="https://github.com/IsraelGr99-99/company"
            className={false}
            display="d-flex"
            src=""
            alt="API LARAVEL"
            displayLinkGit={true}
            displayWeb={false}
            iconGit=" fa-brands fa-github"
          />
          <CardProyect
            cardTitle="CRUD REACT"
            cardText="Creamos un crud para consumir la API"
            href="https://github.com/IsraelGr99-99/company-react"
            iconGit=" fa-brands fa-github"
            iconWeb="globe"
            display="d-flex"
            src=""
            className={false}
            alt="CRUD REACT"
            displayLinkGit={true}
            displayWeb={true}
          />
          <CardProyect
            cardTitle="CRUD VUE"
            cardText="Creamos un crud para consumir la API en VUE"
            href="https://github.com/IsraelGr99-99/company-react"
            iconGit=" fa-brands fa-github"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={true}
            displayWeb={true}
          />
          <CardProyect
            cardTitle="Calculadora React"
            cardText="Creamos un crud para consumir la API"
            href="https://github.com/IsraelGr99-99/company-react"
            iconGit=" fa-brands fa-github"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={true}
            displayWeb={true}
          />
          <CardProyect
            cardTitle="Grupo-CMIPuebla"
            cardText="Creamos un crud para consumir la API en VUE"
            href="https://github.com/IsraelGr99-99/company-react"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
          />
          <CardProyect
            cardTitle="Perfectglass"
            cardText="Creamos un crud para consumir la API en VUE"
            href="https://github.com/IsraelGr99-99/company-react"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
          />
          <CardProyect
            cardTitle="Rampas CMI"
            cardText="Creamos un crud para consumir la API en VUE"
            href="https://github.com/IsraelGr99-99/company-react"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
          />
        </div>
      </Modal>
    </section>
  );
}

export default Proyects;
