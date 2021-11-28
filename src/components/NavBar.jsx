import React from "react";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";

const NavBar =()=>{

return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid bg-success">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />DinoTienda
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Dino Ofertas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Top Dino Vendidos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dino Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">La Era del Hielo</a></li>
            <li><a className="dropdown-item" href="#">Dinosaurios</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Dino Documentos</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Dino Registro</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
)
}


export default NavBar