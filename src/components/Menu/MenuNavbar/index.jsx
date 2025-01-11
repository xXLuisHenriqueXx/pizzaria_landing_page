import React, { useState } from 'react';
import { tv } from 'tailwind-variants';

const nav = tv({
    slots: {
        container: 'flex items-center justify-around w-full py-4',
        buttonText: 'px-12 py-1 text-base lg:text-lg 2xl:text-2xl font-inter font-bold uppercase cursor-pointer hover:text-primary-red duration-200'
    },
    variants: {
        button: {
            selected: {
                buttonText: 'text-primary-red bg-box-background rounded-md',
            },
            notSelected: {
                buttonText: 'text-white',
            }
        }
    },
    defaultVariants: {
        button: 'notSelected'
    }
});

const { container, buttonText } = nav();

export default function MenuNavbar({ setShowPizzas }) {
    const [screen, setScreen] = useState('pizza');

    return (
        <section className={container()}>
            <h2 className={buttonText({ button: screen === 'pizza' ? 'selected' : 'notSelected' })}
                onClick={() => {
                    setScreen('pizza');
                    setShowPizzas(true);
                }}
            >
                Pizzas
            </h2>

            <h2 className={buttonText({ button: screen === 'drink' ? 'selected' : 'notSelected' })}
                onClick={() => {
                    setScreen('drink');
                    setShowPizzas(false);
                }}
            >
                Bebidas
            </h2>
        </section>
    );
}
