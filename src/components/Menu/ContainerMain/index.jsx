import React from 'react';
import { tv } from 'tailwind-variants';

import Navbar from "../../Navbar";
import Header from "../Header";

const card = tv({
    slots: {
        container: 'flex flex-col w-full min-h-screen pb-4 bg-box-background-darker',
        main: 'px-4 md:px-8 xl:px-16'
    }
});

const { container, main } = card();

export default function ContainerMain({ children, setShowModal }) {
    return (
        <div className={container()}
            style={{
                overflowY: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: 'none',
            }}
        >
            <Navbar setShowModal={setShowModal} screen={'menu'} />

            <Header />

            <main className={main()}>
                {children}
            </main>
        </div>
    )
}
