import React from 'react';
import { tv } from 'tailwind-variants';

import Navbar from '../../Navbar';

const card = tv({
    slots: {
        container: 'flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start w-full h-screen px-6 md:px-40 lg:px-16 2xl:px-32 bg-main bg-cover bg-center bg-no-repeat',
    }
});

const { container } = card();

export default function ContainerMain({ children }) {
    return (
        <div className={container()}>
            <Navbar screen={'home'} />

            {children}
        </div>
    )
}
