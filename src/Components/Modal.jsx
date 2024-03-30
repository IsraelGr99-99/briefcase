import React from "react";
import CardProyect from "./CardProyect";
const Modal = ({ children, modal, title }) => {
  return (
    <div className="modal fade bd-example-modal-lg" id={modal} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white">
            <label className="h5">{title}</label>
            <button
              className="btn btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
