import { Button } from '@mui/material'
import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const styles = {
        content : {
            paddingTop:'10rem',
            color: 'white',
            fontSize:'5rem',
            textShadow: '#0030ff 0 0 17px',
            display: 'flex',
            flexDirection : 'column',
    },
}
let navigate = useNavigate();
  return (
    <div className='mainp'>
        <div style={styles.content}>   
            ERROR 404!
            <span style={{fontSize:'2rem',padding:'10px'}}>
                Looks Like You Have Landed on the wrong Page, Check your URL again.
            </span>
        </div>
        <Button variant='outlined' onClick={()=>{navigate('/')}} style={{position:'absolute',bottom:'5rem',height:'50px',width:'50px'}}>Home</Button>
    </div>
  )
}

export default Error