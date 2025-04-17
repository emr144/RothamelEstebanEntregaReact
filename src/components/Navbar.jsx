import React from "react";
import CardWidchet from "./CarWidchet";
import LogoWidchet from "./LogoWidchet";   
import "./styles/App.css";
// filepath: src/components/Navbar.jsx
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <LogoWidchet />
      </div>
      <ul className="navbar__links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/contact">Contactos</Link></li>
        <li className="navbar__cart"><CardWidchet /></li>
      </ul>
    </nav>
  );
}   

export default Navbar;