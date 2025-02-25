import React from "react";
import { tv } from "tailwind-variants";

const card = tv({
  slots: {
    container:
      "flex items-center justify-between lg:flex-col w-full md:w-1/2 lg:w-60 xl:w-72 2xl:w-80 h-32 lg:h-72 xl:h-80 2xl:h-450 px-10 lg:px-0 lg:py-8 2xl:py-14 mt-4 md:mx-auto lg:mx-0 bg-box-background rounded-sm hover:scale-105 cursor-pointer transition duration-200",
    image:
      "w-24 h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 p-2 2xl:p-4 bg-box-background-darker rounded-sm",
    title:
      "text-xl xl:text-3xl 2xl:text-4xl font-imbue font-bold lg:text-center text-primary-red uppercase",
    normalText:
      "text-sm xl:text-base 2xl:text-lg font-inter font-regular text-white lg:mt-0 opacity-75",
  },
});

const { container, image, title, normalText } = card();

export default function ContainerSize({ size, setSelectedSize, setSizePrice }) {
  const handleSelectSize = (size) => {
    setSelectedSize(size.value);
    setSizePrice(size.price);
  };

  return (
    <div
      className={container()}
      key={size.id}
      onClick={() => handleSelectSize(size)}
    >
      <img className={image()} src={size.imgSrc} alt={size.imgAlt} />

      <div>
        <div>
          <h1 className={title()}>{size.title}</h1>
        </div>

        <div className={normalText()}>
          {/* <p>+ {size.hungry}</p> */}
          <p>+ {size.slices}</p>
          <p>+ {size.size}</p>
          <p>+ {size.numFlavors}</p>
        </div>
      </div>
    </div>
  );
}
