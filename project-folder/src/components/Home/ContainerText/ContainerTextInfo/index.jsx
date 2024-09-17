import React from 'react';
import { tv } from 'tailwind-variants';
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const card = tv({
    slots: {
        mainContainer: 'mt-6',
        introduceText: 'text-sm text-center text-wrap font-inter text-white indent-4 md:text-lg lg:text-md lg:text-left lg:w-96 lg:mt-5 xl:text-lg xl:w-500 xl:mt-8 2xl:text-2xl 2xl:mt-12',
        iconsContainer: 'mt-6 md:flex md:flex-col md:items-center lg:items-start xl:mt-10 2xl:mt-12',
        singleIconContainer: 'flex items-center mt-2 xl:mt-4',
        icon: 'w-4 h-4 text-white md:w-6 md:h-6 lg:w-4 lg:h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8',
        textIcon: 'ml-2 text-white text-xs font-inter font-bold md:text-base lg:text-sm xl:text-base 2xl:text-lg'
    }
});

const { mainContainer, introduceText, iconsContainer, singleIconContainer, icon, textIcon } = card();

export default function ContainerTextInfo() {
    return (
        <div className={mainContainer()}>
            <h2 className={introduceText()}>
                Somos uma pizzaria presente a 2 anos no mercado alimentício, sempre buscando trazer uma experiência gastronômica de qualidade, com sabores inesquecíveis aos nossos clientes!
            </h2>

            <div className={iconsContainer}>
                <div className={singleIconContainer()}>
                    <FaClock className={icon()}/>

                    <h2 className={textIcon()}>
                        Aberto SEG -SEX / 18h - 22h
                    </h2>
                </div>
                <div className={singleIconContainer()}>
                    <FaMapMarkerAlt className={icon()}/>
                    <h2 className={textIcon()}>
                        Localizado em Rua do Desenvolvedor, 10, DevLand
                    </h2>
                </div>
            </div>
        </div>
    )
}
