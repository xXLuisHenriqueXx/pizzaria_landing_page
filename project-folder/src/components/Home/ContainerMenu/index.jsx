import React from 'react'
import { Link } from 'react-router-dom'
import { tv } from 'tailwind-variants';
import { BiFoodMenu } from "react-icons/bi";

const card = tv({
    slots: {
        container: 'mt-12 mx-5 p-5 md:mx-10 md:p-10 lg:absolute lg:right-0 lg:bottom-20 xl:p-12 xl:right-10 2xl:right-10 2xl:bottom-32 w-[90%] h-48 md:w-[80%] md:h-56 lg:w-500 lg:h-80 2xl:w-700 2xl:h-400 flex flex-col justify-center  bg-box-background shadow-red rounded-md',
        menuText: 'text-sm text-center font-inter font-bold text-white md:text-lg lg:text-xl',
        link: 'mt-10 gap-4 lg:mt-20 xl:mt-28 2xl:mt-32 w-full h-12 md:h-14 lg:h-20 xl:h-24 flex items-center justify-center bg-primary-red rounded-md text-white text-md font-inter font-bold lg:text-base xl:text-xl hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200',
        icon: 'w-6 h-6 text-white lg:w-8 lg:h-8 xl:w-10 xl:h-10'
    }
});

const { container, menuText, link, icon } = card();

export default function ContainerMenu() {
    return (
        <div className={container()}>
            <h2 className={menuText()}>
                Acesse nosso cardápio clicando no botão abaixo!
            </h2>

            <Link className={link()} to="/menu">
                Visualizar CARDÁPIO

                <BiFoodMenu className={icon()}/>
            </Link>
        </div>
    )
}
