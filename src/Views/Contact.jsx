import React from 'react'
import '../stylesheets/contact.css'
import Link from '../Components/Link'
function Contact() {
  return (
    <div className='container-fluid contact p-0' id='contact'>
      <div className="separation"></div>
      <div className="col-12 cont-contact">
        <div className="col-md-5 title-footer">
          <h5 className='h1'>Contacto</h5>
        </div>
        <div className="line"></div>
        <div className="col-md-5 inf-contact">
          <div className="contact-social">
            <Link href='https://github.com/IsraelGr99-99' className='social' text='' icon=' fa-brands fa-github'/>
            <Link href='https://www.linkedin.com/in/isrgr/' className='social' text='' icon=' fa-brands fa-linkedin'/>
            <Link href='whatsapp://send?phone=2223738823' className='social' text='' icon=' fa-brands fa-square-whatsapp'/>
          </div>
          <div className="contact-email">
            <div className='btn-copy'>
              <input type="text" className='form-control text-copy' value='isr.gr1999@outlook.com'/>
              <i className='fa-solid fa-clone'></i>
            </div>
          </div>
        </div>
      </div>
      <footer className='container-fluid'>
        
      </footer>
    </div>
  )
}

export default Contact
