import React from "react";
import ContainerMenu from "../../components/Home/ContainerMenu";
import ContainerMain from "../../components/Home/ContainerMain";
import ContainerText from "../../components/Home/ContainerText";

export default function Home() {
    return (
        <ContainerMain>
            <ContainerText />

            <ContainerMenu />
        </ContainerMain>
    );
}