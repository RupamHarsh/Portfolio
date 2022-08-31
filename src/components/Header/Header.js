import React from 'react';
import Button from '@mui/material/Button';
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const styles ={
        HeaderDiv:{
        color: "white",
        fontSize: "1.5rem",
        height: "5vh",
        width: '100vw',
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(5px)",
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:  'center',
        gap:"3%",
        position: 'absolute',
        left: '0'
    },
    buttons:{
        borderRadius: '4px',
        opacity: '0.9',
        color: '#7ebae6'
    }
}
let navigate = useNavigate();
  return (
    
    <div style={styles.HeaderDiv}>
        <Button variant="text" style={styles.buttons} onClick={()=>{navigate('/')}}>Home</Button>
        <Button variant="text" style={styles.buttons} onClick={()=>{navigate('/skills')}}>Skills</Button>
        <Button variant="text" style={styles.buttons} onClick={()=>{navigate('/projects')}}>Projects</Button>
        <Button variant="text" style={styles.buttons} onClick={()=>{navigate('/about')}}>About Me</Button>
        </div>
  )
}

export default Header