import React, {useState} from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    const isInCart = (id) => {
        return cartProducts.find(product => product.id === id) ? true : false;
    }

    const addProductToCart = (product) => {
        if (isInCart(product.id)) {
          const newArray = cartProducts.map((productInCart) => {
            if (productInCart.id === product.id) {
              return {
                ...productInCart,
                counter: productInCart.counter + product.counter,
              };
            } else {
              return productInCart;
            }
          });
          setCartProducts(newArray);
        } else {
            setCartProducts([...cartProducts, product]);
        }
        setCartCounter(cartCounter + product.counter);
      };


    const clearCart = () => {
        setCartProducts([])
        setCartCounter(0)
    }

    const removeProduct = (id) => {
        const productToRemove = cartProducts.find(product => product.id === id)
        setCartProducts(cartProducts.filter(product => product.id !== id));
        setCartCounter(cartCounter - productToRemove.counter)
    }

    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clearCart,
        isInCart,
        removeProduct,
        cartCounter
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export {CartContext};
