import React from 'react'
import Logos from '../js/logos.js'
import '../stylesheets/bumbble.css'

function BumbbleDiv( { logo, style, alt} ) {
  return (
    <div className={`container-circle ${style}`}>
      <img src={Logos[logo]} alt={alt} className='img-logo' />
    </div>
  )
}

export default BumbbleDiv;
