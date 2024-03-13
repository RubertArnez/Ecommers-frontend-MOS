import { useUser } from '@/context/UserContext';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { UserTable } from '../UserTable/UserTable';

const URL = import.meta.env.VITE_SERVER_URL;
// Defino variable global para mi componente para user el TOKEN en distintas peticiones
const TOKEN = localStorage.getItem('token');

const RegisterForm = ({ getProduct, formValue, productId, setProductId }) => {
	const { register, handleSubmit, setValue, reset } = useForm();
	const { logout } = useUser();
	console.log(productId);
	// Obtener data del formulario y hacer un POST o un PUT
	async function submitedData(data) {
		try {
			console.log(data);

			const formData = new FormData();

			formData.append('name', data.name);
			formData.append('email', data.email);
			if (!productId) {
				formData.append('password', data.password);
			}
			formData.append('age', data.age);
			formData.append('location', data.location);
			// Imagen tengo que hacer algo diferente
			formData.append('image', data.image[0]);

			if (productId) {
				if (!TOKEN) return;
				console.log('Estoy editando un Producto');
				// ME FALTA AÑADIR EL
				const response = await axios.put(`${URL}/users/${productId}`, formData, {
					headers: {
						authorization: TOKEN,
					},
				});

				Swal.fire({
					title: 'Usuario Editado Correctamente',
					text: `El producto ${response.data.product.name} fue editado correctamente`,
					icon: 'success',
				});
				if (getProduct) {
					getProduct();
					setProductId(null);
				}
				reset();
				// Hago un return para que mi código que sigue luego del if no se ejecute
				return;
			}

			const response = await axios.post(`${URL}/product`, formData);
			console.log(response.data);
			Swal.fire({
				title: 'Producto Creado',
				text: `El producto ${response.data.product?.name} fue creado correctamente`,
				icon: 'success',
			});

			reset();
			if (getProduct) getProduct();

			// setFormValue();
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'No se creo producto',
				text: 'Alguno de los datos ingresados no es correcto',
			});
			if (error.response.status === 401) {
				logout();
			}
		}
	}

	if (formValue) {
		setValue('name', formValue?.name || '');
		setValue('email', formValue?.email || '');

		setValue('age', formValue?.age || '');
		setValue('location', formValue?.location || '');
	}

	return (
		<div className="form-wrapper">
			<h2 className="admin-form-title">Registro de Productos </h2>

			<form
				className="admin-form"
				onSubmit={handleSubmit(submitedData)}
				encType="multipart/form-data"
			>
				<div className="input-group">
					<label htmlFor="product">Producto</label>
					<input
						type="text"
						id="product"
						className="admin-input"
						{...register('productName')}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="">Precio</label>
					<input type="number" className="admin-input" {...register('price')} />
				</div>
				<div className="input-group">
					<label htmlFor="">Descripcion</label>
					<textarea
						rows={6}
						className="admin-input"
						{...register('fullDescripcion')}
					></textarea>
				</div>
                <div className="input-group">
 						<label htmlFor=""></label>
 					</div>
 					<div className="input-group">
 						<input
 							type="checkbox"
 							className="admin-input"
 							{...register('active')}
 						/>
 						Activo
 					</div>
				<div className="input-group">
					<label htmlFor="">Imagen</label>
					<input
						type="file"
						accept="image/*"
						className="admin-input"
						{...register('image')}
					/>
				</div>

				{/* <div className="input-group">
								<label htmlFor="location">Seleccione Cateroria</label>
								<select id="location" {...register("location")}>
								<option value="buenos_aires">BUENOS AIRES</option>
								<option value="catamarca">CATAMARCA</option>
								<option value="chaco">CHACO</option>
								<option value="chubut">CHUBUT</option>
								<option value="ciudad_autonoma_bs_as">CIUDAD AUTONOMA DE Bs As</option>
								<option value="cordoba">CORDOBA</option>
								<option value="corrientes">CORRIENTES</option>
								<option value="entre_rios">ENTRE RIOS</option>
								<option value="formosa">FORMOSA</option>
								<option value="jujuy">JUJUY</option>
								<option value="la_pampa">LA PAMPA</option>
								<option value="la_rioja">LA RIOJA</option>
								<option value="mendoza">MENDOZA</option>
								<option value="misiones">MISIONES</option>
								<option value="neuquen">NEUQUEN</option>
								<option value="rio_negro">RIO NEGRO</option>
								<option value="salta">SALTA</option>
								<option value="san_luis">SAN LUIS</option>
								<option value="santa_cruz">SANTA CRUZ</option>
								<option value="santa_fe">SANTA FE</option>
								<option value="santiago_del_estero">SANTIAGO DEL ESTERO</option>
								<option value="tierra_del_fuego">TIERRA DEL FUEGO</option>
								<option disabled defaultValue>Seleccionar una Provincia</option>
								</select>
							</div> */}

				<div className="input-group">
					<button type="submit" className={productId ? 'btn-success' : ''}>
						{productId ? 'Editar Producto' : 'Añadir Producto'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegisterForm;
