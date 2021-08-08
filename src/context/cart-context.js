import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [saveForLater, setSaveForLater] = useState([])
    const [cartPrice, setCartPrice] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    return(<>
        <CartContext.Provider value={{cart, setCart, cartPrice, setCartPrice, cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    </>)
}

export const useCart = () => {
    return useContext(CartContext)
}