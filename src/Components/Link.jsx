import React from "react";
import '../stylesheets/links.css'
function Link({ href, className, text, icon, download, toggleModal, targetModal }) {
  return (
    <div className={className}>
      <a href={href} className="text-decoration-none btn" 
        download={download ?  true : undefined}
        data-bs-toggle={toggleModal ? "modal" : undefined}
        data-bs-target={toggleModal ? targetModal : undefined} >
        {icon && <i className={`fa-solid fa-${icon}`}></i>}
        {text}
      </a>
    </div>
  );
}

export default Link;
