import React from 'react'

import Backgroundservice from '../../components/component/Background/Backgroundservice'
import Servicepage from '../../components/component/Servicepage'
import Footers from '../../components/Footer/Footer'
import NavBar from '../../components/NavigationBar/NavBar'
import TopBar from '../../components/TopBAr/TopBar'

function Services() {
  return (
    <div>
      <TopBar />
      <NavBar/>
      <Backgroundservice />
      <Servicepage/>
      <Footers/>
      

    </div>
  )
}

export default Services;