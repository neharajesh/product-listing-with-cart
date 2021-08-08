import { useCart } from "../context/cart-context"
import { addToCart, removeFromCart } from "./cart-utilities";

export const Cart = () => {
    const {cart, setCart, cartPrice, setCartPrice, cartCount, setCartCount, saveForLater, setSaveForLater} = useCart();

    const addToCartHandler = (product) => {
        const updatedSFL = removeFromCartHandler(saveForLater, product) || []        
        const updatedCart = addToCart(cart, product) 
        setCartPrice(cartPrice + product.price)
        setCartCount(cartCount + 1)
        setCart(updatedCart)  
        setSaveForLater(updatedSFL)    
    }

    const removeFromCartHandler = (product) => {
        const updatedCart = removeFromCart(cart, product)
        updatedCart.map(item => {
            setCartPrice(price => price - item.price)
            setCartCount(count => count - 1)
        })
        setCart(updatedCart)
    }

    const saveForLaterHandler = (product) => {
        const updatedCart = cart.filter(item => item.id !== product.id)
        setCart(updatedCart)
        setCartCount(cartCount - product.quantity)
        setCartPrice(cartPrice - (product.price * product.quantity))
        product = {...product, quantity: 0}
        setSaveForLater(items => [...items, product])
    }

    return(<>
        <div className="cartPage">
            <div className="cartItems">
                {cart.filter(item => item.quantity > 0).map(item => <div className="horizontalCard" key={item.id}>
                    <img className="horizontalImage" src="https://via.placeholder.com/150" />
                    <div className="cartDetails">
                        <div className="itemDetails">
                            <p className="productName"> {item.name} </p>
                            <p className="mg-05"> Quantity = {item.quantity} </p>
                            <button className="addCartButton" onClick={() => addToCartHandler(item)}> + </button>
                            <button className="removeCartButton" onClick={() => removeFromCartHandler(item)}> - </button>
                            <button className="removeCartButton" onClick={() => saveForLaterHandler(item)}> Save for Later </button>
                        </div>
                        <p className="productPrice"> Rs. {item.price} </p>
                    </div>
                </div>)}
            </div>
            <div className="cartStats">
                <p> Cart Count : <b> {cartCount} items </b> </p>
                <p> Cart Price : <b> Rs. {cartPrice} </b> </p>
            </div>
        </div>
        <div>
            {saveForLater.length > 0 && <h2> Save for Later : </h2> }
            <div className="cartItems">
                {saveForLater.map(item => <div className="horizontalCard" key={item.id}>
                    <img className="horizontalImage" src="https://via.placeholder.com/150" />
                    <div className="cartDetails">
                        <div className="itemDetails">
                            <p className="productName"> {item.name} </p>
                            <p className="mg-05"> Quantity = {item.quantity} </p>
                            <button className="addCartButton" onClick={() => addToCartHandler(item)}> Add to cart </button>
                        </div>
                        <p className="productPrice"> Rs. {item.price} </p>
                    </div>
                </div>)}
            </div>
        </div>
    </>)
}