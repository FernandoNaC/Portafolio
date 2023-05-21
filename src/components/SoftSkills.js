import React from 'react'
import SideNavBar from './SideNavbar'
import '../styles/SoftSkills.css'

const SoftSkills = () => {
  return (
    <div>
        <SideNavBar/>
        <div className='softSkills'>
          <div className='cv-start'>
            <h1>SOFT SKILLS</h1>
            <ul>
              <li>
              Capacidad de trabajo en equipo
              </li>
              <li>
              Mente abierta
              </li>
              <li>
              Resolución de problemas
              </li>
              <li>
              Capacidad de adaptación
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default SoftSkills