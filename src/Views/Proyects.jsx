import React from "react";
import "../stylesheets/proyects.css";
import CardProyect from "../Components/CardProyect";
import Link from "../Components/Link";
import Modal from "../Components/Modal";
function Proyects() {
  return (
    <section className="container-fluid proyects">
      <h3>Proyects</h3>
      <div className="col-md-10 offset-md-1 container-proyects">
        <CardProyect
          cardTitle="API LARAVEL"
          cardText="Api creada con laravel y protegida con HAS3"
          href="https://github.com/IsraelGr99-99/company"
          icon="g"
          display="d-flex"
          src=""
          alt="API LARAVEL"
        />
        <CardProyect
          cardTitle="CRUD REACT"
          cardText="Creamos un crud para consumir la API"
          href="https://github.com/IsraelGr99-99/company-react"
          icon="g"
          display="d-flex"
          src=""
          alt="CRUD REACT"
        />
        <CardProyect
          cardTitle="CRUD VUE"
          cardText="Creamos un crud para consumir la API en VUE"
          href="https://github.com/IsraelGr99-99/company-react"
          icon="g"
          display="d-flex"
          src=""
          alt="CRUD REACT"
        />
      </div>
      <div className="btn-modal">
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalMore"
          className="btn btn-primary"
        >
          <i className="fa-solid fa-circle-plus"></i> Ver más
        </button>
      </div>


      <Modal modal="modalMore" title='Mis proyectos'>
        <div className="modal-body">
        <CardProyect
          cardTitle="API LARAVEL"
          cardText="Api creada con laravel y protegida con HAS3"
          href="https://github.com/IsraelGr99-99/company"
          icon="g"
          display="d-flex"
          src=""
          alt="API LARAVEL"
        />
         <CardProyect
          cardTitle="CRUD REACT"
          cardText="Creamos un crud para consumir la API"
          href="https://github.com/IsraelGr99-99/company-react"
          icon="g"
          display="d-flex"
          src=""
          alt="CRUD REACT"
        />
        <CardProyect
          cardTitle="CRUD VUE"
          cardText="Creamos un crud para consumir la API en VUE"
          href="https://github.com/IsraelGr99-99/company-react"
          icon="g"
          display="d-flex"
          src=""
          alt="CRUD REACT"
        />
         <CardProyect
          cardTitle="CRUD REACT"
          cardText="Creamos un crud para consumir la API"
          href="https://github.com/IsraelGr99-99/company-react"
          icon="g"
          display="d-flex"
          src=""
          alt="CRUD REACT"
        />
        <CardProyect
          cardTitle="CRUD VUE"
          cardText="Creamos un crud para consumir la API en VUE"
          href="https://github.com/IsraelGr99-99/company-react"
          icon="g"
          display="d-flex"
          src=""
          alt="CRUD REACT"
        />
        </div>
      </Modal>
    </section>
  );
}

export default Proyects;
