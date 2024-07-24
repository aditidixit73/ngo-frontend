import React from 'react'
import { useLogin } from '../context/AdminDetails'

export default function Video() {
    return (
        <div className='main-container-video'>
        <iframe width="900" height="600" src="https://www.youtube.com/embed/ZAlAlD06MME" title="REPUBLIC DAY 2024 celebration &amp; legal awareness program" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="900" height="600" src="https://www.youtube.com/embed/UJ26Ogwrf2Q" title="PRAYAGRAJ(ALLAHABAD) SANGAM GHAT SWAKSHATA ABHIYAAN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
