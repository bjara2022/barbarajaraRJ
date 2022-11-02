import React from 'react'
import logo from '../../assets/carro.jpg'
import './CarWidget.css'
const CartWidget = () => {
  return (
    <div className='menu_navbar__logo'>
        <img className='menu-navbar__imagen' src={logo} alt="cart widget"></img>
    </div>
  )
}

export default CartWidget