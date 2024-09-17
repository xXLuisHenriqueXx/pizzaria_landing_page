import React, { useState } from "react";
import ContainerMain from "../../components/Menu/ContainerMain";
import MenuNavbar from "../../components/Menu/MenuNavbar";
import Render from "../../components/Menu/Render";
import ModalCart from "../../components/Menu/ModalCart";

export default function Menu() {
    const [showPizzas, setShowPizzas] = useState(true);
    const [selectedSize, setSelectedSize] = useState(0);
    const [sizePrice, setSizePrice] = useState(0);
    const [selectedPizzaFlavors, setSelectedPizzaFlavors] = useState([]);
    const [selectedDrinks, setSelectedDrinks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSelectFlavor = (pizza) => {
        if (selectedPizzaFlavors.includes(pizza)) {
            alert("Você já selecionou esse sabor!");
            return;
        } else {
            if (selectedPizzaFlavors.length < selectedSize) {
                setSelectedPizzaFlavors([...selectedPizzaFlavors, pizza]);
            } else {
                alert(`Você só pode selecionar até ${selectedSize} sabores!`);
                return;
            }
        }
    }

    const handleSelectDrink = (drink) => {
        const existingDrink = selectedDrinks.find(d => d._id === drink._id);

        if (existingDrink) {
            const updatedDrinks = selectedDrinks.map(d =>
                d._id === drink._id ? { ...d, quantity: d.quantity + 1 } : d
            );
            setSelectedDrinks(updatedDrinks);
        } else {
            setSelectedDrinks([...selectedDrinks, { ...drink, quantity: 1 }]);
        }
    }

    console.log('showModal', showModal)

    return (
        <>
            <ContainerMain setShowModal={setShowModal}>
                <MenuNavbar setShowPizzas={setShowPizzas} />

                <Render showPizzas={showPizzas} selectedSize={selectedSize} setSelectedSize={setSelectedSize} setSizePrice={setSizePrice} handleSelectFlavor={handleSelectFlavor} handleSelectDrink={handleSelectDrink} />
            </ContainerMain>
            {showModal && <ModalCart setShowModal={setShowModal} selectSize={selectedSize} setSelectSize={setSelectedSize} sizePrice={sizePrice} setShowPizzas={setShowPizzas} selectedPizzaFlavors={selectedPizzaFlavors} setSelectedPizzaFlavors={setSelectedPizzaFlavors} selectedDrinks={selectedDrinks} setSelectedDrinks={setSelectedDrinks} />}
        </>
    );
}