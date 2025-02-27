import { Pizza, Ruler, Salad } from "lucide-react";
import React from "react";
import { tv } from "tailwind-variants";

const card = tv({
  slots: {
    container:
      "flex items-center justify-around self-center w-full max-w-92 md:w-1/2 lg:w-[32%] 2xl:w-400 2xl:max-w-400 3xl:w-500 3xl:max-w-500 h-32 xl:h-42 2xl:h-48 3xl:h-54 px-10 mt-4 md:mx-auto bg-box-background rounded-sm hover:scale-105 cursor-pointer transition duration-200",
    image:
      "w-24 h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 p-2 2xl:p-4 bg-box-background-darker rounded-sm",
    title:
      "text-xl xl:text-3xl 2xl:text-4xl font-imbue font-bold text-primary-red uppercase",
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
          <p className="flex items-center mt-2">
            <Pizza size={20} className="mr-2" />
            {size.slices}
          </p>
          <p className="flex items-center mt-2">
            <Ruler size={20} className="mr-2" />
            {size.size}
          </p>
          <p className="flex items-center mt-2">
            <Salad size={20} className="mr-2" />
            {size.numFlavors}
          </p>
        </div>
      </div>
    </div>
  );
}
