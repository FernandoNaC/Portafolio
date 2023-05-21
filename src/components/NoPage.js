import React from 'react'
import SideNavBar from './SideNavbar'
import '../styles/Home.css'

const NoPage = () => {
  return (
    <div>
      <SideNavBar/>
      <div className='home'>
              <div style={{fontSize:'80px'}}>No existe</div>
      </div>
    </div>
  )
}

export default NoPage