import React from 'react'
import { BiFoodMenu, BiLogoWhatsapp } from 'react-icons/bi'
import { BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'

const icon = "w-8 h-8 text-white md:w-10 md:h-10 hover:text-primary-red cursor-pointer duration-200"

function Navbar({ screen, setShowModal }) {
  return (
    <div className="
      w-full h-16 px-5
      md:h-20 md:px-10
      xl:px-20
      2xl:px-42
      fixed top-0 left-0
      flex justify-between items-center
      z-40
    ">
      <Link to='/'>
        <img
          className="
            w-10 h-10
            md:w-14 md:h-14"
          src={Logo}
          alt="Logo da pizzaria DevPizza"
        />
      </Link>
      <div className="
        flex items-center
        gap-4
      ">
        { screen === 'home' ? (
          <Link to="/menu">
            <BiFoodMenu
              className={icon}
            />
          </Link>
        ) : (
          <BiCart
            onClick={() => setShowModal(true)}
            className={icon}
          />
        )}
        <BiLogoWhatsapp
          className={icon}
        />
      </div>
    </div>
  )
}

export default Navbar