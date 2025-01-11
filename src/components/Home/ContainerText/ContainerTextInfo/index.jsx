import React from 'react';
import { tv } from 'tailwind-variants';
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const card = tv({
    slots: {
        container: 'mt-8',
        containerIntroduceText: 'lg:w-96 lg:mt-5 xl:w-500 xl:mt-8 2xl:mt-12',
        containerIcons: 'mt-8 md:flex md:flex-col md:items-center lg:items-start xl:mt-10 2xl:mt-12',
        containerSingleIcon: 'flex items-center mt-2 xl:mt-4',
        introduceText: 'text-sm md:text-lg lg:text-md xl:text-lg 2xl:text-2xl lg:indent-4 text-center lg:text-left text-wrap font-inter text-white',
        icon: 'w-4 h-4 md:w-6 md:h-6 lg:w-4 lg:h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 text-white',
        textIcon: 'ml-2 text-xs md:text-base lg:text-sm xl:text-base 2xl:text-lg font-inter font-semibold text-white '
    }
});

const { container, containerIntroduceText, introduceText, containerIcons, containerSingleIcon, icon, textIcon } = card();

export default function ContainerTextInfo() {
    return (
        <div className={container()}>
            <div className={containerIntroduceText()}>
                <h2 className={introduceText()}>
                    Somos uma pizzaria presente a 2 anos no mercado alimentício, sempre buscando trazer uma experiência gastronômica de qualidade, com sabores inesquecíveis aos nossos clientes!
                </h2>
            </div>


            <div className={containerIcons()}>
                <div className={containerSingleIcon()}>
                    <FaClock className={icon()} />

                    <h2 className={textIcon()}>
                        Aberto SEG -SEX / 18h - 22h
                    </h2>
                </div>

                <div className={containerSingleIcon()}>
                    <FaMapMarkerAlt className={icon()} />
                    
                    <h2 className={textIcon()}>
                        Localizado em Rua do Desenvolvedor, 10, DevLand
                    </h2>
                </div>
            </div>
        </div>
    )
}
