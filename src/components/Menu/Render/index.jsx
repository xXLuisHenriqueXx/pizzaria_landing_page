import React from 'react';
import { tv } from 'tailwind-variants';

import ContainerFlavor from "./ContainerFlavor";
import ContainerDrinks from "./ContainerDrinks";
import ContainerSize from "./ContainerSize";

// Tamanhos de pizza
import pizzaBroto from "../../../assets/sizes/pizza_broto.png";
import pizzaMedia from "../../../assets/sizes/pizza_media.png";
import pizzaFamilia from "../../../assets/sizes/pizza_familia.png";

// Sabores de pizza
import pizzaFrango from "../../../assets/flavors/pizza_frango.jpg";

// Bebidas
import coca from "../../../assets/drinks/coca_lata.jpg";
import guarana from "../../../assets/drinks/guarana_lata.jpeg";
import sucoLaranja from "../../../assets/drinks/suco_laranja.jpg";
import agua from "../../../assets/drinks/agua.jpg";
import schweppesZero from "../../../assets/drinks/schweppes_zero_lata.png"
import chaGelado from "../../../assets/drinks/cha_gelado.jpeg";

const pizzaSizes = [
    {
        _id: 1,
        value: 1,
        price: 24,
        title: "Broto",
        hungry: "Fome pequena;",
        slices: "4 pedaços;",
        size: "20 cm;",
        numFlavors: "1 sabor;",
        imgSrc: pizzaBroto,
        imgAlt: "Pizza broto"
    },
    {
        _id: 2,
        value: 3,
        price: 65,
        title: "Média",
        hungry: "Fome moderada;",
        slices: "16 pedaços;",
        size: "40 cm;",
        numFlavors: "3 sabores;",
        imgSrc: pizzaMedia,
        imgAlt: "Pizza média"
    },
    {
        _id: 3,
        value: 4,
        price: 85,
        title: "Família",
        hungry: "Fome gigante;",
        slices: "36 pedaços;",
        size: "70 cm;",
        numFlavors: "4 sabores;",
        imgSrc: pizzaFamilia,
        imgAlt: "Pizza família"
    }
];

const pizzaFlavors = [
    {
        _id: 1,
        title: "Frango",
        ingredients: "Molho de tomate, Mussarela, Frango, Cebola, Azeitonas",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de frango"
    },

    {
        _id: 2,
        title: "Margherita",
        ingredients: "Molho de tomate, Mussarela, Manjericão",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de margherita"
    },

    {
        _id: 3,
        title: "Pepperoni",
        ingredients: "Molho de tomate, Mussarela, Pepperoni",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de pepperoni"
    },

    {
        _id: 4,
        title: "Quatro Queijos",
        ingredients: "Molho de tomate, Mussarela, Parmesão, Gorgonzola, Provolone",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de quatro queijos"
    },

    {
        _id: 5,
        title: "Portuguesa",
        ingredients: "Molho de tomate, Mussarela, Presunto, Ovos, Cebola, Azeitonas",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de portuguesa"
    },

    {
        _id: 6,
        title: "Calabresa",
        ingredients: "Molho de tomate, Mussarela, Calabresa, Cebola",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de calabresa"
    },

    {
        _id: 7,
        title: "Frango com Catupiry",
        ingredients: "Molho de tomate, Mussarela, Frango, Catupiry",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de frango com catupiry"
    },

    {
        _id: 8,
        title: "Brigadeiro",
        ingredients: "Molho de tomate, Mussarela, Chocolate, Granulado",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de brigadeiro"
    }
];

const drinks = [
    {
        _id: 1,
        title: "Coca-Cola",
        price: 5,
        imgSrc: coca,
        imgAlt: "Lata de Coca-Cola"
    },
    {
        _id: 2,
        title: "Guaraná Antarctica",
        price: 4.5,
        imgSrc: guarana,
        imgAlt: "Lata de Guaraná Antarctica"
    },
    {
        _id: 3,
        title: "Suco de Laranja",
        price: 6,
        imgSrc: sucoLaranja,
        imgAlt: "Suco de laranja"
    },
    {
        _id: 4,
        title: "Água Mineral",
        price: 2.50,
        imgSrc: agua,
        imgAlt: "Garrafa de água mineral"
    },
    {
        _id: 5,
        title: "Schweppes Zero",
        price: 7,
        imgSrc: schweppesZero,
        imgAlt: "Lata de Schweppes Zero"
    },
    {
        _id: 6,
        title: "Chá Gelado",
        price: 5.5,
        imgSrc: chaGelado,
        imgAlt: "Lata de chá gelado"
    }
];

const card = tv({
    slots: {
        containerSize: 'lg:flex lg:items-center lg:justify-around 2xl:w-[80%] 2xl:mx-auto',
        containerPizzaDrink: 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:place-items-center',
        infoText: 'mt-4 text-sm font-inter font-semibold text-white text-center uppercase'
    }
});

const { containerSize, containerPizzaDrink, infoText } = card();

export default function Render({ showPizzas, selectedSize, setSelectedSize, setSizePrice, handleSelectFlavor, handleSelectDrink }) {
    const flavorsText = selectedSize === 1 ? `Você pode escolher até ${selectedSize} sabor!` : `Você pode escolher até ${selectedSize} sabores!`;

    return (
        <>
            {showPizzas && selectedSize === 0 && (
                <section>
                    <h2 className={infoText()}>
                        Escolha a pizza do tamanho da sua fome!
                    </h2>

                    <div className={containerSize()}>
                        {pizzaSizes.map((size, index) => (
                            <ContainerSize size={size} key={size._id} setSelectedSize={setSelectedSize} setSizePrice={setSizePrice} />
                        ))}
                    </div>
                </section>
            )}

            {showPizzas && selectedSize !== 0 && (
                <section>
                    <h2 className={infoText()}>
                        {flavorsText}
                    </h2>

                    <div className={containerPizzaDrink()}>
                        {pizzaFlavors.map((pizza) => (
                            <ContainerFlavor pizza={pizza} key={pizza._id} handleSelectFlavor={handleSelectFlavor} />
                        ))}
                    </div>
                </section>
            )}

            {!showPizzas && (
                <section>
                    <h2 className={infoText()}>
                        Conheça nossas bebidas!
                    </h2>

                    <div className={containerPizzaDrink()}>
                        {drinks.map((drink) => (
                            <ContainerDrinks drink={drink} key={drink._id} handleSelectDrink={handleSelectDrink} />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}
