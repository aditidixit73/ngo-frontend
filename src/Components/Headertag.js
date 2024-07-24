
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faBars, faCaretDown, faCross, faEnvelope, faMultiply, faPhone, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {  faPenToSquare, faPlusCircle,  faTrash } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
import FooterTag from './footer'
import { useLogin } from '../context/AdminDetails'
import logo from '../images/logo.jpg'

export default function Headertag() {
  const sidebarRef=useRef()
  const { user, handleLogout } = useLogin()
  const openSidebar = () => {
      sidebarRef.current.style.width='20vw'
  }
  const hideSidebar = () => {
      sidebarRef.current.style.width='0'
  }
  return (
    <>
      <header>
        {user?<div className='sidebar'ref={sidebarRef}>
        <button onClick={hideSidebar} className='cross-btn'><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> </button>
          <h3>Welcome, {user.name}!</h3>
          <div className="actions-container">
            <div className='addDataMain'>
            <Link to={"/"} className='button-cards'> <FontAwesomeIcon icon={faPlusCircle} /> Add new data <FontAwesomeIcon icon={faAngleDown} /></Link>
            <Link to={"/"} className='button-cards addData'> Add News</Link>
            <Link to={"/adminpanel/add/sliderimage"} className='button-cards addData'> Add New Slider Photos</Link>
            <Link to={"/adminpanel/add/imagegallery"} className='button-cards addData'> Add New Gallery Images</Link>
            <Link to={"/adminpanel/add/body"} className='button-cards addData'> Add Regulatory Bodies</Link>
            <Link to={"/adminpanel/add/activity"} className='button-cards addData'> Add Activities</Link>
            <Link to={"/adminpanel/add/featactivity"} className='button-cards addData'> Add Featured Activities</Link>
            </div>
            {/* <div className='addDataMain'>
            <Link to={"/"} className='button-cards'> <FontAwesomeIcon icon={faTrash} /> Delete data <FontAwesomeIcon icon={faAngleDown} /></Link>
            <Link to={"/"} className='button-cards addData'> Delete About Content</Link>
            <Link to={"/"} className='button-cards addData'> Delete New Slider Photos</Link>
            <Link to={"/"} className='button-cards addData'> Delete Mission Content</Link>
            <Link to={"/"} className='button-cards addData'> Delete Regulatory Bodies</Link>
            </div> */}
            <div className='addDataMain'>
            <Link to={"/"} className='button-cards'><FontAwesomeIcon icon={faPenToSquare} />Update data <FontAwesomeIcon icon={faAngleDown} /></Link>
            <button to={"/"} className='button-cards addData'> Update About Content</button>
            <button to={"/"} className='button-cards addData'> Update Mission Content</button>
            </div>
            <br /><br />
            
            <button className='logOut' onClick={handleLogout}>Logout <FontAwesomeIcon icon={faRightFromBracket}/></button>
          </div>
        </div>:null}
        <div className="top-banner">
          <span className='logo-text'><img src={logo} alt='logo'></img> Prof. Sangam Lal Pandey Memorial Society</span>
          <span className='navi' style={{ overflow: 'visible' }}>
            <Link to="/donate" className='blinker-text'>Donate</Link>
            <Link to="https://www.youtube.com/channel/UCKOgFSjTtzEC0HTfFIJsGTw"><FontAwesomeIcon icon={faYoutube} /></Link>
            <Link to="mailto:dr.anshulpandey@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></Link>
            <Link to="tel:9452586037"><FontAwesomeIcon icon={faPhone} /></Link>
            {user ? <button className='open-btn' style={{ color: 'black' }} onClick={openSidebar}><FontAwesomeIcon icon={faUser} />&nbsp;<FontAwesomeIcon icon={faBars} /></button> : null}
          </span>
        </div>
        <div className="header">

          <nav>
            <Link to="/">Home</Link>
            <div className="dropdown">
              <button className="dropbtn">Who we are  <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className="dropdown-content">
                <Link to="/about-us">About the Society</Link>
                <Link to="/vision">Vision & Mission</Link>
                <Link to="/regulatory-bodies">Regulatory Bodies</Link>
                {/* <Link to="/">By Laws</Link> */}
              </div>
            </div>
            <Link to="/activity">Activity</Link>
            <div className="dropdown">
              <button className="dropbtn">Get Involved  <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className="dropdown-content">
                <Link to="/donate">Donate</Link>
                <Link to="/volunteer">Volunteer</Link>
              </div>
            </div>
            <Link to="/contact-us">Contact Us</Link>
            <div className="dropdown">
              <button className="dropbtn">Media  <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className="dropdown-content">
                <Link to="/gallery/image">Image Gallery</Link>
                <Link to="/gallery/video">Video</Link>
              </div>
            </div>
            <Link to="/news">News</Link>
            
          </nav>
        </div>
      </header>
      <Outlet />
      <FooterTag />
    </>
  )
}
