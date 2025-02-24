import React from 'react'
import { tv } from 'tailwind-variants';
import { Link } from 'react-router-dom'
import { Pizza } from 'lucide-react';

const card = tv({
    slots: {
        container: 'flex flex-col justify-center w-full h-48 md:h-56 lg:w-500 lg:h-80 xl:h-250 2xl:w-700 2xl:h-300 mt-12 p-4 md:p-8 gap-y-8 md:gap-y-16 2xl:gap-y-24 lg:absolute lg:right-12 lg:bottom-20 xl:right-16 2xl:right-32 2xl:bottom-52 bg-box-background rounded-xs',
        menuText: 'text-xs md:text-sm 2xl:text-lg text-center text-white font-inter font-bold uppercase',
        buttonLink: 'relative flex items-center justify-center w-full h-12 2xl:h-16 bg-primary-red rounded-xs hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200',
        buttonLinkText: 'text-white text-sm lg:text-base 2xl:text-lg font-inter font-semibold uppercase',
        buttonLinkIcon: 'absolute right-4 md:right-8 w-6 h-6 lg:w-8 lg:h-8 text-white'
    }
});

const { container, menuText, buttonLink, buttonLinkText, buttonLinkIcon } = card();

export default function ContainerMenu() {
    return (
        <div className={container()}>
            <h2 className={menuText()}>
                Acesse nosso cardápio clicando no botão abaixo
            </h2>

            <Link className={buttonLink()} to="/menu">
                <div className={buttonLinkText()}>Visualizar CARDÁPIO</div>

                <Pizza className={buttonLinkIcon()} />
            </Link>
        </div>
    )
}
