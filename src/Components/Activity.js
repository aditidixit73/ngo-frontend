import React, { useEffect, useState } from 'react'
import { useLogin } from '../context/AdminDetails'
import Loading from './Loading'

export default function Activity() {
    const { getActivity } = useLogin()
    const [activities, SetActivity] = useState(false)
    // const [load, setLoad] = useState(true)
    useEffect(() => {
        const efunc = async () => {
            await getActivity().then(res =>
                SetActivity(res)
            )

        }
        efunc()
    },[])
    return (
        <div className="activities">
            <h2>Activities</h2>
            <div className="act-container act-container2">
                {activities ?
                    activities.map((item) => {
                        return (
                            <div className="act-card act-card2">
                                <div className="act-text">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <img src={item.image} alt="alll" />
                            </div>
                        )
                    })
                    : <Loading/>}
            </div>
        </div>
    )
}
