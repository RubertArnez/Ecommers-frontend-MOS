import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Login() {
  const navigate = useNavigate()
  

  function handleSubmit(event) {
    event.preventDefault();
    const el = event.target.elements;


    const data = {
      email: el.email.value,
      password: el.password.value
    }

    login(data)
    // recibe el email y password
  }

  async function login(data) {
    try {
      // mandamos los datos al backend
      console.log(import.meta.env)

      // Con esta constante llamamos a la URÑ
      const response = await axios.post(import.meta.env.VITE_SERVER_URL+'/login', data)

      // TOKEN
      const { token, user } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('currentUser', JSON.stringify(user))

    Swal.fire({
      title:'Login correcto',
      text:'Sera redireccionado en breve',
      icon:'success',
      timer: 1500
    }).then(() => {
      navigate("/")
    })

    } catch (error) {
      console.log(error)
      Swal.fire({
        title:'Error al ingresar',
        text: 'Alguno de los datos ingresados no es correcto',
        icon: 'error',


      })
    }

  }


  // Esta es mi pagina de login 
  return (
    <div>

      <section className="loginUsuario" >
        <div className="login-wrapper">
          <h1 className="login-title">Login</h1>
          <br />

          <form  className="login-form" id="login-form" onSubmit={handleSubmit} >
            <div className="input-group">
              <label >Correo Electrónico</label>
              <input type="text" name="email"  required placeholder="Correo" className="loginInput" />
            </div>
            <div className="input-group">
              <label >Contraseña</label>
              <input type="password" name="password" required placeholder="Contraseña" className="loginInput" />
            </div>

            <button type="submit" className="btn-form">Ingresar</button>
          </form>
        </div>
      </section>

    </div>
  )
}