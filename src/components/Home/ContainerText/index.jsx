import React from "react";
import { tv } from "tailwind-variants";

import ContainerTextInfo from "./ContainerTextInfo";

const card = tv({
  slots: {
    container: "lg:mt-32",
    title:
      "text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-13xl text-center lg:text-left font-karantina text-primary-red",
    normalText:
      "text-xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center lg:text-left font-inter font-semibold text-white",
  },
});

const { container, title, normalText } = card();

export default function ContainerText() {
  return (
    <div className={container()}>
      <div>
        <h2 className={normalText()}>Seja bem-vindo(a) ao</h2>

        <h1 className={title()}>DEVPIZZA</h1>
      </div>

      <ContainerTextInfo />
    </div>
  );
}
