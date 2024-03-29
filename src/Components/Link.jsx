import React from "react";
import '../stylesheets/links.css'
function Link({ href, className, text, icon, download }) {
  return (
    <div className={className}>
      <a href={href} className="text-decoration-none btn" download={download ?  true : undefined}>
        {icon && <i className={`fa-solid fa-${icon}`}></i>}
        {text}
      </a>
    </div>
  );
}

export default Link;
