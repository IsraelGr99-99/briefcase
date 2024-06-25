import React from "react";
import "../stylesheets/cardProyect.css";
import Link from "../Components/Link";
import { useEffect } from "react";
import Aos from "aos";
function CardProyect({ cardTitle, cardText, hrefGit, hrefWeb, iconGit,iconWeb, display, src, alt,className, displayWeb,displayLinkGit,ariaLabelGit,ariaLabelWeb }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className={className ? 'card' : 'style-card-modal'} data-aos="zoom-out-right">
      {/* {display && (<div className={`card-img ${display}`}>
        <img class="card-img-top img-fluid" src={src} alt={alt}></img>
      </div>)} */}
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardText}</p>
      </div>
      <div className="card-footer">
        <Link href={hrefGit} className={`link-proyect ${displayLinkGit ? '' : 'd-none'}`} icon={iconGit} ariaLabelGit={ariaLabelGit}/>
        <Link href={hrefWeb} className={`link-proyect ${displayWeb ? '' : 'd-none'}`} icon={iconWeb} ariaLabelWeb={ariaLabelWeb}/>
      </div>
    </div>
  );
}

export default CardProyect;
