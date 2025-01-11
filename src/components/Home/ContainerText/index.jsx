import React from 'react';
import { tv } from 'tailwind-variants';

import ContainerTextInfo from './ContainerTextInfo';

const card = tv({
    slots: {
        container: 'lg:mt-32 2xl:mt-40',
        title: 'text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-13xl text-center lg:text-left font-karantina text-primary-red',
        normalText: 'text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-left font-inter text-white'
    }
});

const { container, title, normalText } = card();

export default function ContainerText() {
    return (
        <div className={container()}>
            <div>
                <h2 className={normalText()}>
                    Seja bem-vindo(a) ao
                </h2>
                
                <h1 className={title()}>
                    DEVPIZZA
                </h1>
            </div>

            <ContainerTextInfo />
        </div>
    )
}
