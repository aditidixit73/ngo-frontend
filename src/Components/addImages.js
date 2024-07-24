import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate , Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLogin } from '../context/AdminDetails'
import { hideBar, showBar } from 'top-loading-progress-bar'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export function SliderImage(props) {
    const fRef=useRef()
    const Navi = useNavigate()
    const {user}=useLogin()
    useEffect(() => {
        console.log(user)
        if (user===false) {
            Navi("/")
        }
    }, [])
    console.log(props.type)
    
    const [dis, setdis] = useState("a")
    
    async function uploadData(e) {
        const formData= new FormData()
        e.preventDefault();
        showBar()
        var cos=fRef.current.files
        for(var i=0;i<cos.length;i++){
            formData.append("files",cos[i])
        }
        console.log(formData)
        await Axios.post(`https://serverforngopslpms.vercel.app/add/photos/${props.type}`, formData,{headers:{"Authorization":localStorage.getItem("token"),"Content-Type":"multipart/form-data"}}).then((res) => {
            alert(res.data.msg)
            console.log(res)
        }).catch((err) => {
            console.log(err)
            if (err.code === "ERR_NETWORK") {
                alert("Server unreachable")
            } else
                alert(err)
        })
        hideBar()
    }
    function handleChange(e) {
        
        setdis("")
    }
    return (
        <div className='mainContainer'>
            <Link className="back-btn" to={"/"}><FontAwesomeIcon icon={faArrowLeft}/> Back to Home</Link>
            <div className='formContainer'>
                <h3>Select Images to Upload</h3>
                <form onSubmit={uploadData}>
                    <input type="file" ref={fRef} name='files' placeholder='Enter image' multiple onChange={handleChange} required accept='.jpg,.jpeg,.png'/>
                    <input type="submit" disabled={dis} value="Submit" />
                </form>
            </div>
        </div>
    )
}
