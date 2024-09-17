import React, { useState } from "react";
import ContainerMain from "../../components/Menu/ContainerMain";
import MenuNavbar from "../../components/Menu/MenuNavbar";
import Render from "../../components/Menu/Render";

export default function Menu() {
    const [showPizzas, setShowPizzas] = useState(true);
    const [showModal, setShowModal] = useState(false);

    return (
        <ContainerMain setShowModal={setShowModal}>
            <MenuNavbar setShowPizzas={setShowPizzas} />

            <Render showPizzas={showPizzas} setShowPizzas={setShowPizzas} showModal={showModal} setShowModal={setShowModal} />
        </ContainerMain>
    );
}