import React from 'react'
import Logo from "../../../assets/logo.png";
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        container: 'flex flex-col items-center justify-center w-full h-52 2xl:h-80 bg-header bg-cover bg-center bg-no-repeat',
        logo: 'w-32 h-32 2xl:w-48 2xl:h-48',
        infoBox: 'mt-2 mb-2 p-1 bg-box-green border-2 border-border-green rounded-md',
        normalText: 'text-white text-xs font-inter font-semibold lg:text-sm 2xl:text-lg',
        spanGreen: 'text-border-green'
    }
});

const { container, logo, infoBox, normalText, spanGreen } = card();

function Header() {
    return (
        <header className={container()}>
            <img
                className={logo()}
                src={Logo}
                alt="Logo da pizzaria DevPizza"
            />

            <div className={infoBox()}>
                <h2 className={normalText()}>
                    Seg - Sex <span className={spanGreen()}>|</span> 18h - 22h
                </h2>
            </div>

            <h2 className={normalText()}>
                Localizado em Rua do Desenvolvedor, 10, DevLand
            </h2>
        </header>
    )
}

export default Header