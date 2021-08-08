import { useProduct } from "../context/product-context";
import { ProductCard } from "../components/ProductCard"

export const Products = () => {
    const { productList } = useProduct();
    return (<>
        <div className="productCardContainer">
            {productList.map(product => <div key={product.id}>
                <ProductCard product={product} />
            </div>)}
        </div>
    </>)
}