import React from 'react'
import SideNavBar from './SideNavbar'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
        <SideNavBar/>
        <div className='home'>
            <div className='animate-character'>¡Bienvenidos!</div>
            <div className='cv-start'>
              <h1>MI PERFIL</h1>
              <p>Estudiante de 6º semestre de la carrera
              de ingeniería, con conocimientos en programación, incluyendo: bases de datos, front
              end, back-end entre otros. Con disposición por seguir aprendiendo y trabajar.
              </p>
              <ul>
                <li>
                  21 años
                </li>
                <li>
                  fernando.nava.cano@gmail.com
                </li>
                <li>
                  Tlalnepantla, Estado de México
                </li>
              </ul>
            </div>
            <div classname='cv-middle'>
              <h1>MI EDUCACION</h1>
              <h2>INGENIERÍA EN SISTEMAS COMPUTACIONALES (ESTUDIANTE)</h2>
              <p>Tecnológico de Monterrey (2020 - 2024)</p>
            </div>
        </div>
    </div>
  )
}

export default Home