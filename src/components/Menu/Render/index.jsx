import React from 'react';
import { tv } from 'tailwind-variants';

import ContainerFlavor from "./ContainerFlavor";
import ContainerDrinks from "./ContainerDrinks";
import ContainerSize from "./ContainerSize";

// Tamanhos de pizza
import pizzaBroto from "../../../assets/sizes/pizza_broto.png";
import pizzaMedia from "../../../assets/sizes/pizza_media.png";
import pizzaFamilia from "../../../assets/sizes/pizza_familia.png";

// Sabores de pizza salgada
import pizzaFrango from "../../../assets/flavors/pizza_frango.jpg";

// Refrigerantes
import coca from "../../../assets/drinks/coca_lata.jpg";
import cocaZero from "../../../assets/drinks/coca_zero_lata.jpg";
import fantaLaranja from "../../../assets/drinks/fanta_laranja_lata.jpg";
import fantaUva from "../../../assets/drinks/fanta_uva_lata.png";
import guarana from "../../../assets/drinks/guarana_lata.jpeg";
import schweppesZero from "../../../assets/drinks/schweppes_zero_lata.png"

// Cervejas
import brahmaChopp from "../../../assets/drinks/brahma_chopp_lata.jpg";
import skol from "../../../assets/drinks/skol_lata.png";
import budweiser from "../../../assets/drinks/budweiser_lata.png";
import heineken from "../../../assets/drinks/heineken_lata.png";
import stellaArtois from "../../../assets/drinks/stella_artois_lata.jpg";
import corona from "../../../assets/drinks/corona_garrafa.png";

// Outras bebidas
import agua from "../../../assets/drinks/agua.jpg";
import aguaGas from "../../../assets/drinks/agua_gas.png";
import sucoLaranja from "../../../assets/drinks/suco_laranja.jpg";
import sucoUva from "../../../assets/drinks/suco_uva.png";
import chaGelado from "../../../assets/drinks/cha_gelado.jpeg";
import h2oh from "../../../assets/drinks/h2oh_garrafa.png";

const pizzaSizes = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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

const saltPizzaFlavors = [
    {
        id: 1,
        title: "Frango",
        ingredients: "Molho de tomate, Mussarela, Frango, Cebola, Azeitonas",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de frango"
    },
    {
        id: 2,
        title: "Margherita",
        ingredients: "Molho de tomate, Mussarela, Manjericão",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de margherita"
    },
    {
        id: 3,
        title: "Pepperoni",
        ingredients: "Molho de tomate, Mussarela, Pepperoni",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de pepperoni"
    },
    {
        id: 4,
        title: "Quatro Queijos",
        ingredients: "Molho de tomate, Mussarela, Parmesão, Gorgonzola, Provolone",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de quatro queijos"
    },
    {
        id: 5,
        title: "Portuguesa",
        ingredients: "Molho de tomate, Mussarela, Presunto, Ovos, Cebola, Azeitonas",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de portuguesa"
    },
    {
        id: 6,
        title: "Calabresa",
        ingredients: "Molho de tomate, Mussarela, Calabresa, Cebola",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de calabresa"
    },
    {
        id: 7,
        title: "Frango com Catupiry",
        ingredients: "Molho de tomate, Mussarela, Frango, Catupiry",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de frango com catupiry"
    },
    {
        id: 8,
        title: "Brócolis com Bacon",
        ingredients: "Molho de tomate, Mussarela, Brócolis, Bacon",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de brócolis com bacon"
    },
    {
        id: 9,
        title: "Atum",
        ingredients: "Molho de tomate, Mussarela, Atum, Cebola",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de atum"
    },
    {
        id: 10,
        title: "Bacon",
        ingredients: "Molho de tomate, Mussarela, Bacon, Cebola",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de bacon"
    }
];

const sweetPizzaFlavors = [
    {
        id: 1,
        title: "Banana com Canela",
        ingredients: "Banana, Canela, Açúcar",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de banana com canela"
    },
    {
        id: 2,
        title: "Chocolate",
        ingredients: "Chocolate, Leite condensado",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de chocolate"
    },
    {
        id: 3,
        title: "Morango com Nutella",
        ingredients: "Morango, Nutella",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de morango com nutella"
    },
    {
        id: 4,
        title: "Romeu e Julieta",
        ingredients: "Goiabada, Queijo Minas",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de romeu e julieta"
    },
    {
        id: 5,
        title: "Prestígio",
        ingredients: "Chocolate, Coco",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de prestígio"
    },
    {
        id: 6,
        title: "Romeu e Julieta",
        ingredients: "Goiabada, Queijo Minas",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de romeu e julieta"
    },
    {
        id: 7,
        title: "Prestígio",
        ingredients: "Chocolate, Coco",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de prestígio"
    },
    {
        id: 8,
        title: "Banana com Nutella",
        ingredients: "Banana, Nutella",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de banana com nutella"
    },
    {
        id: 9,
        title: "Chocolate com Morango",
        ingredients: "Chocolate, Morango",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de chocolate com morango"
    },
    {
        id: 10,
        title: "Banana com Chocolate",
        ingredients: "Banana, Chocolate",
        imgSrc: pizzaFrango,
        imgAlt: "Pizza de banana com chocolate"
    }
];

const sodaDrinks = [
    {
        id: 1,
        title: "Coca-Cola",
        price: 5,
        imgSrc: coca,
        imgAlt: "Lata de Coca-Cola"
    },
    {
        id: 2,
        title: "Coca-Cola Zero",
        price: 5,
        imgSrc: cocaZero,
        imgAlt: "Lata de Coca-Cola Zero"
    },
    {
        id: 3,
        title: "Fanta Laranja",
        price: 5,
        imgSrc: fantaLaranja,
        imgAlt: "Lata de Fanta Laranja"
    },
    {
        id: 4,
        title: "Fanta Uva",
        price: 5,
        imgSrc: fantaUva,
        imgAlt: "Lata de Fanta Uva"
    },
    {
        id: 5,
        title: "Guaraná Antarctica",
        price: 4.5,
        imgSrc: guarana,
        imgAlt: "Lata de Guaraná Antarctica"
    },
    {
        id: 6,
        title: "Schweppes Zero",
        price: 7,
        imgSrc: schweppesZero,
        imgAlt: "Lata de Schweppes Zero"
    }
];

const beerDrinks = [
    {
        id: 1,
        title: "Brahma Chopp",
        price: 5,
        imgSrc: brahmaChopp,
        imgAlt: "Lata de Brahma Chopp"
    },
    {
        id: 2,
        title: "Skol",
        price: 5,
        imgSrc: skol,
        imgAlt: "Lata de Skol"
    },
    {
        id: 3,
        title: "Budweiser",
        price: 6,
        imgSrc: budweiser,
        imgAlt: "Lata de Budweiser"
    },
    {
        id: 4,
        title: "Heineken",
        price: 7,
        imgSrc: heineken,
        imgAlt: "Lata de Heineken"
    },
    {
        id: 5,
        title: "Stella Artois",
        price: 6,
        imgSrc: stellaArtois,
        imgAlt: "Lata de Stella Artois"
    },
    {
        id: 6,
        title: "Corona",
        price: 12,
        imgSrc: corona,
        imgAlt: "Garrafa de Corona"
    }
];

const randomDrinks = [
    {
        id: 1,
        title: "Água Mineral sem Gás",
        price: 2.50,
        imgSrc: agua,
        imgAlt: "Garrafa de água mineral sem gás"
    },
    {
        id: 2,
        title: "Água Mineral com Gás",
        price: 2.50,
        imgSrc: aguaGas,
        imgAlt: "Garrafa de água mineral com gás"
    },
    {
        id: 3,
        title: "Suco de Laranja",
        price: 6,
        imgSrc: sucoLaranja,
        imgAlt: "Suco de laranja"
    },
    {
        id: 4,
        title: "Suco de Uva",
        price: 6,
        imgSrc: sucoUva,
        imgAlt: "Suco de uva"
    },
    {
        id: 5,
        title: "Chá Gelado",
        price: 7,
        imgSrc: chaGelado,
        imgAlt: "Lata de chá gelado"
    },
    {
        id: 6,
        title: "H2OH!",
        price: 4.5,
        imgSrc: h2oh,
        imgAlt: "Garrafa de H2OH!"
    }
];

const card = tv({
    slots: {
        containerSize: 'flex flex-col lg:flex-row lg:items-center lg:justify-evenly w-full',
        containerPizzaDrink: 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:place-items-center md:gap-x-4 xl:gap-x-8',
        infoText: 'mt-4 text-xs md:text-sm font-inter font-medium text-white text-center uppercase',
        titleFlavorDrink: 'md:col-span-2 2xl:col-span-3 w-full mt-4 text-xs md:text-sm xl:text-lg font-inter font-bold text-primary-red text-start uppercase',
        separator: 'md:col-span-2 2xl:col-span-3 w-full h-0.5 bg-white mt-4 xl:mt-8 opacity-25'
    }
});

const { containerSize, containerPizzaDrink, infoText, titleFlavorDrink, separator } = card();

export default function Render({ showPizzas, selectedSize, setSelectedSize, setSizePrice, handleSelectFlavor, handleSelectDrink }) {
    const flavorsText = selectedSize === 1 ? `Você pode escolher até ${selectedSize} sabor` : `Você pode escolher até ${selectedSize} sabores`;

    return (
        <>
            {showPizzas && selectedSize === 0 && (
                <section>
                    <h2 className={infoText()}>
                        Escolha a pizza do tamanho da sua fome
                    </h2>

                    <div className={containerSize()}>
                        {pizzaSizes.map((size) => (
                            <ContainerSize size={size} key={size.id} setSelectedSize={setSelectedSize} setSizePrice={setSizePrice} />
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
                        <p className={titleFlavorDrink()}>Sabores salgados</p>

                        {saltPizzaFlavors.map((pizza) => (
                            <ContainerFlavor pizza={pizza} key={pizza.id} handleSelectFlavor={handleSelectFlavor} />
                        ))}

                        <div className={separator()} />

                        <p className={titleFlavorDrink()}>Sabores doces</p>

                        {sweetPizzaFlavors.map((pizza) => (
                            <ContainerFlavor pizza={pizza} key={pizza.id} handleSelectFlavor={handleSelectFlavor} />
                        ))}
                    </div>
                </section>
            )}

            {!showPizzas && (
                <section>
                    <h2 className={infoText()}>
                        Conheça nossas bebidas
                    </h2>

                    <div className={containerPizzaDrink()}>
                        <p className={titleFlavorDrink()}>Refrigerantes</p>

                        {sodaDrinks.map((drink) => (
                            <ContainerDrinks drink={drink} key={drink.id} handleSelectDrink={handleSelectDrink} />
                        ))}

                        <div className={separator()} />

                        <p className={titleFlavorDrink()}>Cervejas</p>

                        {beerDrinks.map((drink) => (
                            <ContainerDrinks drink={drink} key={drink.id} handleSelectDrink={handleSelectDrink} />
                        ))}

                        <div className={separator()} />

                        <p className={titleFlavorDrink()}>Outras bebidas</p>

                        {randomDrinks.map((drink) => (
                            <ContainerDrinks drink={drink} key={drink.id} handleSelectDrink={handleSelectDrink} />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}
