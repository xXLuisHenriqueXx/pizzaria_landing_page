import React from 'react';
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        container: 'flex items-center justify-center lg:flex-col w-full h-32 md:w-2/3 md:mx-auto lg:w-60 lg:h-72 xl:w-80 xl:h-96 2xl:h-450 mt-4 gap-10 lg:gap-2 xl:gap-4 bg-box-background rounded-md hover:shadow-red cursor-pointer transition duration-200',
        image: 'w-24 h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 p-2 2xl:p-4 bg-box-background-darker rounded-md',
        title: 'text-2xl xl:text-4xl 2xl:text-5xl font-imbue font-bold lg:text-center text-primary-red',
        normalText: 'text-sm xl:text-lg 2xl:text-2xl text-white -mt-1 lg:mt-0'
    }
})

const { container, image, title, normalText } = card();

function ContainerSize({ size, setSelectedSize, setSizePrice}) {
  return (
    <div className={container()}
        key={size._id}
        onClick={() => {
            setSelectedSize(size.value)
            setSizePrice(size.price)
        }}
    >
        <img className={image()}
            src={size.imgSrc}
            alt={size.imgAlt}
        />

        <div>
            <div>
                <h1 className={title()}>
                    {size.title}
                </h1>
            </div>
            <div className={normalText()}>
                <li>{size.hungry}</li>
                <li>{size.slices}</li>
                <li>{size.size}</li>
                <li>{size.numFlavors}</li>
            </div>
        </div>
    </div>
  )
}

export default ContainerSize;