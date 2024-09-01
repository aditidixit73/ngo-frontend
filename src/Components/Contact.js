import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import  Axios  from 'axios'


export default function Contact() {
    const [data,setData]=useState({
        name:"",
        message:"",
        subject:""
    })
    const handleChange=(e)=>{
        setData({... data, [e.target.name]:e.target.value})
    }
    const sendMail=async(e)=>{
        e.preventDefault();
        Axios.post("https://serverforngopslpms.vercel.app/email/send",data).then(res=>alert(res.data.msg)).catch(err=>alert("error"))
    }
    
  return (
    <div>
        <div className="top">
            <h1>Contact Us</h1>
        </div>
        <div className="contact-details">
            <div className="contact-card-container">
            <div className="contact-cards">
                <h4>Reach Us by Post :</h4>
                177, Tagore Town, Near Colnelganj Inter College, Prayagraj, 211002, Uttar Pradesh, India
            </div>
            <div className="contact-cards">
                <h4>Reach us through call :</h4>
                <a href="tel:+919452586037">+91 9452586037,&nbsp;</a>
                <a href="tel:+915322466436">0532 2466436&nbsp;</a>
                
            </div>
            <div className="contact-cards last-card">
                <h4>Reach Us through social media : </h4>
                Mail us on <a href="mailto:prof.sangamlalpandeymemorialsoc@gmail.com"><FontAwesomeIcon icon={faEnvelope}/>  prof.sangamlalpandeymemorialsoc@gmail.com, </a>
                <a href="mailto:dr.anshulpandey@gmail.com"> dr.anshulpandey@gmail.com </a>
            </div>
            </div>
            <hr />
            <h4>Fill Contact Form and we will reach you</h4>
            <form onSubmit={sendMail}>
                <input type="text" name='name' required onChange={handleChange} className='contact-inputs' placeholder='Enter your name'/>
                <input type="text" name='subject' required onChange={handleChange} className='contact-inputs' placeholder='Subject'/>
                <textarea name="message" required onChange={handleChange} className='contact-inputs' placeholder='Type your message here'></textarea>
                <input  type="submit" value="Submit" className='contact-submit-btn contact-inputs'/>
            </form>
        </div>
    </div>
  )
}
