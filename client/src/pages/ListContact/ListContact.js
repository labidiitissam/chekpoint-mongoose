import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getContacts} from '../../JS/Actions/contact'
import { CircularProgress } from '@mui/material'
 import ContactCard from '../../Components/CardContact/CardContact'
    
    const ListContact = () => {
      const listContacts =useSelector(state => state.contactReducer.listContacts)
      const load =useSelector(state => state.contactReducer.load)
      const dispatch =useDispatch()
     
      useEffect(() => {
          dispatch((getContacts()))
      },[dispatch])



  return (
    <div>
    
    <h1>ListContacts</h1>
    {load ? 
    <CircularProgress sx={{color :"black",display:"flex",alignItems : "center" ,justifyContent:"center" ,m:"auto",mt:"15rem",mb:"45%"}}/>: 
    listContacts.map((el) => <ContactCard contact ={el} key={el._id} />)}


    </div>
  )
}

export default ListContact
