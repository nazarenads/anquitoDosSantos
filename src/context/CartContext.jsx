import React, {useState} from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    const isInCart = (id) => {
        return cartProducts.find(product => product.id === id) ? true : false;
    }

    const addProductToCart = (product) => {
        console.log("Product desde addProductToCart", product)
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
    }

    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter(product => product.id !== id));
    }

    const totalPrice = () => {
        return cartProducts.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => {
        return cartProducts.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }

    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clearCart,
        isInCart,
        removeProduct
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export {CartContext};
