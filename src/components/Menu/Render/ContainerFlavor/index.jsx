import React from 'react';
import { tv } from 'tailwind-variants';
import { FaCartPlus } from "react-icons/fa6";

const card = tv({
    slots: {
        container: 'flex items-center justify-center w-full h-32 md:w-[95%] xl:h-44 2xl:w-550 2xl:h-200 mt-4 gap-4 xl:gap-10 bg-box-background rounded-md',
        image: 'w-24 h-24 xl:w-28 xl:h-28 2xl:w-40 2xl:h-40 rounded-md object-cover',
        title: 'text-xl xl:text-4xl font-imbue font-bold text-primary-red',
        normalText: 'text-xs xl:text-base font-inter text-white',
        button: 'p-4 text-2xl xl:text-4xl text-white bg-primary-red rounded-full hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200'
    }
});

const { container, image, title, normalText, button } = card();

export default function ContainerFlavor({ pizza, handleSelectFlavor }) {
    return (
        <div className={container()} key={pizza._id}>
            <img className={image()} src={pizza.imgSrc} alt={pizza.imgAlt} />

            <div className="w-1/3">
                <h1 className={title()}>
                    {pizza.title}
                </h1>

                <h2 className={normalText()}>
                    <strong>Ingredientes:</strong> {pizza.ingredients}
                </h2>
            </div>

            <div className={button()} onClick={() => handleSelectFlavor(pizza)}>
                <FaCartPlus />
            </div>
        </div>
    )
}