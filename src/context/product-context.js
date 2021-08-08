import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([])

    const fetchProductData = async() => {
        try {
            const response = await axios.get("productData.json", {
                headers : {
                    'Content-Type': 'application/json',            
                    'Accept': 'application/json'            
                }
            })
            console.log(response.data)
            return response.data
        } catch (err) {
            console.log("Error occurred while fetching data", err.message)
        }
    }

    useEffect(async() => {
        const response = await fetchProductData()
        setProductList(response.products)
    }, [])

    return(<>
        <ProductContext.Provider value={{productList, setProductList}}>
            {children}
        </ProductContext.Provider>
    </>)
}

export const useProduct = () => {
    return useContext(ProductContext)
}