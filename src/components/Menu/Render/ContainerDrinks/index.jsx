import React from "react";
import { tv } from "tailwind-variants";
import { Plus } from "lucide-react";

const card = tv({
  slots: {
    container:
      "flex items-center justify-between w-full h-32 xl:h-44 2xl:h-200 mt-4 xl:mt-8 px-4 lg:px-8 xl:px-10 bg-box-background rounded-sm",
    image:
      "w-20 h-20 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 rounded-sm border-2 border-dashed border-primary-red bg-white object-contain",
    title: "text-xl lg:text-2xl font-imbue font-bold text-primary-red",
    normalText:
      "text-sm lg:text-lg font-inter font-regular text-white opacity-75",
    button:
      " flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 bg-primary-red rounded-full hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200",
    icon: "w-6 h-6 xl:w-8 xl:h-8 text-white",
  },
});

const { container, image, title, normalText, button, icon } = card();

export default function ContainerDrinks({ drink, handleSelectDrink }) {
  return (
    <div className={container()} key={drink._id}>
      <img className={image()} src={drink.imgSrc} alt={drink.imgAlt} />

      <div className="w-1/2">
        <h1 className={title()}>{drink.title}</h1>

        <h1 className={normalText()}>R$ {drink.price.toFixed(2)}</h1>
      </div>

      <div className={button()} onClick={() => handleSelectDrink(drink)}>
        <Plus className={icon()} strokeWidth={3} />
      </div>
    </div>
  );
}
