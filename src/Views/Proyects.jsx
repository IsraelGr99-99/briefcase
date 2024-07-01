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
      <h3 data-aos="flip-up">Proyectos</h3>
      <div className="col-md-10 offset-md-1 container-proyects">
        <CardProyect
          cardTitle="UNIVERSIA"
          cardSubTitle='App móvil'
          cardText="Aplicación en desarrollo..."
          display="d-flex"
          className="card"
          src=""
          displayLinkGit={false}
          displayWeb={false}
          ariaLabelGit="Link repositorio git"
          ariaLabelWeb="Link sitio web"
        />
        <CardProyect
          cardTitle="REACT CRUD"
          cardSubTitle='Front end'
          cardText="Implementación de CRUD doble con API Laravel, paginación y autenticación Sanctum integradas."
          hrefWeb='https://company-react.israel-gr.com'
          iconWeb="globe"
          display="d-flex"
          className="card"
          src=""
          alt="CRUD REACT"
          displayLinkGit={false}
          displayWeb={true}
          ariaLabelWeb="Link sitio web"
        />
        <CardProyect
          cardTitle="API LARAVEL"
          cardSubTitle='Backend'
          cardText="API creada con Laravel 10 usando autenticación Sanctum."
          hrefGit="https://github.com/IsraelGr99-99/"
          iconGit=" fa-brands fa-github"
          
          display="d-flex"
          className="card"
          src=""
          alt="CRUD REACT"
          displayLinkGit={true}
          displayWeb={false}
          ariaLabelGit="Link repositorio git"
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

      <Modal modal="modalMore" title="Proyectos">
        <div className="modal-body bg-dark">
          <CardProyect
            cardTitle="Space Invade"
            cardSubTitle='Juego Escritorio'
            cardText="Juego de Escritorio creado con python."
            hrefGit="https://drive.google.com/drive/folders/1SKw1ahabN741r6GlkvYrPQwIuG-cvJw5?usp=sharing"
            className={false}
            display="d-flex"
            src=""
            alt="API LARAVEL"
            displayLinkGit={true}
            displayWeb={false}
            iconGit=" fa-solid fa-arrow-down"
            ariaLabelGit="Link repositorio git" 
            ariaLabelWeb="Link sitio web"
            displayLinkExe={true}
          />
          <CardProyect
            cardTitle="Convertidor de archivos"
            cardSubTitle='FullStack'
            cardText="Convertidor de archivos html a excel creado con python."
            hrefWeb="http://israelgr99.pythonanywhere.com/"
            iconWeb="globe"
            display="d-flex"
            src=""
            className={false}
            alt="CRUD REACT"
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="CRUD VUE"
            cardSubTitle='Front end'
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
            cardSubTitle='Front-Backend'
            cardText="Calculadora creada con React y Bootstrap."
            hrefWeb="https://calculator.israel-gr.com/"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="Calculadora React"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Grupo-CMIPuebla"
            cardSubTitle='Página web Front-Backend'
            cardText="Sitio web para empresa del sector industrial creada con html, css, js, sweetalert y bootstrap."
            hrefWeb="https://grupocmi-puebla.rampadepatio.com.mx/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="Grupo-CMIPuebla"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Perfectglass"
            cardSubTitle='Página web Front-Backend'
            cardText="Sitio web para empresa fabricante de vidrios creada con html, css, js, sweetalert y bootstrap."
            hrefWeb="https://perfectglass.israel-gr.com/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="Perfectglass"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Rampas CMI"
            cardSubTitle='Página web Front-Backend'
            cardText="Sitio web para empresa del sector industrial creada con html, css, js, sweetalert y bootstrap."
            hrefWeb="https://rampadepatio.com.mx/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="Rampas CMI"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Webdding"
            cardSubTitle='Front-Backend'
            cardText="Invitación para bodas digital creada con html, css, js, sweetalert, bootstrap y enlazada a Google Sheets"
            hrefWeb="https://webdding.israel-gr.com/"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="Webdding"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Simulación de la luz"
            cardSubTitle='Simulación 3D'
            cardText="Simulación de la luz a través de la fibra óptica (Reflexión) utilizando motor gráfico Unity."
            href="https://github.com/IsraelGr99-99/"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="API MARVEL"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Invitación Digital"
            cardSubTitle='FullStack'
            cardText="Invitación para boda usando API para mostrar el clima en tiempo real y react."
            //hrefGit="https://github.com/IsraelGr99-99/invitacion"
            hrefWeb="https://invitation.israel-gr.com/"
            //iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="Invitación digital"
            className={false}
            displayLinkGit={false}
            displayWeb={true}
            ariaLabelGit="Link repositorio git"
            ariaLabelWeb="Link sitio web"
          />
          <CardProyect
            cardTitle="Portafolio web"
            cardSubTitle='FullStack'
            cardText="Mi portafolio web creado con React, boostrap y sweetAlert."
            hrefWeb="https://israel-gr.com"
            iconGit="g"
            iconWeb="globe"
            display="d-flex"
            src=""
            alt="Portafolio web"
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
