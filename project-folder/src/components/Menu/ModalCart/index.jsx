import React from 'react'

function ModalCart({ setShowModal, selectSize, sizePrice, selectedPizzaFlavors, selectedDrinks }) {
  const sizeTitle = (size) => {
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

  return (
    <div
      onClick={() => setShowModal(false)}
      className="
      fixed w-full min-h-screen
      bg-fade-modal z-50
    ">
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        w-[90%] h-600 px-2 py-5
        lg:w-800 lg:px-5
        bg-box-background rounded-lg shadow-red
        "
      >
        <div className="
          flex flex-1 flex-col justify-center items-center
        ">
          <h1 className="
            font-imbue text-3xl lg:text-4xl text-primary-red mb-4
          ">
            SEU CARRINHO
          </h1>

          <div className="
            flex flex-1 flex-col justify-start items-center w-full h-auto
            lg:flex-row
          ">
            <div className="
              w-full h-200 flex flex-col justify-start items-center py-2
              border-t-2 border-b-2 border-border-red 
              lg:h-450 lg:border-r-2
            ">
              <h1 className="
                font-inter font-bold text-2xl lg:text-3xl text-primary-red lg:mb-2
              ">
                PIZZAS
              </h1>
              <div className="
                flex flex-1 flex-col justify-start items-center
              ">
                <p className="font-inter font-bold text-white text-sm lg:text-lg">
                  Tamanho selecionado:
                </p>
                {selectSize ? (
                  <p className="font-inika text-white text-sm lg:text-lg">{sizeTitle(selectSize)}</p>
                ) : (
                  <p className="font-inika text-white text-sm lg:text-lg">Nenhum tamanho selecionado</p>
                )}
              </div>
              <div className="
                flex flex-1 flex-col justify-start items-center
              ">
                <p className="font-inter font-bold text-white text-sm lg:text-lg">
                  Sabores selecionados:
                </p>
                {selectedPizzaFlavors.length > 0 ? (
                  selectedPizzaFlavors.map((flavor) => (
                    <p key={flavor.id} className="font-inika text-white text-sm lg:text-lg">{flavor.title}</p>
                  ))
                ) : (
                  <p className="font-inika text-white text-sm lg:text-lg">Nenhum sabor selecionado...</p>
                )}
              </div>
            </div>

            <div className="
              w-full h-250 flex flex-col justify-start items-center py-2
              border-t-2 border-b-2 border-border-red 
              lg:h-450
            ">
              <h1 className="
                font-inter font-bold text-2xl lg:text-3xl text-primary-red lg:mb-2
              ">
                BEBIDAS
              </h1>
              <div className="
                flex flex-1 flex-col justify-start items-center
                overflow-y-auto
              ">
                {selectedDrinks.length > 0 ? (
                  selectedDrinks.map((drink) => (
                    <div key={drink._id} className="text-center mb-2">
                      <p className="font-inter font-bold text-white text-base lg:text-lg">{drink.quantity}x {drink.title}</p>
                      <p className="font-inika text-white text-sm lg:text-base">R$ {drink.price.toFixed(2)}</p>
                    </div>
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
              <p className="font-inika text-white text-sm md:text-lg">R$ {(sizePrice + selectedDrinks.reduce((acc, drink) => acc + drink.price, 0)).toFixed(2)}</p>
            </div>

            <button
              onClick={handleFinalizeOrder}
              className="
                bg-primary-red text-white font-inter font-bold text-sm px-4 py-2 rounded-lg
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

export default ModalCart