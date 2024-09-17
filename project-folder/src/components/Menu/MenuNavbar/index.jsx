import React, { useState } from 'react';
import { tv } from 'tailwind-variants';

const nav = tv({
    slots: {
        container: 'w-full py-4 flex items-center justify-around border-b-2 border-border-red',
        buttonText: 'text-base font-inter font-bold lg:text-lg 2xl:text-2xl cursor-pointer hover:text-primary-red duration-200'
    },
    variants: {
        button: {
            selected: {
                buttonText: 'text-primary-red bg-box-background px-8 rounded-md',
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

const { container, buttonText } = nav({ button: screen === 'pizza' ? 'selected' : 'notSelected' });

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
