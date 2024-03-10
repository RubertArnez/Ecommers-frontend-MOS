// import { Route, Routes } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import AdminProduct from './pages/AdminProduct/AdminProduct';
import AdminUser from './pages/AdminUser/AdminUser';
import AdminRoute from './assets/Guard/Admin/AdminRoute';
import './pages/style/style.css';

function App() {
	return (
		<>
			<Header />

			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Product" element={<Product />} />
					<Route path="/AboutUs" element={<AboutUs />} />
					<Route path="/Registro" element={<Registro />} />
					<Route path="/Login" element={<Login />} />

					{/* Rutas protegidas con el Guard AdminRoute */}
					<Route
						path="/AdminProduct"
						element={
							<AdminRoute>
								{/* <AdminProduct /> */}
								<AdminProduct />
							</AdminRoute>
						}
					/>
					<Route
						path="/AdminUser"
						element={
							<AdminRoute>
								< AdminUser />
							</AdminRoute>
						}
					/>
				</Routes>
			</main>

			<Footer />
		</>
	);
}

export default App;
