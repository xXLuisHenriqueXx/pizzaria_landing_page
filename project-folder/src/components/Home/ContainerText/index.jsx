import React from 'react';
import { tv } from 'tailwind-variants';
import ContainerTextInfo from './ContainerTextInfo';

const card = tv({
    slots: {
        container: 'px-5 md:px-10 lg:mt-32 xl:pl-20 2xl:pl-42 2xl:mt-40',
        title: 'text-8xl text-center font-karantina text-primary-red md:text-9xl lg:text-10xl lg:text-left xl:text-11xl 2xl:text-13xl',
        normalText: 'text-2xl text-center font-inter text-white md:text-4xl lg:text-5xl lg:text-left xl:text-6xl 2xl:text-7xl'
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
