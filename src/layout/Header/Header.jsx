// import { NavLink } from 'react-router-dom'
// import React from 'react';
// import './Header.css'
// import '../../pages/style/style.css'
// import { useOrder } from "@/context/OrderContext";
// import { useUser } from "@/context/UserContext";

// export default function Header() {

//     const { toggleMenu, totalItems } = useOrder();
// 	const { user, logout, admin } = useUser();

//     // const navigate = UserNAvigate()
//     // const isAdmin = true;
//     // const currentUser = JSON.parse(localStorage.getItem("currenteUSer"));

//     // function logout(){
//         // localStorage.removeItem("currentUser");
//         // localStorage.removeItem("token");
//     // };

//     return (
//             <header className='header'>
//                 <div className="cont-header">
//                     <div className="boxLogo ">
//                         <picture>
//                             <img className="logo-img" src="../src/assets/imagenes/logo.png" width="120" height="250" />
//                         </picture>

//                     </div >
//                     <NavLink to="/" className="header-link">Malena Olguin</NavLink>

//                     {/* <NavLink to="/" className={({ isActive }) => isActive? "header-link active" : "header-link"}>Malena Olguin</NavLink> */}
//                     <NavLink to="/Product" className="header-link">Productos</NavLink>
//                     <NavLink to="/AboutUs" className="header-link">Acerca de</NavLink>
//                     <NavLink to="/Registro" className="header-link">Registro</NavLink>
                    
//                     {currentUser? (
//                     <button className='nav-link' onClick ={() => logout()}>Logout</button>
//                     ) : (
//                     <NavLink to="/Login" className="header-link">Login</NavLink>
//                     )}
                   
//                     {isAdmin && (
//                         <>
//                             <NavLink to="/AdminProduct" className="header-link">Admin Product</NavLink>
//                             <NavLink to="/AdminUser" className="header-link">Admin User</NavLink>
                            
//                         </>
//                     )
//                     }


//                 </div>


//             </header >
//     );
// }

import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useOrder } from "@/context/OrderContext";
import { useUser } from "@/context/UserContext";

const URL = import.meta.env.VITE_SERVER_URL;

const Header = () => {
	const { toggleMenu, totalItems } = useOrder();
	const { user, logout, admin } = useUser();

	return (
	<header className="header">
			<nav className="cont-header">
                <div className="boxLogo">
                    <picture>
                        <img className="logo-img" src="../src/assets/imagenes/logo.png" width="120" height="250" />
                    </picture>
                </div>
				<NavLink to="/" className="header-link">Malena Olguin</NavLink>

                <NavLink to="/Product" className="header-link">Productos</NavLink>
                     <NavLink to="/AboutUs" className="header-link">Acerca de</NavLink>
                 <NavLink to="/Registro" className="header-link">Registro</NavLink>

				{user ? <NavLink to="/orders" className="header-link">
							Ordenes
						</NavLink> : (
					<>
						<NavLink to="/register" className="header-link">
							Registro
						</NavLink>
					</>
				)}

				{admin && (
					<>
						<NavLink to="/AdminProduct" className="header-link">
							Admin Product
						</NavLink>
						<NavLink to="/AdminUser" className="header-link">
							Admin user
						</NavLink>
					</>
				)}

				{/* {
                avaibleLinks.map(link => (
                    <NavLink key={link.path} className="nav-link" to={link.path} >{link.text}</NavLink>
                ))
            } */}
			</nav>
			<div className="user-info">
				{user ? (
					<>
						<div className="icon-container">
							<i
								data-count={ totalItems }
								className="cart-icon fa-solid fa-cart-shopping"
								onClick={() => toggleMenu()}
							></i>
						</div>
						<div className="dropdown-menu user-avatar">
							<img src={`${URL}/images/users/${user.image}`} alt={user.name} />
							<div className="dropdown-links">
								<NavLink to="/orders" className="header-link">
									<i className="fa-solid fa-dolly"></i>
									Ordenes
								</NavLink>
								<a className="header-link" onClick={() => logout()}>
									<i className="pointer fa-solid fa-arrow-right-from-bracket"></i>{" "}
									Logout
								</a>
							</div>
						</div>
					</>
				) : (
					<NavLink to="/login" className="header-link">
						Login
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;