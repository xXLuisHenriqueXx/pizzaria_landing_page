import React, { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';
import { IoMdRemove } from "react-icons/io";

const card = tv({
  slots: {
    container: 'flex items-center justify-center w-full min-h-screen bg-fade-modal fixed z-[99]',
    containerModal: 'w-full h-600 px-2 py-5 lg:w-800 mx-6 md:mx-8 lg:px-5 bg-box-background rounded-sm',
    containerModalInternal: 'flex flex-1 flex-col items-center',
    containerContent: 'flex flex-col justify-start items-center w-full py-2 border-t-2 border-b-2 border-border-red lg:h-450',
    modalTitle: 'mb-4 text-3xl lg:text-4xl font-imbue text-primary-red',
    contentTitle: 'lg:mb-2 text-2xl lg:text-3xl font-inter font-bold text-primary-red',
    smallContentText: 'text-sm lg:text-lg font-inika text-white',
    flexBox: 'flex flex-1 flex-col justify-start items-center',
    spanBox: 'flex flex-row justify-between w-full',
    boxTitle: 'text-sm lg:text-lg font-inter font-bold text-white',
    containerPriceFinalize: 'flex flex-row justify-between items-center w-full h-full px-1 py-4',
    containerInternalPriceFinalize: 'flex flex-row items-center',
    buttonFinalize: 'px-4 py-2 bg-primary-red hover:bg-highlight-red text-sm rounded-sm md:text-lg font-inter font-bold text-white hover:shadow-red cursor-pointer duration-200',
    icon: 'text-white text-lg cursor-pointer border border-primary-red rounded hover:text-primary-red transition duration-200',
  },

  variants: {
    containerContent: {
      pizza: {
        containerContent: 'h-200 lg:border-r-2',
      },
      drink: {
        containerContent: 'h-250 border-t-0 lg:border-t-2',
      }
    },
    containerModalInternal: {
      title: {
        containerModalInternal: 'justify-center'
      },
      content: {
        containerModalInternal: 'justify-start w-full h-auto lg:flex-row'
      }
    },
    flexBox: {
      drinkFlex: {
        flexBox: 'overflow-y-auto'
      }
    },
    spanBox: {
      pizza: {
        spanBox: 'items-center'
      },
      drink: {
        spanBox: 'mb-8'
      }
    },
    boxTitle: {
      price: {
        boxTitle: 'mr-1'
      }
    }
  }
});

const { container, containerModal, containerModalInternal, containerContent, modalTitle, contentTitle, smallContentText, flexBox, boxTitle, spanBox, containerPriceFinalize, containerInternalPriceFinalize, buttonFinalize, icon } = card();

export default function ModalCart({ setShowModal, selectSize, setSelectSize, setShowPizzas, sizePrice, selectedPizzaFlavors, setSelectedPizzaFlavors, selectedDrinks, setSelectedDrinks }) {
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
      alert("Selecione um tamanho de pizza!")
      return

    } else if (selectedPizzaFlavors.length === 0) {
      alert("Selecione ao menos um sabor de pizza!")
      return

    } else {
      const address = prompt("Digite o endereço de entrega:")

      if (!address) {
        alert("Digite um endereço válido!")
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
    setSelectSize(0)
    setSelectedPizzaFlavors([])
    setShowPizzas(true)
    calculatePrice()
  }

  const removePizzaFlavor = (index) => {
    setSelectedPizzaFlavors(prev => prev.filter((_, i) => i !== index))
  }

  const removeDrink = (index) => {
    setSelectedDrinks(prevDrinks => prevDrinks.filter((_, i) => i !== index))

    calculatePrice()
  }

  const calculatePrice = () => {
    let totalPrice;

    if (selectSize === 0) totalPrice = 0
    else totalPrice = sizePrice

    selectedDrinks.forEach(drink => {
      totalPrice += drink.price * drink.quantity
    })

    setPrice(totalPrice);
  }

  useEffect(() => {
    calculatePrice();
  }, [selectSize, selectedPizzaFlavors, selectedDrinks]);

  return (
    <div className={container()} onClick={() => setShowModal(false)} >
      <div className={containerModal()} onClick={(e) => e.stopPropagation()} >
        <div className={containerModalInternal({ containerModalInternal: 'title' })}>
          <h1 className={modalTitle()}>
            SEU CARRINHO
          </h1>

          <div className={containerModalInternal({ containerModalInternal: 'content' })}>
            <div className={containerContent({ containerContent: 'pizza' })}>
              <h1 className={contentTitle()}>
                PIZZAS
              </h1>

              <div className={flexBox()}>
                <p className={boxTitle()}>
                  Tamanho selecionado:
                </p>

                {selectSize ? (
                  <span className={spanBox({ spanBox: 'pizza' })}>
                    <p className={smallContentText()}>{sizeTitle()}</p>

                    <IoMdRemove className={icon()} onClick={removePizzaSize} />
                  </span>
                ) : (
                  <p className={smallContentText()}>Nenhum tamanho selecionado</p>
                )}
              </div>

              <div className={flexBox()}>
                <p className={boxTitle()}>
                  Sabores selecionados:
                </p>

                {selectedPizzaFlavors.length > 0 ? (
                  selectedPizzaFlavors.map((flavor, index) => (
                    <span key={index} className={spanBox({ spanBox: 'pizza' })}>
                      <p className={smallContentText()}>{flavor.title}</p>

                      <IoMdRemove className={icon()} onClick={() => removePizzaFlavor(index) } />
                    </span>
                  ))
                ) : (
                  <p className={smallContentText()}>Nenhum sabor selecionado...</p>
                )}
              </div>
            </div>

            <div className={containerContent({ containerContent: 'drink' })}>
              <h1 className={contentTitle()}>
                BEBIDAS
              </h1>

              <div className={flexBox({ flexBox: 'drinkFlex' })}>
                {selectedDrinks.length > 0 ? (
                  selectedDrinks.map((drink, index) => (
                    <span key={index} className={spanBox({ spanBox: 'drink' })}>
                      <div key={drink._id} className="mr-4">
                        <p className={boxTitle()}>{drink.quantity}x {drink.title}</p>
                        <p className={smallContentText()}>R$ {drink.price.toFixed(2)}</p>
                      </div>

                      <IoMdRemove className={icon()} onClick={() => removeDrink(index) } />
                    </span>
                  ))
                ) : (
                  <p className={smallContentText()}>Nenhuma bebida selecionada...</p>
                )}
              </div>
            </div>
          </div>

          <div className={containerPriceFinalize()}>
            <div className={containerInternalPriceFinalize()}>
              <p className={boxTitle({ boxTitle: 'price' })}>Total a pagar:</p>
              <p className={smallContentText()}>R$ {price.toFixed(2)}</p>
            </div>

            <button className={buttonFinalize()} onClick={handleFinalizeOrder}>
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}