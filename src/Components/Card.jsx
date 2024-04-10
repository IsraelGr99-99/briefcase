import React, { useEffect } from "react";
import "../stylesheets/card.css";
import Link from '../Components/Link'
import Aos from "aos";

function Card({ title, parr, num,link }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div class="cards">
      <div class={`card-me ${num}`} data-aos="fade-up">
        <h3 class="tip">{title}</h3>
        <p class="second-text">{parr}</p>
        {link ? (<Link href='https://drive.google.com/drive/folders/1WfNoK5sJC3MTvDGHWqrxpTLCNVgvyXol?usp=sharing'text='ver todos' className='verMas'/>) : null}
      </div>
    </div>
  );
}

export default Card;
