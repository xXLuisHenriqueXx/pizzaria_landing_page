import React from 'react'
import { FaCartPlus } from 'react-icons/fa6'

function ContainerDrinks({ drink }) {
  return (
    <div
        key={drink._id}
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
        src={drink.imgSrc}
        alt={drink.imgAlt}
        />
        <div className="w-1/3">
            <h1 className="text-primary-red text-xl xl:text-4xl font-imbue font-bold">
                {drink.title}
            </h1>
            <h1 className="text-white text-base xl:text-xl mt-2 xl:mt-6 font-inter font-bold">
                R$ {drink.price.toFixed(2)}
            </h1>
        </div>
        <div className="text-white text-2xl xl:text-4xl bg-primary-red p-4 rounded-full hover:bg-highlight-red hover:shadow-red cursor-pointer duration-200">
            <FaCartPlus />
        </div>
    </div>
  )
}

export default ContainerDrinks