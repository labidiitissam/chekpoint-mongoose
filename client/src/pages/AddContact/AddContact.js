import { Button, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PhotoCamera from '@mui/icons-material/PhotoCamera'





const AddContact = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const load = useSelector((state) => state.contactReducer.load)
 const [contact ,setContact] = useState({})
 const [File ,setFile] = useState(null)

const handleChange =(e) =>{
  setContact({...contact , [e.target.name] : e.target.value})
}
const handlePhoto =(e) => {
setFile(e.target.files[0])

}
  return (
    <div>
      <h1>add contact</h1>
      <TextField id="standard-basic" label="Name" variant="standard" onChange={handleChange} name="name" />
      <br/>
      <TextField id="standard-basic" label="email" variant="standard" onChange={handleChange}  name ="email" />
      <br/>
      <TextField id="standard-basic" label="phone" variant="standard" onChange={handleChange} name ="phone" />
      <br/><br/>
      <IconButton color="primary" aria-label='upload picture' component ="label">
      <input hidden accept ="image/*" type ="file"/>
      <PhotoCamera/>
      </IconButton>

      <Button variant="contained" color="success">
      Add contact
        </Button>
    </div>
  )
}

export default AddContact




