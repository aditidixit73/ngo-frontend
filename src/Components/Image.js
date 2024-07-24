import React from 'react'
import { useLogin } from '../context/AdminDetails'

export default function Image() {
    const { gallery } = useLogin()
    return (
        <div className='main-container-image'>
        {gallery?gallery.map((elem)=>{
            return(
            <div className="card-image">
                <img src={elem} alt="" />
            </div>
            )
        }):null}
        </div>
    )
}
