import React from 'react'
import { useLogin } from '../context/AdminDetails'


export default function About() {
  const {about}=useLogin()
  
  return (
    <div className='about-container'>
        <h1>About the society</h1>
        <p dangerouslySetInnerHTML={{ __html: about.longtext }} />
    </div>
  )
}
