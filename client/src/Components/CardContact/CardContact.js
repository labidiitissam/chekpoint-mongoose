import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import { deleteContact } from '../../JS/Actions/contact';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const ContactCard = ({contact}) => {
    const dispatch =useDispatch()
    const navigate = useNavigate()
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={contact.profile_img}
      title="green iguana"/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {contact.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {contact.email}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {contact.phone}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="error" variant="contained" onClick={()=> navigate(`/EditContact/${contact._id}`)}>Edit</Button>
      <Button size="small"color="error" variant="contained" onClick={()=>dispatch(deleteContact(contact._id))} >Delete</Button>
    </CardActions>
  </Card>
    </div>
  )
}

export default ContactCard