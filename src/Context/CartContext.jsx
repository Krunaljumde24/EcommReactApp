import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartDataMap, setCartDataMap] = useState(new Map());

    const addItemToCart = (data) => {
        let key = data.id;

        let value = {
            title: data.productTitle,
            price: data.price,
            quantity: data.quantity,
            discount: data.discount
        }

        if (cartDataMap.has(key)) {
            let existingObj = cartDataMap.get(key);
            existingObj.quantity += data.quantity;
            setCartDataMap((prev) => new Map(prev.set(key, existingObj)));
        } else {
            setCartDataMap((prev) => new Map(prev.set(key, value)));
        }
    }

    const getCartData = () => {
        return cartDataMap
    }

    useEffect(() => {
        console.log('Data Updated in cart context');
        console.log(cartDataMap);
    }, [cartDataMap])

    return (
        <CartContext.Provider value={{ addItemToCart, getCartData }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext }