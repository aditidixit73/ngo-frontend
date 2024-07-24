import React, { useEffect } from 'react'
import { useLogin } from '../context/AdminDetails'
export default function Bodies() {
    const {genbody,exebody}=useLogin()
    return (
        <div className='reg-body'>
            <h1>Executive Bodies</h1>
            <div className="exe-body">
            {exebody?exebody.map((elem)=>{
                    return (<div className="body-card">
                    <img src={elem.imageurl} alt="abs" />
                    <h2>{elem.name}</h2>
                    <em>{elem.description}</em>
                </div>)
                }):null}
            </div>
            <hr />
            <h1>General Bodies</h1>
            <div className="gen-body">
            
                {genbody?genbody.map((elem)=>{
                    return (<div className="body-card">
                    <img src={elem.imageurl} alt="abs" />
                    <h2>{elem.name}</h2>
                    <em>{elem.description}</em>
                </div>)
                }):null}
            </div>
        </div>
    )
}
