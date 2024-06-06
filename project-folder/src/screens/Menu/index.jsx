import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ContainerFlavor from "../../components/Menu/ContainerFlavor";
import Header from "../../components/Menu/Header";
import ContainerDrinks from "../../components/Menu/ContainerDrinks";
import ContainerSize from "../../components/Menu/ContainerSize";
import ModalCart from "../../components/Menu/ModalCart";

// Tamanhos de pizza
import pizzaBroto from "../../assets/sizes/pizza_broto.png";
import pizzaMedia from "../../assets/sizes/pizza_media.png";
import pizzaFamilia from "../../assets/sizes/pizza_familia.png";

// Sabores de pizza
import pizzaFrango from "../../assets/flavors/pizza_frango.jpg";

// Bebidas
import coca from "../../assets/drinks/coca_lata.jpg";
import guarana from "../../assets/drinks/guarana_lata.jpeg";
import sucoLaranja from "../../assets/drinks/suco_laranja.jpg";
import agua from "../../assets/drinks/agua.jpg";
import schweppesZero from "../../assets/drinks/schweppes_zero_lata.png"
import chaGelado  from "../../assets/drinks/cha_gelado.jpeg";

const pizzaSizes = [
    {
        _id: 1,
        value: 1,
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
        price: 5.00,
        imgSrc: coca,
        imgAlt: "Lata de Coca-Cola"
    },
    {
        _id: 2,
        title: "Guaraná Antarctica",
        price: 4.50,
        imgSrc: guarana,
        imgAlt: "Lata de Guaraná Antarctica"
    },
    {
        _id: 3,
        title: "Suco de Laranja",
        price: 6.00,
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
        price: 7.00,
        imgSrc: schweppesZero,
        imgAlt: "Lata de Schweppes Zero"
    },
    {
        _id: 6,
        title: "Chá Gelado",
        price: 5.50,
        imgSrc: chaGelado,
        imgAlt: "Lata de chá gelado"
    }
];

const whiteInfoText = "mt-4 text-white text-sm lg:text-lg font-inter font-semibold text-center";
const pizzaDrinkText = "text-white text-base font-inter font-bold lg:text-lg 2xl:text-2xl hover:text-primary-red cursor-pointer duration-200"

export default function Menu() {
    const [selectedSize, setSelectedSize] = useState(0);
    const [showPizzas, setShowPizzas] = useState(true);
    const [selectedPizzaFlavors, setSelectedPizzaFlavors] = useState([]);
    const [selectedDrinks, setSelectedDrinks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    return (
        <div style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: 'none',
        }} 
        className="
        flex flex-col
        w-full min-h-screen pb-4
        bg-main bg-no-repeat bg-cover bg-center"
        >
            <Navbar setShowModal={setShowModal} screen={'menu'} />
            
            <Header />

            <main className="
            px-5
            md:px-10
            xl:px-20
            "
            >
                <section className="
                w-full py-4
                flex items-center justify-around
                border-b-2 border-border-red"
                >
                    <h2 className={pizzaDrinkText}
                    onClick={() => setShowPizzas(true)}
                    >
                        Pizzas
                    </h2>

                    <h2 className={pizzaDrinkText}
                    onClick={() => setShowPizzas(false)}
                    >
                        Bebidas
                    </h2>
                </section>

                {showPizzas && selectedSize === 0 && (
                    <section>
                        <h2 className={whiteInfoText}
                        >
                            Escolha a pizza do tamanho da sua fome!
                        </h2>
                        
                        <div className="
                        lg:flex lg:items-center lg:justify-around 2xl:w-[80%] 2xl:mx-auto"
                        >
                            {pizzaSizes.map((size, index) => (
                                <ContainerSize size={size} key={size._id} setSelectedSize={setSelectedSize} />
                            ))}
                        </div>
                    </section>
                )}

                {showPizzas && selectedSize !== 0 && (
                    <section>
                        <h2 className={whiteInfoText}
                        >
                            {selectedSize === 1 ? (
                                `Você pode escolher até ${selectedSize} sabor!`
                            ): (
                                `Você pode escolher até ${selectedSize} sabores!`
                            )}
                        </h2>

                        <div
                        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:place-items-center">
                            {pizzaFlavors.map((pizza, index) => (
                                <ContainerFlavor pizza={pizza} key={pizza._id} />
                            ))}
                        </div>
                    </section>
                )}

                {!showPizzas && (
                    <section>
                        <h2 className="
                        mt-4 text-white text-sm lg:text-lg font-inter font-semibold text-center"
                        >
                            Conheça nossas bebidas!
                        </h2>

                        <div
                        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:place-items-center">
                            {drinks.map((drink, index) => (
                                <ContainerDrinks drink={drink} key={drink._id} />
                            ))}
                        </div>
                    </section>
                
                )}
            </main>

            {showModal && (
                <ModalCart setShowModal={setShowModal} />
            )}

        </div>
    );
}