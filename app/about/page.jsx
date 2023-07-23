import React from 'react'
import Clients from './Clients'
import Support from './Support'
import Mission from './Mission'
import Info from './Info'
import Team from '@/components/team/Team'
import Vision from './Vision'

export default function page() {
  return (
    <div className='container'>
        <Mission/>
        <Vision/>
      <Info/>
        <Support/>
        <Clients/>
    </div>
  )
}
