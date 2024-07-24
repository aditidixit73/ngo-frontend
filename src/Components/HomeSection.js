import React, { useEffect, useState } from 'react'
import PhotoSlider from './photoslider'
import { useLogin } from '../context/AdminDetails'
import { Link } from 'react-router-dom'

export default function HomeSection() {
  const [featact, setFeat] = useState(false)
  const { about, getFeatActivity } = useLogin()
  useEffect(() => {
    const efunc = async () => {
      await getFeatActivity().then(res => setFeat(res))
    }
    efunc()
  }, [])
  return (
    <div className='home-section'>
      <PhotoSlider />
      <div className="center-text">
        <h2>About The Society</h2>
        <p>{about.brieftext} <Link to={"/about-us"} style={{ textDecoration: 'underline', color: 'var(--primary)' }}>Read More</Link></p>
      </div>
      <hr />
      <div className="activities">
        <h2>Featured Activities</h2>
        <div className="act-container">
          {
            featact?featact.map((item) => {
              return (
                <div className="act-card">
                  <div className="act-text">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <img src={item.image} alt="alll" />
                </div>
              )
            }):null
          }
        </div>
      </div>
    </div>
  )
}
