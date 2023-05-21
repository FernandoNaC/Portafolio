import React from 'react'
import SideNavBar from './SideNavbar'
import '../styles/HardSkills.css'

const HardSkills = () => {
  return (
    <div>
        <SideNavBar/>
        <div className='hardSkills'>
          <div className='cv-start'>
            <h1>HARD SKILLS</h1>
            <ul>
              <li>
                Python Avanzado
              </li>
              <li>
                C++ Avanzado
              </li>
              <li>
                Java Avanzado
              </li>
              <li>
                JavaScript Avanzado
              </li>
              <li>
                HTML/CSS Avanzado
              </li>
              <li>
                  Typescript Principiante
              </li>
              <li>
                  C# (Unity) Principiante
              </li>
              <li>
                React.js y Bootstrap Avanzado
              </li>
              <li>
               Microsoft Power Automate y UiPath Principiante
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default HardSkills