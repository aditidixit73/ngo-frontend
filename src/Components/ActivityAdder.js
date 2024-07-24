import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate , Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLogin } from '../context/AdminDetails'
import { hideBar, showBar } from 'top-loading-progress-bar'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export function ActivityAdder(props) {
    const Navi = useNavigate()
    const {user}=useLogin()
    useEffect(() => {
        console.log(user)
        if (user===false) {
            Navi("/")
        }
    }, [])

    const [data, setData] = useState({
        name: "",
        description: "",
        file:"",
    })
    const [dis, setdis] = useState("a")

    async function addActivity(e) {
        e.preventDefault();
        showBar()
        await Axios.post(`https://serverforngopslpms.vercel.app/add/${props.type}activity`, data,{headers:{"Authorization":localStorage.getItem("token"),"Content-Type":"multipart/form-data"}}).then((res) => {
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
        if(e.target.name==="file")
            setData({ ...data, [e.target.name]: e.target.files[0] })
        else
        setData({ ...data, [e.target.name]: e.target.value })
        if (data.name !== "" && data.description !== "") {
            setdis("")
        } else {
            setdis("a")
        }
    }
    return (
        <div className='mainContainer'>
            <Link className="back-btn" to={"/"}><FontAwesomeIcon icon={faArrowLeft}/> Back to Home</Link>
            <div className='formContainer'>
                <h3>Enter Activity details</h3>
                <form onSubmit={addActivity}>
                    <input type="text" name='name' placeholder='Enter Your name' onChange={handleChange} required />
                    <input type="text" name='description' placeholder='Enter description' onChange={handleChange} required />
                    <input type="file" name='file' placeholder='Enter image' onChange={handleChange} required accept='.jpg,.jpeg,.png'/>
                    <input type="submit" disabled={dis} value="Submit" />
                </form>
            </div>
        </div>
    )
}
