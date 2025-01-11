import React from 'react';
import Navbar from '../../Navbar';
import { tv } from 'tailwind-variants'

const container = tv({
    slots: {
        mainContainer: 'flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start w-full h-screen px-4 md:px-8 xl:px-16 2xl:px-32 bg-main bg-cover bg-center bg-no-repeat',
    }
});

const { mainContainer } = container();

export default function ContainerMain({ children }) {
    return (
        <div className={mainContainer()}>
            <Navbar screen={'home'} />

            {children}
        </div>
    )
}
