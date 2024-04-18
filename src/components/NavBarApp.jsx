import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const NavBarApp =() => {
 return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class='nav-item'>
            <a href="/" class="nav-link">Perfil</a>
        </li>
        <li class='nav-item'>
            <a href="/contacto" class="nav-link">Contacto</a>
        </li>
        <li class='nav-item'>
            <a href="/formacion" class="nav-link">Formacion</a>
        </li>
        <li class='nav-item'>
            <a href="/experiencia" class="nav-link">Experiencia</a>
        </li>
        <li class='nav-item'>
            <a href="/portafolio" class="nav-link">Portafolio</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
 )
}