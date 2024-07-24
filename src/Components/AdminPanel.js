import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPenToSquare, faPlusCircle,  faTrash } from '@fortawesome/free-solid-svg-icons'
import { useLogin } from '../context/AdminDetails'

export default function AdminPanel() {
    const {user}=useLogin()
    
  return (
    "hii"
  )
}
