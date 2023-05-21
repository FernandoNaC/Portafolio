import React from 'react'
import SideNavBar from './SideNavbar'
import '../styles/Works.css'
const Works = () => {
  return (
    <div>
        <SideNavBar/>
        <div className='works'>
            <div>
            <h1>Mis trabajos</h1>
            <ul>
              <li>
                Atizappan
                <p>Desarrollo de una página web y
                aplicación de android para el
                gobierno de Atizapán
                </p>
              </li>
              <li>
                Projecto de Unity
                <p>Desarrollo de un videojuego en
                Unity con objetivos educacionales
                para la organización PAS (Sociedad
                de Artes de Percusión) por sus
                siglas en inglés
                </p>
              </li>
            </ul>
            </div>
          </div>
    </div>
  )
}

export default Works