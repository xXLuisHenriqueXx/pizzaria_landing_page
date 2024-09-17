import React from 'react';
import Navbar from "../../Navbar";
import Header from "../Header";
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        container: 'flex flex-col w-full min-h-screen pb-4 bg-main bg-no-repeat bg-cover bg-center',
        main: 'px-5 md:px-10 xl:px-20'
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
