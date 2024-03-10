import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
	// obtuve del localStorage las credenciales si el usuario es ADMIN
	// const {isAdmin} = useUser();
	const isAdmin = true;

	return isAdmin ? children : <Navigate to="/" replace />;
}
