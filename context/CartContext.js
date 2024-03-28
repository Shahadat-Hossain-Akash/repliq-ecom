'use client'
import { createContext, useEffect, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        } else {
            setCart([])
        }
    }, []);

    const saveCartToLocalStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const addItemToCart = (item) => {
        const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity += 1;
            setCart(updatedCart);
            saveCartToLocalStorage(updatedCart);
        } else {
            setCart([
                ...cart, {
                    ...item,
                    quantity: 1
                }
            ]);
            saveCartToLocalStorage([
                ...cart, {
                    ...item,
                    quantity: 1
                }
            ]);
        }
    };

    const removeItemFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
        saveCartToLocalStorage(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                removeItemFromCart,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
