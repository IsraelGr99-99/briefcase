import React from "react";
import '../stylesheets/card.css'
function Card({title,parr, num}) {
  return (
    <div class="cards">
      <div class={`card ${num}`}>
        <h3 class="tip">{title}</h3>
        <p class="second-text">{parr}</p>
      </div>
    </div>
  );
}

export default Card;
