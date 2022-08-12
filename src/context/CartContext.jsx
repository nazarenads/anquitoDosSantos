import { PriceChange } from '@mui/icons-material';
import React, {useContext, useState} from 'react';

const CartContext = React.createContext();

export const useCartContext = () => {
    useContext(CartContext)
}

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(product => product.id !== item.id)
        newCart.push({...item, quantity: newQuantity})
        setCart(newCart)
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }


    return (
        <CartContext.Provider value={
            {
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                totalPrice,
                totalProducts,
                cart
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
