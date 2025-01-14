import React from 'react';
import { tv } from 'tailwind-variants';
import { Link } from 'react-router-dom';
import { MessageCircleHeart, ShoppingCart } from 'lucide-react';

import Logo from '../../assets/logo.png';

const card = tv({
  slots: {
    container: 'flex justify-between items-center w-full h-16 md:h-20 px-6 md:px-8 xl:px-16 2xl:px-32 fixed top-0 left-0 z-40',
    containerIcons: 'flex items-center gap-4 md:gap-8',
    logo: 'w-10 h-10 md:w-12 md:h-12',
    icon: 'w-6 h-6 md:w-8 md:h-8 text-white hover:text-primary-red cursor-pointer duration-200'
  }
});

const { container, logo, containerIcons, icon } = card();

export default function Navbar({ screen, setShowModal }) {
  return (
    <div className={container()}>
      <Link to='/'>
        <img className={logo()} src={Logo} alt="Logo da pizzaria DevPizza" />
      </Link>

      <div className={containerIcons()}>
        {screen !== 'home' && (
          <ShoppingCart className={icon()} onClick={() => setShowModal(true)} />
        )}

        <MessageCircleHeart className={icon()} />
      </div>
    </div>
  )
}