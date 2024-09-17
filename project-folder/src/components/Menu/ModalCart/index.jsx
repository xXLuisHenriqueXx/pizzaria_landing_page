import React, { useEffect, useState } from 'react';
import { IoMdRemove } from "react-icons/io";
import { tv } from 'tailwind-variants';

const card = tv({
  slots: {
    container: 'fixed w-full min-h-screen bg-fade-modal z-[99]',
    containerModal: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-600 px-2 py-5 lg:w-800 lg:px-5  bg-box-background rounded-md shadow-red',
    containerModalInternalTitle: 'flex flex-1 flex-col justify-center items-center',
    containerModalInternalContent: 'flex flex-1 flex-col justify-start items-center w-full h-auto lg:flex-row',
    containerContentPizza: 'w-full h-200 flex flex-col justify-start items-center py-2 border-t-2 border-b-2 border-border-red lg:h-450 lg:border-r-2',
    containerContentDrink: 'w-full h-250 flex flex-col justify-start items-center py-2 border-t-2 border-b-2 border-border-red lg:h-450',
    modalTitle: 'font-imbue text-3xl lg:text-4xl text-primary-red mb-4',
    contentTitle: 'font-inter font-bold text-2xl lg:text-3xl text-primary-red lg:mb-2',
    smallContentText: 'font-inika text-white text-sm lg:text-lg',
    flexBoxPizza: 'flex flex-1 flex-col justify-start items-center',
    boxTitlePizza: 'font-inter font-bold text-white text-sm lg:text-lg',
    spanBoxPizza: 'flex flex-row justify-between items-center w-full',
    icon: 'text-white text-lg cursor-pointer border border-primary-red rounded hover:text-primary-red transition duration-200'
  }
});

const { container, containerModal, containerModalInternalTitle, containerModalInternalContent, containerContentPizza, containerContentDrink, modalTitle, contentTitle, smallContentText, flexBoxPizza, boxTitlePizza, spanBoxPizza, icon } = card();

function ModalCart({ setShowModal, selectSize, setSelectSize, setShowPizzas, sizePrice, selectedPizzaFlavors, setSelectedPizzaFlavors, selectedDrinks, setSelectedDrinks }) {
  const [price, setPrice] = useState(0);

  const sizeTitle = () => {
    if (selectSize === 1) {
      return "Pequena"
    } else if (selectSize === 3) {
      return "Média"
    } else {
      return "Família"
    }
  }

  const handleFinalizeOrder = () => {
    if (!selectSize) {
      alert("Selecione um tamanho de pizza!");
      return
    } else if (selectedPizzaFlavors.length === 0) {
      alert("Selecione ao menos um sabor de pizza!");
      return
    } else {
      const address = prompt("Digite o endereço de entrega:");
      if (!address) {
        alert("Digite um endereço válido!");
        return
      }

      const totalPrice = sizePrice + selectedDrinks.reduce((acc, drink) => acc + drink.price, 0);
      const pizzaFlavors = selectedPizzaFlavors.map((flavor, index) => flavor.title).join(", ");
      const drinks = selectedDrinks.map((drink, index) => `${drink.quantity}x ${drink.title}`).join(", ");
      const size = sizeTitle(selectSize);

      const message = `Pedido finalizado!\n\nTamanho da pizza: ${size}\nSabores: ${pizzaFlavors}\nBebidas: ${drinks}\nTotal a pagar: R$ ${totalPrice.toFixed(2)}\nEndereço de entrega: ${address}`

      const phoneNumber = import.meta.env.VITE_PHONE;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      alert("Pedido finalizado com sucesso! Aguarde o contato de um de nossos atendentes para confirmar o pagamento.");
      setShowModal(false);
    }
  }

  const removePizzaSize = () => {
    setSelectSize(0);
    setSelectedPizzaFlavors([]);
    setShowPizzas(false);
    calculatePrice();
  }

  const removePizzaFlavor = (index) => {
    setSelectedPizzaFlavors(prev => prev.filter((_, i) => i !== index));
  }

  const removeDrink = (index) => {
    setSelectedDrinks(prevDrinks => prevDrinks.filter((_, i) => i !== index));
    calculatePrice();
  }

  const calculatePrice = () => {
    let totalPrice;

    if (selectSize === 0) totalPrice = 0;
    else totalPrice = sizePrice;

    selectedDrinks.forEach(drink => {
      totalPrice += drink.price * drink.quantity;
    });

    setPrice(totalPrice);
  }

  useEffect(() => {
    calculatePrice();
  }, [selectSize, selectedPizzaFlavors, selectedDrinks]);

  return (
    <div className={container()}
      onClick={() => setShowModal(false)}
    >
      <div className={containerModal()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={containerModalInternalTitle()}>
          <h1 className={modalTitle()}>
            SEU CARRINHO
          </h1>

          <div className={containerModalInternalContent()}>
            <div className={containerContentPizza()}>
              <h1 className={contentTitle()}>
                PIZZAS
              </h1>
              <div className={flexBoxPizza()}>
                <p className={boxTitlePizza()}>
                  Tamanho selecionado:
                </p>
                {selectSize ? (
                  <span className={spanBoxPizza()}>
                    <p className={smallContentText()}>{sizeTitle()}</p>
                    <IoMdRemove className={icon()}
                      onClick={removePizzaSize}
                    />
                  </span>
                ) : (
                  <p className={smallContentText()}>Nenhum tamanho selecionado</p>
                )}
              </div>
              <div className={flexBoxPizza()}>
                <p className={boxTitlePizza()}>
                  Sabores selecionados:
                </p>
                {selectedPizzaFlavors.length > 0 ? (
                  selectedPizzaFlavors.map((flavor, index) => (
                    <span key={index}
                      className={spanBoxPizza()}
                    >
                      <p className={smallContentText()}>{flavor.title}</p>
                      <IoMdRemove className={icon()}
                        onClick={() => {
                          removePizzaFlavor(index);
                        }}
                      />
                    </span>
                  ))
                ) : (
                  <p className={smallContentText()}>Nenhum sabor selecionado...</p>
                )}
              </div>
            </div>

            <div className={containerContentDrink()}>
              <h1 className={contentTitle()}>
                BEBIDAS
              </h1>
              <div className="
                flex flex-1 flex-col justify-start items-center
                overflow-y-auto
              ">
                {selectedDrinks.length > 0 ? (
                  selectedDrinks.map((drink, index) => (
                    <span key={index}
                      className='flex flex-row justify-between w-full'
                    >
                      <div key={drink._id} className="text-center mb-2 mr-4">
                        <p className="font-inter font-bold text-white text-base">{drink.quantity}x {drink.title}</p>
                        <p className="font-inika text-white text-sm">R$ {drink.price.toFixed(2)}</p>
                      </div>
                      <IoMdRemove className={icon()}
                        onClick={() => {
                          removeDrink(index);
                        }}
                      />
                    </span>
                  ))
                ) : (
                  <p className="font-inter text-white text-sm lg:text-base">Nenhuma bebida selecionada...</p>
                )}
              </div>
            </div>
          </div>

          <div className="
            w-full h-full flex flex-row justify-between items-center px-1 py-4
          ">
            <div className="flex flex-row items-center">
              <p className="font-inter font-bold text-white text-sm md:text-lg mr-1">Total a pagar:</p>
              <p className="font-inika text-white text-sm md:text-lg">R$ {price.toFixed(2)}</p>
            </div>

            <button
              onClick={handleFinalizeOrder}
              className="
                bg-primary-red text-white font-inter font-bold text-sm px-4 py-2 rounded-md
                md:text-lg
                hover:bg-highlight-red hover:shadow-red cursor-pointer transition duration-200
            ">
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCart;