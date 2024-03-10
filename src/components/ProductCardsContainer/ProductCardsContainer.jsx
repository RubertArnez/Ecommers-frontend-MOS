import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard';



export const ProductCardsContainer = () => {
    const [products, setProduct] = useState([]);
  

    useEffect(function() {
        // codigo que se ejecuta cuando se monta el componente 
        console.log('Se monto el componente')
        getProduct()



    }, [])

    async function getProduct() {
        try {
            // Pedido al backend de los usuarios para luego pundtalos 

            const response = await axios.get('http://localhost:3000/product')

            setProduct(response.data.products);

            console.log(response)


        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h2>Lista de productos</h2>
            <div className='product-container'>

                {
                    products.map(product => {
                        return (
                            // llamar al componente 
                            <ProductCard product={product} key={product._id} />
                        )
                    })
                }

            </div>
        </div>
    )
}


