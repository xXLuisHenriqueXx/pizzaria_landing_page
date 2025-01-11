import React from 'react';
import { FaCartPlus } from 'react-icons/fa6'
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        container: 'flex items-center justify-center w-full h-32 md:w-[95%] xl:h-44 2xl:w-550 2xl:h-200 mt-4 gap-4 xl:gap-10 bg-box-background rounded-md',
        image: 'w-24 h-24 xl:w-28 xl:h-28 2xl:w-40 2xl:h-40 rounded-md object-cover',
        title: 'text-xl xl:text-4xl font-imbue font-bold text-primary-red',
        price: 'mt-2 xl:mt-6 text-base xl:text-xl font-inter font-bold text-white',
        button: 'p-4 text-2xl xl:text-4xl text-white bg-primary-red rounded-full hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200'
    }
});

const { container, image, title, price, button } = card();

function ContainerDrinks({ drink, handleSelectDrink }) {
    return (
        <div className={container()}
            key={drink._id}
        >
            <img
                className={image()}
                src={drink.imgSrc}
                alt={drink.imgAlt}
            />
            <div className="w-1/3">
                <h1 className={title()}>
                    {drink.title}
                </h1>
                <h1 className={price()}>
                    R$ {drink.price.toFixed(2)}
                </h1>
            </div>
            <div className={button()}
                onClick={() => handleSelectDrink(drink)}
            >
                <FaCartPlus />
            </div>
        </div>
    )
}

export default ContainerDrinks