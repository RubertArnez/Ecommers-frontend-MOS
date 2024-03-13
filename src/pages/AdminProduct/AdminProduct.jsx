import { React, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ProductTable } from '@/components/ProductTable/ProductTable';
import ProductForm from '@/components/RegisterForm/ProductForm';
// import './AdminUser.css';

const URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = localStorage.getItem('token');
const AdminProduct = () => {
	const [dbProduct, setDbProduct] = useState([]);
	const [productId, setProductId] = useState();
	const [formValue, setFormValue] = useState();
	// const [isFormEdit, setIsFormEdit] = useState(false);

	const [totalButtons, setTotalButtons] = useState([]);
	const [limit, setLimit] = useState(2);

	// -Obtener usuarios
	async function getProducts(page = 0) {
		try {
			const response = await axios.get(
				`${URL}/product?page=${page}&limit=${limit}`
			);
			const products = response.data.products;
			const total = response.data.total;

			const buttonsQuantity = Math.ceil(total / limit);

			const arrayButtons = [];

			for (let i = 0; i < buttonsQuantity; i++) {
				arrayButtons.push(i);
			}

			setTotalButtons(arrayButtons);

			setDbProduct(products);

			console.log(response.data);
		} catch (error) {
			console.log(error);
			Swal.fire({
				title: 'No se pudieron obtener los Productos',
				icon: 'error',
			});
		}
	}

	// Borrar Usuario 
	async function deleteProduct(id) {
		Swal.fire({
			title: `Confirma borrar este producto?`,
			text: `Realmente desea borrar el producto ${id}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Borrar',
			cancelButtonText: `Cancelar`,
			confirmButtonColor: '#d33',
			reverseButtons: true,
		}).then(async function (resultado) {
			if (resultado.isConfirmed) {
				try {
					if (!TOKEN) return;
					// Borrar el usuario en la base de datos
					console.log(`Producto a borrar ${id}`);

					// Borrar el usuario de la base de datos
					await axios.delete(`${URL}/product/${id}`, {
						headers: { authorization: TOKEN },
					});

					Swal.fire({
						title: `Usuario Borrado`,
						text: `El user ${id} fue borrado correctamente`,
						icon: 'success',
						timer: 1500,
					});
					// Actualizar el estado de mi dbUsers para que se vuelva a pintar sin el user borrado
					getProducts();
				} catch (error) {
					console.log(error);
					Swal.fire('Error al borrar', 'No se pudo borrar el producto', 'error');
				}
			}
		});
	}

	useEffect(
		function () {
			getProducts();
			// getCategories();
		}, //	Funcion que se ejecuta cuando se monta el componente
		[limit]
	);
// Buscar 
	async function handleSearch(e) {
		// Hacer una peticion a mi servidor para buscar usuarios
		try {
			const search = e.target.value;

			if (!search) getProducts();

			if (search.length <= 3) return;

			const response = await axios.get(`${URL}/product/search/${search}`);

			const products = response.data.products;

			setDbProduct(products);
		} catch (error) {
			console.log(error);
			// Mensaje para el usuario de que no se pudo buscar o algo
		}
	}
	// Editar Usuario
	function fnSetFormValue(product) {
		const { _id, ...formValue } = product;
		setProductId(_id);
		setFormValue(formValue);
	}

	return (
		<div className="admin-dashboard">
			<div className="form-container">
				{/* Formulario de carga de usuarios */}
				<div className="form-sticky">
					<ProductForm
						getUsers={getProducts}
						formValue={formValue}
						productId={productId}
						setProductId={setProductId}
					/>
				</div>
			</div>

			<div className="table-container">
				{/* Tabla con mis productos para manejar el CRUD de los mismos */}
				<div className="flex-between">
					<h2>Tabla de productos</h2>
					<div className="input-group">
						<label htmlFor="search">Buscar producto</label>
						<input type="text" id="search" onKeyUp={handleSearch} />
					</div>
				</div>
				<ProductTable
					products={dbProduct}
					deleteProduct={deleteProduct}
					fnSetFormValue={fnSetFormValue}
				/>
				<div className="table-utils">
					<div className="pagination-container">
						{totalButtons.map((btn) => (
							<button key={btn} onClick={() => getProducts(btn)}>
								{btn + 1}
							</button>
						))}
					</div>
					<div>
						<select onChange={(e) => setLimit(e.target.value)}>
							<option value={2}>2</option>
							<option value={5}>5</option>
							<option value={10}>10</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminProduct;





// // import { useEffect, useState, React } from 'react';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// const URL = import.meta.env.VITE_SERVER_URL;

// export default function AdminProduct() {
// 	const { register, handleSubmit } = useForm();
// 	// const [categories, setCategories] = useState([]);

// 	// useEffect(() => {
// 	// 	getCategories();
// 	// }, []);

// 	// async function getCategories() {
// 	// 	try {
// 	// 		const response = await axios.get(`${URL}/product/categories`);
// 	// 		const { categories } = response.data;

// 	// 		setCategories(categories);
// 	// 	} catch (error) {
// 	// 		console.log(error);
// 	// 		Swal.fire('Error', 'Ocurrio un error al obtener las categorias', 'error');
// 	// 	}
// 	// }
// 	async function getProducts(page = 0) {
// 		try {
// 			const response = await axios.get(
// 				`${URL}/users?page=${page}&limit=${limit}`
// 			);
// 			const users = response.data.product;
// 			const total = response.data.total;

// 			const buttonsQuantity = Math.ceil(total / limit);

// 			const arrayButtons = [];

// 			for (let i = 0; i < buttonsQuantity; i++) {
// 				arrayButtons.push(i);
// 			}

// 			setTotalButtons(arrayButtons);

// 			setDbUsers(users);

// 			console.log(response.data);
// 		} catch (error) {
// 			console.log(error);
// 			Swal.fire({
// 				title: 'No se pudieron obtener los Usuarios',
// 				icon: 'error',
// 			});
// 		}
// 	}
// 	async function submitedData(data) {
// 		try {
// 			// TODO: enviar estos datos al backend como body de la request POST, llamar el endpoint POST /products
// 			const formData = new FormData();
// 			Object.keys(data).forEach((key) => {
// 				if (key === 'image') {
// 					formData.append(key, data[key][0]);
// 					return;
// 				}
// 				formData.append(key, data[key]);
// 			});

// 			formData.forEach((value, key) => console.log(key, value));

// 			await axios.post(`${URL}/product`, formData, {
// 				headers: {
// 					Authorization: localStorage.getItem('token'),
// 				},
// 			});

// 			Swal.fire(
// 				'Producto creado',
// 				'El producto fue creado con exito',
// 				'success'
// 			);
// 		} catch (error) {
// 			console.log(error);
// 			Swal.fire('Error', 'Ocurrio un error al crear el producto', 'error');
// 		}
// 	}

// 	return (
// 		<div className="admin-dashboard">
// 			<div className="form-container">
// 				{/* Formulario de carga de productos */}
// 				<h2>Carga Producto</h2>

// 				<form className="admin-form" onSubmit={handleSubmit(submitedData)}>
// 					<div className="input-group">
// 						<label htmlFor="product">Producto</label>
// 						<input
// 							type="text"
// 							id="product"
// 							className="admin-input"
// 							// {...register('name')}
// 							{...register('productName')}
// 						/>
// 					</div>
// 					<div className="input-group">
// 						<label htmlFor="">Precio</label>
// 						<input
// 							type="number"
// 							className="admin-input"
// 							{...register('price')}
// 						/>
// 					</div>
// 					<div className="input-group">
// 						<label htmlFor="">Descripcion</label>
// 						<textarea
// 							rows={6}
// 							className="admin-input"
// 							// {...register('description')}
// 							{...register('fullDescripcion')}
// 						></textarea>
// 					</div>
// 					<div className="input-group">
// 						<label htmlFor="image">Imagen</label>
// 						<input
// 							type="file"
// 							id="image"
// 							className="admin-input"
// 							{...register('image')}
// 						/>
// 					</div>
// 					<div className="input-group">
// 						<label htmlFor=""></label>
// 					</div>
// 					<div className="input-group">
// 						<input
// 							type="checkbox"
// 							className="admin-input"
// 							{...register('active')}
// 						/>
// 						Activo
// 					</div>
// 					{/* <div className="input-group">
// 						<select
// 							defaultValue="default"
// 							disabled={!categories.length}
// 							className="admin-input"
// 							{...register('category')}
// 						>
// 							 <option value="default" disabled>
// 								Seleccione una categoria
// 							</option> 
// 							{categories.map((category) => (
// 								<option key={category._id} value={category._id}>
// 									{category.name}
// 								</option>
// 							))}
// 						</select>
// 					</div> */}
// 					<div className="input-group">
// 						<button type="submit">Crear Producto</button>
// 					</div>
// 				</form>
// 			</div>

// 			<div className="table-container">
// 				{/* Tabla con mis productos para manejar el CRUD de los mismos */}
// 				<h2>Tabla de productos</h2>
// 			</div>
// 		</div>
// 	);
// }
