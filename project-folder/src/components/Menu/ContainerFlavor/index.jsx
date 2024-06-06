import React from 'react'
import { FaCartPlus } from "react-icons/fa6";

function ContainerFlavor({ pizza }) {
    return (
        <div
            key={pizza._id}
            className="
            w-full h-36 mt-4
            md:w-[95%]
            xl:w-600 xl:h-200
            flex items-center justify-center gap-4
            xl:gap-10
            2xl:w-550 2xl:h-200
            bg-box-background border-2 border-border-red rounded-3xl"
        >
            <img
            className="w-24 h-24 rounded-md object-cover
            xl:w-40 xl:h-40"
            src={pizza.imgSrc}
            alt={pizza.imgAlt}
            />
            <div className="w-1/3">
                <h1 className="text-primary-red text-xl xl:text-4xl font-imbue font-bold">
                    {pizza.title}
                </h1>
                <h2 className="text-white text-xs xl:text-base font-inter">
                    <strong>Ingredientes:</strong> {pizza.ingredients}
                </h2>
            </div>
            <div className="text-white text-2xl xl:text-4xl bg-primary-red p-4 rounded-full hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200">
                <FaCartPlus />
            </div>
        </div>
    )
}

export default ContainerFlavor;