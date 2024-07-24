import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../context/AdminDetails'

export function AdminLogin() {
    const Navi = useNavigate()
    const {getData,user,setUser}=useLogin()
    useEffect(() => {
        if (user) {
            Navi("/adminpanel")
        }
    }, [])

    const [cred, setCred] = useState({
        email: "",
        password: ""
    })
    const [dis, setdis] = useState("a")

    async function loginAdmin(e) {
        e.preventDefault();
        await Axios.post("https://serverforngopslpms.vercel.app/auth/login", cred).then((res) => {
            alert(res.data.msg)
            if (res.data.success) {
                if (res.data.success) {
                    localStorage.setItem("token", res.data.token)
                    setUser(getData())
                    Navi("/")
                }
            }
        }).catch((err) => {
            console.log(err)
            if (err.code === "ERR_NETWORK") {
                alert("Server unreachable")
            } else
                alert(err)
        })
    }
    function handleChange(e) {
        setCred({ ...cred, [e.target.name]: e.target.value })
        if (cred.email !== "" && cred.password !== "") {
            setdis("")
        } else {
            setdis("a")
        }
    }
    return (
        <div className='mainContainer'>
            <div className='formContainer'>
                <h3>Login for Admin</h3>
                <form onSubmit={loginAdmin}>
                    <input type="email" name='email' placeholder='Enter Your Email' onChange={handleChange} required />
                    <input type="password" name='password' placeholder='Enter Your Password' onChange={handleChange} required />
                    <input type="submit" disabled={dis} value="Submit" />
                </form>
            </div>
        </div>
    )
}
