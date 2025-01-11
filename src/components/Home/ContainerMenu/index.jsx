import React from 'react'
import { Link } from 'react-router-dom'
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        container: 'flex flex-col justify-center w-full h-48 md:w-[80%] md:h-56 lg:w-500 lg:h-80 2xl:w-700 2xl:h-400 mt-12 p-4 md:p-8 xl:p-12 lg:absolute lg:right-12 lg:bottom-20 xl:right-16 2xl:right-32 2xl:bottom-32 bg-box-background shadow-red rounded-md',
        menuText: 'text-xs md:text-md lg:text-lg text-center text-white font-inter font-semibold uppercase',
        link: 'flex items-center justify-center w-full h-12 md:h-14 lg:h-20 xl:h-24 mt-10 lg:mt-20 xl:mt-28 2xl:mt-32 gap-4 md:gap-8 xl:gap-16 bg-primary-red rounded-md hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200',
        linkText: 'text-white text-base lg:text-md xl:text-lg font-inter font-bold uppercase',
    }
});

const { container, menuText, link, linkText } = card();

export default function ContainerMenu() {
    return (
        <div className={container()}>
            <h2 className={menuText()}>
                Acesse nosso cardápio clicando no botão abaixo!
            </h2>

            <Link className={link()} to="/menu">
                <div className={linkText()}>Visualizar CARDÁPIO</div>
            </Link>
        </div>
    )
}
