import React from "react";
import { tv } from "tailwind-variants";
import { Clock, MapPin } from "lucide-react";

const card = tv({
  slots: {
    container: "flex flex-col mt-6 2xl:mt-12",
    containerIntroduceText: "w-full lg:w-96 xl:w-600 2xl:w-700",
    containerIcons:
      "w-full md:flex md:flex-col md:items-center lg:items-start mt-8 2xl:mt-16",
    containerSingleIcon: "flex items-center",
    introduceText:
      "text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl lg:indent-8 text-center lg:text-left text-wrap font-inter text-white opacity-75",
    icon: "w-4 h-4 md:w-6 md:h-6 lg:w-4 lg:h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 text-white",
    textIcon:
      "ml-2 text-xs md:text-sm lg:text-base xl:text-md 2xl:text-lg font-inter font-semibold text-white ",
  },
  variants: {
    singleIcon: {
      second: {
        containerSingleIcon: "mt-4 2xl:mt-6",
      },
    },
  },
});

const {
  container,
  containerIntroduceText,
  introduceText,
  containerIcons,
  containerSingleIcon,
  icon,
  textIcon,
} = card();

export default function ContainerTextInfo() {
  return (
    <div className={container()}>
      <div className={containerIntroduceText()}>
        <h2 className={introduceText()}>
          Estamos há 2 anos no mercado alimentício, dedicados a oferecer uma
          experiência gastronômica de alta qualidade. Nosso foco é proporcionar
          sabores inesquecíveis, com pratos preparados com cuidado e
          ingredientes selecionados para garantir a satisfação de nossos
          clientes.
        </h2>
      </div>

      <div className={containerIcons()}>
        <div className={containerSingleIcon()}>
          <Clock className={icon()} />

          <h2 className={textIcon()}>Aberto de SEG à SEX das 18h às 22h</h2>
        </div>

        <div className={containerSingleIcon({ singleIcon: "second" })}>
          <MapPin className={icon()} />

          <h2 className={textIcon()}>
            Localizado em Rua do Desenvolvedor, 10, DevLand
          </h2>
        </div>
      </div>
    </div>
  );
}
