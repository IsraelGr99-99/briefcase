import React from "react";
import Navbar from "../Components/Navbar";
import "../stylesheets/header.css";
import Link from "../Components/Link";
import headerPhoto from "../assets/header-photo.png";
function Header() {
  return (
    <header className="container-fluid header p-0">
      <Navbar />
      <div className="col-12 container-header">
        <div className="col-md-6 saludo">
          <h1>
            <strong className="header-h1">{`<h1>`}</strong>
            {`Hola soy Israel, fullstack developer`}
            <strong className="header-h1">{`<h1>`}</strong>{" "}
          </h1>
          <div className="div-btn-header d-flex justify-content-around">
            <Link
              href="mailto:isr.gr1999@outlook.com"
              className="email-link"
              icon="at"
              text=" Correo"
            />
            <Link
              href="./Israel_Garcia_CV.pdf"
              className="download-cv"
              icon="file-arrow-down"
              text=" CV"
              download={true}
            />
          </div>
        </div>
        <div className="col-md-6 img-header">
          <div className="div-header-photo">
            <img className="img-fluid" src={headerPhoto} alt="header-foto" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
