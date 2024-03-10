import '../style/style.css';
import React from 'react';

export default function Home() {
  return (

    <div>
    <section id="hero">
      <h1>Aprende tu proxima profesion</h1>
      <button href="/pages/Registrarse.html"> Comenzar ya!</button>
    </section>

<section>
      <div className="container">

        <div className="img-container">

            <h3> Formate profesionalmente
              <span className="color-acento">¡Hoy mismo!</span></h3>
            <p>Hoy mas que nunca es posible crear tu futuro.
               Aprende una profesion con <strong>rapida salida
                    laboral</strong> que te ayudara alcanzar tu tan soñada libertad.
                    Aprende las tencicas que
                toda lashista profesional debe conocer de la mano de los mejores profesionales que te guiaran paso a
                paso en este hermoso camino hasta convertirte <strong> en tu mejor version.</strong> 
                ¡No esperes
                mas!</p>
            <button>Comenzar ya!</button>
        </div>
    </div>
</section>


<section className="nuestros-cursos">

    <div className="container">

        <h2>Nuestros Cursos</h2>
        <div className="cursos">
            <div className="carta">
                <div className="carta-fondo">
                    <div className="carta-cuadro">
                        <h3>Curso presencial</h3>
                        <p>Conoce nuestras fechas disponibles y los Lashtour que estamos preparando para vos.

                            ¡No te lo pierdas!
                        </p>
                        <button>+ Info</button>
                    </div>
                </div>
            </div>

            <div className="carta">
                <div className="carta-fondo">
                    <div className="carta-cuadro">
                        <h3>Curso virtual</h3>
                        <p>Con nuestras clases aprende a tu ritmo. Te ofrecemos un seguimiento
                            personalizado.
                            ¡Nunca te
                            sentiras sola!</p>
                        <button>+ Info</button>
                    </div>
                </div>
            </div>

            <div className="carta">
                <div className="carta-fondo">
                    <div className="carta-cuadro">
                        <h3>Modalidad mixta</h3>
                        <p>El tiempo es muy valioso y lo podes aprovechar al maximo.Teoria online y practicas
                            presenciales.
                            ¡Empeza hoy mismo! </p>
                        <button>+ Info</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    </div>
  )
}


