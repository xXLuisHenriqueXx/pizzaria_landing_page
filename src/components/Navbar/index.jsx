import React from 'react';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { tv } from 'tailwind-variants';

import Logo from '../../assets/logo.png';

const nav = tv({
  slots: {
    container: 'flex justify-between items-center w-full h-16 md:h-20 px-4 md:px-8 xl:px-16 2xl:px-32 fixed top-0 left-0 z-40',
    logo: 'w-10 h-10 md:w-14 md:h-14',
    iconsContainer: 'flex items-center gap-4',
    icon: 'w-8 h-8 md:w-10 md:h-10 text-white hover:text-primary-red cursor-pointer duration-200'
  }
});

const { container, logo, iconsContainer, icon } = nav();

function Navbar({ screen, setShowModal }) {
  return (
    <div className={container()}>
      <Link to='/'>
        <img className={logo()}
          src={Logo}
          alt="Logo da pizzaria DevPizza"
        />
      </Link>
      <div className={iconsContainer()}>
        {screen !== 'home' && (
          <BiCart className={icon()}
            onClick={() => setShowModal(true)}
          />
        )}
        <BiLogoWhatsapp className={icon()} />
      </div>
    </div>
  )
}

export default Navbar