import React from "react";

import ContainerMain from "../../components/Home/ContainerMain";
import ContainerText from "../../components/Home/ContainerText";
import ContainerMenu from "../../components/Home/ContainerMenu";

export default function Home() {
    return (
        <ContainerMain>
            <ContainerText />

            <ContainerMenu />
        </ContainerMain>
    )
}