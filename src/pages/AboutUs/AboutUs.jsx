import React from "react"

export default function AboutUs() {
  return (
    <div className='page_class'>

      <section className="nos">
        <div className="mi">
          <div className="abou-page">

            <h2>Un poco sobre de Mi</h2>
            <br />
            <p>Soy Malena Olguin y comence en el rubro de la estetica hace casi 10 años, !10 maravillosos años!. Todo con el objetivo de cambiar la vida de las personas. Durante este tiempo eh visto de todo, gente maravillosa que tiene el deseo de cambiar su vida para siempre.

              Comence mi formacion profecional hace ya varios años y he pasado por muchos cursos, en su mayoria muy buenos que me han expandido el conocimento que tengo sobre esta apasionante profecion y hoy quiero transmitirte todo ese conocimiento para transformar tu mundo y brindarte las herramientas que necesitas para trabajar con total seguridad para que asi puedas adentrarte en este mundo maravilloso.

              En un sentido metaforico darte las Alas para volar y alcanzar tu libertad. Porque apartir de hoy el cielo es tu limite.
            </p>

            <img className="fot-alumno" src="../../../src/assets/imagenes/malena.jpeg" alt="Malena" />


          </div>

          <div className="">
            <h2>Nuestro proposito</h2>
            <br />
            <p>Quiero  birndarte las herramientas que necesitaras para adentrarte a este mundo y que descubras tu profecion, tu pasion y que sepas que <strong>
              <br />
              ¡Si, se puede vivir haciendo lo que mas te gusta! </strong>
              <br />
              <br />

              Desde que comence mi formacion profecional he sentido que esta profecion me cambio la vida y quiero que te sientas asi.

              Deseo que no tengas que depender de nada ni de nadie para vivir tu vida. Deseo que puedas tener sueños y que puedas cumplirlos. Deseo que te sientas libre y que nadie te limite.
              Deseo que esta profesion te cambie. Que te transforme como lo hizo conmigo.
              <br />
              <br />
              <strong>Deseo que alcances tu mejor version...</strong>
            </p>
              <br />
          </div>

          <h2>¿Por que convertirte en lashista?</h2>
          <br />
          <p>La verdadera pregunta es ¿Por que no?. A medida que vayas conociendo este hermoso mundo entenderas que no solo es un lindo trabajo o es algo rapido para hacer ahora. Convertirte en lashista puede cambiar tu vida y creeme, lo hara.
            <br />

            Hoy mas que nunca tenemos todas las herramientas y el conocimento para lograr maravillas de trabajos que son una verdadera obra de arte. Y las capacitaciones para lograrlo estan al alcance de tu mano.

            Hoy no se necesita mucho para comensar en esta profecion solo las ganas de aprender y de progresar, lo demas llega pasito a pasito.
            <br/>  

            Miles de persona ya han cambiado su vida al encontrar un trabajo que puede adecuarse a su tiempo, a su horario, a su espacio, y 
            <br />
            <strong>la proxima podes ser vos. </strong>
          </p>
            <br />
          <img className="fot-alumno" src="../../../src/assets/imagenes/diplomas.jpg" alt="Diplomas" />
          <br />


          <h2>¿Como inicio?</h2>
          <br />
          <p>Al igual que en el colegio no podemos ir a la universidad si no pasamos el colegio secundario. Por eso lo mejor es enpezar por lo basico. En nuestro curso de Tenica clasica aprenderas todo sobre la tecnica de colocacion, la preparacion previa y los cuidados posteriores para que tu trabajo quede impecable y sientas orgullo de lo que estas haciendo.
          <br />
            Aprenderas los cuidados que tienes que tener a la hora de trabajar, la estructura de los ojos y todo el paso a paso con el acompañamiento de nuestros profesionales.
          </p>
          <br />
          <button >Registrate para comenzar </button>
          <br />
          <br />
          <h2>Lashtour</h2>
          <p>Queremos estar cada vez mas cerca tuyo por eso brindamos nuestros <strong>Lashtour</strong> alrededor de todo el pais.
            <br />
            Conoce mas sobre nuestas proximas fechas y en que provincias vamos a estar. !Tu carrera soñada podria estar a la vuelta de tu casa¡
          </p>
            <br />
          <h2>¿Donde encontrarnos?</h2>
          <br />
          <p>Encuentranos en nuestras redes sociales de Facebook, Instagram, Tiktok, Youtube y Whatsapp. O en nuestras sucursales a metros del shopping de San justo</p>



          <br />
          <strong>¡Te esperamos!</strong>

        </div>

        {/* CONTACTAR */}

        <div className="page_class">
      
      <section className="contaccont-simple">
        <h1>Contacto</h1>
        <div className="Contacto">
            
            <div>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5478466547!2d-58.557734700000005!3d-34.6913595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc61ef3cf48e3%3A0x79d28128afe87634!2sParral%203391%2C%20B1754%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1709507405362!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
            <div>
                <form action="form-cont">
                    <div className="controls">
                        <label htmlFor="inputName"></label>
                        <input  title="Ingrese Nombre completo" type="text" minLength="3" maxLength="30"  name="nombre"
                            id="inputName" placeholder="Ingrese su nombre"/>
                    </div>
                    <div className="controls">
                        <label htmlFor="inputsurName"></label>
                        <input  title="Ingrese su Apellido" type="text" minLength="3" maxLength="30" name="apellido"
                            id="inputsurName" placeholder="Ingrese su Apellido"/>
                    </div>
                    <div className="controls">
                        <label htmlFor="inputEmail"></label>
                        <input  title="Ingrese su mejor correo electronico" type="email" minLength="3" maxLength="30" name="correo"
                            id="inputEmail" placeholder="johndoe@gmail.com"/>
                    </div>
                    
                    <div className="controls">
                        <textarea  name="observacion" id="" cols="20" rows="5" placeholder="Ingrese su consulta"></textarea>
                    </div>
                                   
                    <button className="botons" type="submit" >Quiero que me contacten</button>
                </form>

            </div>
        </div>
    </section>
      
      </div>

        <section className="Tarjeta-de-presentacion">
          <div className="alumno">
            <img className="fot-alumno" 
            src="../../../src/assets/imagenes/RubertArnez.jpg" alt="Rubert Arnez" />

            <p className="productoDescripcion">Este trabajo fue realizado por Rubert Adrian Arnez Terrazas </p>
            <div className="ProductoBoton">
            {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
              {/* <ul class="social_list">
                <li><i class="fa-brands fa-facebook fa-xl" style="color:  #2f7ff7;"></i> Facebook</li>
                <li><i class="fa-brands fa-instagram fa-xl" style="color: #fb4ce9;"></i> Instagram</li>
                <li><i class="fab fa-whatsapp fa-xl" style="color: #27b94c;"></i> Whatsapp</li>
              </ul> */}
            </div>
            <button className="contactar">Contactar</button>
          </div>

        </section>

      </section >


    </div >
  )

}
