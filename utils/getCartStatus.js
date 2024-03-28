'use client'
import CartContext from '@/context/CartContext';
import { useContext } from 'react';

export const GetTotalItems = () => {
    const {cart} = useContext(CartContext)
    return cart.reduce((total, item) => total + item.quantity, 0);
}

export const GetTotalAmount = () => {
    const {cart} = useContext(CartContext)
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };