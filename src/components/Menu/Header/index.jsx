import React from 'react'
import { tv } from 'tailwind-variants';

import Logo from "../../../assets/logo.png";

const card = tv({
    slots: {
        container: 'relative flex flex-col items-center justify-center w-full h-48 2xl:h-80 bg-header bg-cover bg-center bg-no-repeat z-2',
        overlay: 'absolute inset-0 bg-slate-900 opacity-30 z-3',
        logo: 'w-28 h-28 2xl:w-48 2xl:h-48 z-4',
        infoBox: 'my-2 p-1 bg-box-green border-2 border-border-green rounded-sm z-4',
        normalText: 'text-xs lg:text-sm 2xl:text-lg font-inter font-medium text-white z-4',
        spanGreen: 'text-border-green font-bold mx-1 z-4'
    }
});

const { container, overlay, logo, infoBox, normalText, spanGreen } = card();

export default function Header() {
    return (
        <header className={container()}>
                <img className={logo()} src={Logo} alt="Logo da pizzaria DevPizza" />

                <div className={infoBox()}>
                    <h2 className={normalText()}>
                        Seg - Sex <span className={spanGreen()}>|</span> 18h - 22h
                    </h2>
                </div>

                <h2 className={normalText()}>
                    Localizado em Rua do Desenvolvedor, 10, DevLand
                </h2>
            <div className={overlay()} />
        </header>
    )
}
