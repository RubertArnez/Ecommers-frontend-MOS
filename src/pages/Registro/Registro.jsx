import React from "react"

export default function Registro() {
  return (
    <div className="page_class">
      <br />
      <br />
      <br />
      <section className="contenedor-simple">
        <div className="registro">
            <h2>Formulario de Registro</h2>
           <br />
            <form action="">
                <div className="controls">
                    <label htmlFor="inputName"></label>
                    <input title="Ingrese Nombre completo" type="text" minLength="3" maxLength="30"  name="nombre"
                        id="inputName" placeholder="Ingrese su nombre"/>
                </div>
                <div className="controls">
                    <label htmlFor="inputsurName"></label>
                    <input title="Ingrese su Apellido" type="text" minLength="3" maxLength="30" name="apellido"
                        id="inputsurName" placeholder="Ingrese su Apellido"/>
                </div>
                <div className="controls">
                    <label htmlFor="inputEmail"></label>
                    <input title="Ingrese su mejor correo electronico" type="email" minLength="3" maxLength="30" name="correo"
                        id="inputEmail" placeholder="johndoe@gmail.com"/>
                </div>
                <div className="controls">
                    <label htmlFor="inputPassword"></label>
                    <input type="password" name="contraseña" id="inputPassword" minLength="3" maxLength="20"placeholder="Ingrese su contraseña"/>
                </div>
                <div className="controls">
                    <label htmlFor="inputPasswordrepit"></label>
                    <input type="password" minLength="3" maxLength="20" name="contraseña" id="inputPasswordRepit" placeholder="Repita su contraseña"/>
                </div>
                
                  <br />
                
                <p>Estoy de acuerdo con <a href="#">Terminos y condiciones</a></p>
               <br />
                <button className="botons" type="submit" >Registrarse</button>
            </form>
            <br />
            <p><a href="#">¿Ya tengo cuenta?</a></p>
        </div>
    </section>
      
      </div>
  )
}
