import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'
const Navbar = () => {
  return (
    <div className='menu-navbar-coneiner'>
         <h1 className= 'menu-title'> Fructusos Tattoo </h1>
    <ul className='menu-items'>
        <li>
            <a href='' className='menu-list'>Productos</a>
        </li>
        <li>
            <a href='' className='menu-list'>Buscar</a>
        </li>
        <li>
            <a href='' className='menu-list'>Mis Pedidos</a>
        </li>
    </ul>
<CartWidget></CartWidget>
    </div>    
  )
}

export default Navbar