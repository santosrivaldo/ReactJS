import React from "react"
import './header.css';

function Header() {
    return (
    <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand">Gerencia Backup</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" tsype="search" placeholder="Pesquisa" aria-label="Pesquisa"/>
        <button class="btn btn-outline" type="submit">Pesquisa</button>
      </form>
    </div>
  </nav>
);
}


export default Header;
