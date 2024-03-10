import { NavLink } from 'react-router-dom'
import React from 'react';
import './Header.css'
import '../../pages/style/style.css'

export default function Header() {

    // const navigate = UserNAvigate()
    const isAdmin = true;
    const currentUser = JSON.parse(localStorage.getItem("currenteUSer"));

    function logout(){
        localStorage.removeItem("currentUser");
        localStorage.removeItem("token");
    };

    return (
            <header className='header'>
                <div className="cont-header">
                    <div className="boxLogo ">
                        <picture>
                            <img className="logo-img" src="../src/assets/imagenes/logo.png" width="120" height="250" />
                        </picture>

                    </div >
                    <NavLink to="/" className="header-link">Malena Olguin</NavLink>

                    {/* <NavLink to="/" className={({ isActive }) => isActive? "header-link active" : "header-link"}>Malena Olguin</NavLink> */}
                    <NavLink to="/Product" className="header-link">Productos</NavLink>
                    <NavLink to="/AboutUs" className="header-link">Acerca de</NavLink>
                    <NavLink to="/Registro" className="header-link">Registro</NavLink>
                    
                    {currentUser? (
                    <button className='nav-link' onClick ={() => logout()}>Logout</button>
                    ) : (
                    <NavLink to="/Login" className="header-link">Login</NavLink>
                    )}
                   
                    {isAdmin && (
                        <>
                            <NavLink to="/AdminProduct" className="header-link">Admin Product</NavLink>
                            <NavLink to="/AdminUser" className="header-link">Admin User</NavLink>
                            
                        </>
                    )
                    }


                </div>


            </header >
    );
}
