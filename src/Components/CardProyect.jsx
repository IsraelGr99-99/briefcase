import React from "react";
import "../stylesheets/cardProyect.css";
import Link from "../Components/Link";
function CardProyect({ cardTitle, cardText, href, icon, display, src, alt }) {
  return (
    <div className="card">
      {display && (<div className={`card-img ${display}`}>
        <img class="card-img-top img-fluid" src={src} alt={alt}></img>
      </div>)}
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardText}</p>
      </div>
      <div className="card-footer">
        <Link href={href} className="link-proyect" icon={icon}/>
        <Link href={href} className="link-proyect" icon={icon}/>
      </div>
    </div>
  );
}

export default CardProyect;
