import React, { useEffect } from 'react'
import Logos from '../js/logos.js'
import '../stylesheets/bumbble.css'
import Aos from "aos";
function BumbbleDiv( { logo, style, alt} ) {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  });
  return (
    <div className={`container-circle ${style}`} data-aos="fade-up-right">
      <img src={Logos[logo]} alt={alt} className='img-logo' />
    </div>
  )
}

export default BumbbleDiv;
