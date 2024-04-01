import React, { useEffect } from "react";
import "../stylesheets/proyects.css";
import CardProyect from "../Components/CardProyect";
import Link from "../Components/Link";
import Modal from "../Components/Modal";
import Aos from "aos";
function Proyects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="container-fluid proyects" id="proyects">
      <h3 data-aos="flip-up">Proyects</h3>
      <div className="col-md-10 offset-md-1 container-proyects">
        <CardProyect
          cardTitle="API LARAVEL"
          cardText="API con Laravel 10 usando autenticación Sanctum."
          hrefGit="https://github.com/IsraelGr99-99/"
          iconGit=" fa-brands fa-github"
          display="d-flex"
          className="card"
          src=""
          alt="API LARAVEL"
          displayLinkGit={true}
          displayWeb={false}
          ariaLabelGit="Link repositorio git"
          ariaLabelWeb="Link sitio web"
        />
        <CardProyect
          cardTitle="REACT CRUD"
          cardText="Doble CRUD consumiendo API laravel con paginación integrada y Autenticación Sanctum."
          hrefGit="https://github.com/IsraelGr99-99"
          hrefWeb="https://github.com/IsraelGr99-99"
          iconGit=" fa-brands fa-github"
          iconWeb="globe"
          display="d-flex"
          className="card"
          src=""
          alt="CRUD REACT"
          displayLinkGit={true}
          displayWeb={true}
          ariaLabelGit="Link repositorio git"
          ariaLabelWeb="Link sitio web"
        />
        <CardProyect
          cardTitle="CRUD VUE"
          cardText="Doble CRUD consumiendo API Laravel con autenticación Sanctum."
          hrefGit="https://github.com/IsraelGr99-99/"
          hrefWeb="https://github.com/IsraelGr99-99"
          iconGit=" fa-brands fa-github"
          iconWeb="globe"
          display="d-flex"
          className="card"
          src=""
          alt="CRUD REACT"
          displayLinkGit={true}
          displayWeb={true}
          ariaLabelGit="Link repositorio git"
          ariaLabelWeb="Link sitio web"
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
            cardText="API con Laravel 10 usando autenticación Sanctum."
            hrefGit="https://github.com/IsraelGr99-99/"
            className={false}
            display="d-flex"
            src=""
            alt="API LARAVEL"
            displayLinkGit={true}
            displayWeb={false}
            iconGit=" fa-brands fa-github"
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="CRUD REACT"
            cardText="Doble CRUD consumiendo API laravel con paginación integrada y Autenticación Sanctum."
            hrefGit="https://github.com/IsraelGr99-99/"
            hrefWeb="https://github.com/IsraelGr99-99"
            iconGit=" fa-brands fa-github"
            iconWeb="globe"
            display="d-flex"
            src=""
            className={false}
            alt="CRUD REACT"
            displayLinkGit={true}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="CRUD VUE"
            cardText="Doble CRUD consumiendo API Laravel con autenticación Sanctum."
            hrefGit="https://github.com/IsraelGr99-99/"
            hrefWeb="https://github.com/IsraelGr99-99"
            iconGit=" fa-brands fa-github"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={true}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Calculadora React"
            cardText="Creamos un crud para consumir la API"
            hrefGit="https://github.com/IsraelGr99-99/"
            hrefWeb="https://github.com/IsraelGr99-99"
            iconGit=" fa-brands fa-github"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={true}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Grupo-CMIPuebla"
            cardText="Página web para empresa de construcción utilizando HTML, CSS, JS y Bootstrap y SweetAlert"
            hrefWeb="https://grupo-cmipuebla.com.mx/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Perfectglass"
            cardText="Página web para empresan de vidrios utilizando HTML, CSS, JS y Bootstrap y SweetAlert"
            hrefWeb="https://perfectglass.mx/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Rampas CMI"
            cardText="Página web para empresa utilizando HTML, CSS, JS y Bootstrap y SweetAlert"
            hrefWeb="https://rampadepatio.com.mx/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Webdding"
            cardText="Invitación para bodas digital con HTML, CSS, JS, Bootstrap y SweetAlert"
            hrefWeb="https://israelgr99-99.github.io/webdding/"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="API MARVEL"
            cardText="API con NodeJs"
            href="https://github.com/IsraelGr99-99/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Invitación con REACT"
            cardText="Invitación para boda digitale con React"
            hrefGit="https://github.com/IsraelGr99-99"
            hrefWeb="https://israelgr99-99.github.io/invitacion/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="CRUD MARVEL"
            cardText="Creamos un crud para consumir la API MARVEL"
            hrefGit="https://github.com/IsraelGr99-99"
            hrefWeb="https://israelgr99-99.github.io/marvelreact/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Portafolio web"
            cardText="Esta página esta desarrollada con React"
            hrefGit="https://github.com/IsraelGr99-99"
            hrefWeb="https://israel-gr.com"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="CRUD REACT"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
        </div>
      </Modal>
    </section>
  );
}

export default Proyects;
