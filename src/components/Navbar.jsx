import CardWidchet from "./CarWidchet";
import LogoWidchet from "./LogoWidchet";   
import "./styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <LogoWidchet />
      </div>
      <ul className="navbar__links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#product">Productos</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contactos</a></li>
        <li className="navbar__cart"><CardWidchet /></li>
      </ul>
    </nav>
  );
}   

export default Navbar;