import React from 'react'
import { BiFoodMenu, BiLogoWhatsapp } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='
        w-full h-16 px-5
        md:h-20 md:px-10
        xl:px-20
        2xl:px-42
        fixed top-0 left-0
        flex justify-between items-center
    '>
      <div>
        <img
          className='
            w-10 h-10
            md:w-14 md:h-14'
          src="src/assets/logo.png"
          alt="Logo da pizzaria DevPizza"
        />
      </div>
      <div className='
            flex items-center
            gap-4
          '
      >
        <Link to="/menu">
          <BiFoodMenu
            className='
              w-8 h-8 text-white
              md:w-10 md:h-10'
          />
        </Link>
        <BiLogoWhatsapp
          className='
              w-8 h-8 text-white
              md:w-10 md:h-10'
        />
      </div>
    </div>
  )
}

export default Navbar