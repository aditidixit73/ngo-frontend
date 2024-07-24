import React from 'react'
import { useLogin } from '../context/AdminDetails'

export default function Vision() {
  const {mission}=useLogin()
  return (
    <div className='mission-container'>
        <h2>Our Vision</h2>
        <p>
        {mission.vision}
        </p>
        <br />
        <hr />
        <h2>Our Mission</h2>
        <p>
        {mission.mission}
        </p>
    </div>
  )
}
