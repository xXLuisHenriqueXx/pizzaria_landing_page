import React from 'react';
import { tv } from 'tailwind-variants';
import { Plus } from 'lucide-react';

const card = tv({
    slots: {
        container: 'flex items-center justify-between w-full h-32 xl:h-44 2xl:h-200 mt-4 xl:mt-8 px-4 lg:px-8 xl:px-10 bg-box-background rounded-xs',
        image: 'w-20 h-20 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 rounded-xs border-2 border-dashed border-primary-red bg-white object-cover',
        title: 'text-xl xl:text-4xl font-imbue font-bold text-primary-red',
        normalText: 'text-xs xl:text-base font-inter font-regular text-white opacity-75',   
        button: ' flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 bg-primary-red rounded-full hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200',
        icon: 'w-6 h-6 xl:w-8 xl:h-8 text-white'
    }
});

const { container, image, title, normalText, button, icon } = card();

export default function ContainerFlavor({ pizza, handleSelectFlavor }) {
    return (
        <div className={container()} key={pizza._id}>
            <img className={image()} src={pizza.imgSrc} alt={pizza.imgAlt} />

            <div className="w-1/2">
                <h1 className={title()}>
                    {pizza.title}
                </h1>

                <h2 className={normalText()}>
                    {pizza.ingredients}
                </h2>
            </div>

            <div className={button()} onClick={() => handleSelectFlavor(pizza)}>
                <Plus className={icon()} strokeWidth={3} />
            </div>
        </div>
    )
}