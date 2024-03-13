import React from "react";
import defaultPicture from "../../assets/imagenes/default-product-picture.jpg";

export const ProductTableRow = ({ product, deleteProduct, editProduct }) => {
  return (
    <tr key={product._id}>
      <td className="table-img">
        <img
          src={product.image ? `${URL}/images/products/${product.image}` : defaultPicture}
          alt={`${product.productName} product image`}
        />
      </td>
      <td className="table-name">{product.productName.toUpperCase()}</td>
      <td className="table-description">{product.fullDescription}</td>
      <td className="table-price">{product.price}</td>
      <td className="table-category">{product.category}</td>
      <td className="table-actions">
        <div className="btn-container">
          <button className="btn btn-delete" onClick={() => deleteProduct(product._id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="btn btn-edit" onClick={() => editProduct(product)}>
            <i className="fa-solid fa-pencil"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};
