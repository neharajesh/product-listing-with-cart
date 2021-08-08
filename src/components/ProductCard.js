import { useCart } from "../context/cart-context";
import { addToCart } from "../pages/cart-utilities";

export const ProductCard = ({ product }) => {
    const {cart, setCart, setCartPrice, setCartCount} = useCart();
    const addToCartHandler = (product) => {
        console.log("adding to cart", product)
        const updatedCart = addToCart(cart, product)
        updatedCart.map(item => {
            setCartPrice(price => price + item.price)
            setCartCount(count => count + 1)
        })
        setCart(updatedCart);
    }
    return(<>
        <div className="productCard">
            <img className="productImage" src="https://via.placeholder.com/150" alt={product.name} />
            <div className="productDetails">
                <p className="productName"> {product.name} </p>
                <p className="productPrice"> Rs. {product.price} </p>
                <button onClick={() => addToCartHandler(product)} className="addCartButton"> Add to Cart </button> 
            </div>            
        </div>
    </>)
}