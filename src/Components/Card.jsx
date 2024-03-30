import React, { useEffect } from "react";
import "../stylesheets/card.css";
import Aos from "aos";

function Card({ title, parr, num }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div class="cards">
      <div class={`card-me ${num}`} data-aos="fade-up">
        <h3 class="tip">{title}</h3>
        <p class="second-text">{parr}</p>
      </div>
    </div>
  );
}

export default Card;
