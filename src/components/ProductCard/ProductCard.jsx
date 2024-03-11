import React from 'react'
import '../ProductCard/ProductCard.css'

export const ProductCard = ({ product }) => {
// export const ProductCard = () => {


    return (
        <div className="productos">
            <div className="producto">
            
            <small>{product._id}</small>
            
                <h4 className="ProductoTitulo">
                    {product.productName}
                </h4>
                <p className="productoDescripcion">
                    {product.fullDescripcion}
                </p>
                <p className="productoIngreso">
                    {product.dateIngreso}
                </p>
                <p className="productoPrecio">
                    ${product.price}
                </p>
                
                <div className="ProductoBoton">
                    <button>Ver más</button>
                    <button>Comprar</button>
                </div>
            </div>
        </div>


)

}
