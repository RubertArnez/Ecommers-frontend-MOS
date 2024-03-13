import React from "react";
import { ProductTableRow } from "../ProductTableRow/ProductTableRow";

export const ProductTable = ({ products, deleteProduct, editProduct }) => {
	return (
		<div className="table-container">
			<table className="table-admin">
				<thead>
					<tr>
						<th>Imagen</th>
						<th>Nombre del Producto</th>
						<th>Descripción</th>
						<th>Precio</th>
						<th>Categoría</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<ProductTableRow
							key={product._id}
							product={product}
							deleteProduct={deleteProduct}
							editProduct={editProduct}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
