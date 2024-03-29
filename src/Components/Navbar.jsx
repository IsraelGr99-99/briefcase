import Link from "../Components/Link";
import "../stylesheets/navbar.css";
//import "../stylesheets/navBar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid container-navbar">
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="navbarSupportedContent"
        >
          <span class="fa-solid fa-bars-staggered"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto mb-2">
            <li className="nav-item px-lg-5">
              <Link href="#about" className="nav-link" text="/* Acerca" />
            </li>
            <li className="nav-item px-lg-5">
              <Link href="#proyects" className="nav-link" text="Proyectos" />
            </li>
            <li className="nav-item px-lg-5">
              <Link href="#contact" className="nav-link" text="Contacto" />
            </li>
            <li className="nav-item px-lg-5">
              <Link
                href="#contact"
                className="nav-link"
                text="Configuración */"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
