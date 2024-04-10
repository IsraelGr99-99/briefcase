import React, { useEffect } from "react";
import "../stylesheets/links.css";
import Aos from "aos";
function Link({
  href,
  className,
  text,
  icon,
  download,
  toggleModal,
  targetModal,
  ariaLabel,
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className={className} data-aos="fade-up">
      <a
        href={href}
        className="text-decoration-none btn"
        aria-label={ariaLabel}
        download={download ? true : undefined}
        data-bs-toggle={toggleModal ? "modal" : undefined}
        data-bs-target={toggleModal ? targetModal : undefined}
      >
        {icon && <i className={`fa-solid fa-${icon}`}></i>}
        {text}
      </a>
    </div>
  );
}

export default Link;
