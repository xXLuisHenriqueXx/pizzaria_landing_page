import React from 'react'
import Logo from "../../../assets/logo.png";

function Header() {
    return (
        <header className="
            flex flex-col items-center justify-center
            w-full h-52
            lg:h-80
            bg-header bg-cover bg-center bg-no-repeat"
        >
            <img
                className="
                w-32 h-32
                lg:w-48 lg:h-48"
                src={Logo}
                alt="Logo da pizzaria DevPizza"
            />

            <div className="
                mt-2 p-1 bg-box-green border-2 border-border-green rounded-md"
            >
                <h2 className="
                    text-white text-xs font-inter font-bold
                    lg:text-sm
                    xl:text-base
                    2xl:text-lg"
                >
                    Seg - Sex / 18h - 22h
                </h2>
            </div>

            <h2 className="
                mt-2
                text-white text-xs font-inter font-semibold
                lg:text-sm
                xl:text-base
                2xl:text-lg"
            >
                Localizado em Rua do Desenvolvedor, 10, DevLand
            </h2>
        </header>
    )
}

export default Header