import React from 'react'

function ContainerSize({ size, setSelectedSize, setSizePrice}) {
  return (
    <div
    key={size._id}
    onClick={() => {
        setSelectedSize(size.value)
        setSizePrice(size.price)
    }}
    className="
        w-full h-36 mt-4
        md:w-2/3 md:mx-auto
        lg:w-60 lg:h-72
        xl:w-80 xl:h-450
        flex items-center justify-center gap-10
        lg:flex-col lg:gap-2
        xl:gap-6
        bg-box-background rounded-lg
        hover:shadow-red cursor-pointer transition duration-200
    ">
        <img
        className="
            w-24 h-24
            xl:w-40 xl:h-40
            p-2 bg-box-background-darker rounded-lg
            xl:p-4"
        src={size.imgSrc}
        alt={size.imgAlt}
        />

        <div>
            <div>
                <h1 className="text-primary-red text-2xl xl:text-5xl font-imbue font-bold lg:text-center">
                    {size.title}
                </h1>
            </div>
            <div className="text-white text-sm xl:text-2xl">
                <li>{size.hungry}</li>
                <li>{size.slices}</li>
                <li>{size.size}</li>
                <li>{size.numFlavors}</li>
            </div>
        </div>
    </div>
  )
}

export default ContainerSize