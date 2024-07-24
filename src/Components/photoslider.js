import React, { useEffect } from 'react'
import {useLogin} from '../context/AdminDetails'
import SimpleImageSlider from 'react-simple-image-slider'
import { useState } from 'react'

export default function PhotoSlider() {
    const {slider}=useLogin()
    
    return (
        slider?<div style={{ display: 'flex', alignItems: 'center' }}>
            <SimpleImageSlider
                    width={'100%'}
                    height={'100vh'}
                    images={slider}
                    showBullets={false}
                    showNavs={true}
                    style={{margin: ' auto'}}
                    autoPlay={true}
                    autoPlayDelay={5}
                />    
        </div>:null
    )
}
