import React from "react";
import Navbar from "../../components/Navbar";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import ContainerMenu from "../../components/Home/ContainerMenu";

export default function Home() {
    return (
        <div className="
            flex flex-col items-center justify-center
            lg:flex-row lg:justify-between lg:items-start
            w-full h-screen
            bg-main bg-cover bg-center bg-no-repeat
        ">
            <Navbar screen={'home'} />
            <div className="
                px-5
                md:px-10
                lg:mt-32
                xl:pl-20
                2xl:pl-42 2xl:mt-40
            ">
                <div>
                    <h2 className="
                        text-2xl text-center font-inter text-white
                        md:text-4xl
                        lg:text-5xl lg:text-left
                        xl:text-6xl
                        2xl:text-7xl
                    ">
                        Seja bem-vindo(a) ao
                    </h2>
                    <h1 className="
                        text-8xl text-center font-karantina text-primary-red
                        md:text-9xl
                        lg:text-10xl lg:text-left
                        xl:text-11xl
                        2xl:text-13xl
                    ">
                        DEVPIZZA
                    </h1>
                </div>

                <div className="mt-6">
                    <h2 className="
                        text-sm text-center text-wrap font-inter text-white indent-4
                        md:text-lg
                        lg:text-md lg:text-left lg:w-96 lg:mt-5
                        xl:text-lg xl:w-500 xl:mt-8
                        2xl:text-2xl 2xl:mt-12
                    ">
                        Somos uma pizzaria presente a 2 anos no mercado alimentício, sempre buscando trazer uma experiência gastronômica de qualidade, com sabores inesquecíveis aos nossos clientes!
                    </h2>

                    <div className="mt-6 
                        md:flex md:flex-col md:items-center
                        lg:items-start
                        xl:mt-10
                        2xl:mt-12
                    ">
                        <div className="flex items-center">
                            <FaClock className="w-4 h-4 text-white 
                                md:w-6 md:h-6
                                lg:w-4 lg:h-4
                                xl:w-6 xl:h-6
                                2xl:w-8 2xl:h-8"
                            />
                            <h2 className="
                                ml-2 text-white
                                text-xs font-inter font-bold
                                md:text-base
                                lg:text-sm
                                xl:text-base
                                2xl:text-lg
                            ">
                                Aberto SEG -SEX / 18h - 22h
                            </h2>
                        </div>
                        <div className="
                            flex items-center
                            mt-2
                            xl:mt-4
                        ">
                            <FaMapMarkerAlt
                                className="w-4 h-4 text-white 
                                md:w-6 md:h-6
                                lg:w-4 lg:h-4
                                xl:w-6 xl:h-6
                                2xl:w-8 2xl:h-8
                            "/>
                            <h2
                                className="
                                ml-2 text-white
                                text-xs font-inter font-bold
                                md:text-base
                                lg:text-sm
                                xl:text-base
                                2xl:text-lg
                            ">
                                Localizado em Rua do Desenvolvedor, 10, DevLand
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <ContainerMenu />
        </div>
    );
}