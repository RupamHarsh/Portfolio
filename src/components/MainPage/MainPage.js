import { Button } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './MainPage.css'
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const styles={
        headingFont : {
            color: 'white',
            paddingTop: '200px',
            fontSize: '3rem',
            fontFamily: 'Quicksand',
            fontWeight: '400'
        },
        welcometext : {
            paddingTop: '60px',
            fontSize: '2rem',
            color: 'white',
            fontFamily: 'Quicksand',
            fontWeight: '200'
        },
        buttonStart : {
           marginTop:'200px',
            height:"100px",
            width: '300px',
            color: '#00ffac',
            fontFamily: 'Quicksand',
            fontSize: '2rem',
            borderRadius: '25px',
            borderColor: '#00ffac'
        }
    }
    let navigate = useNavigate();
  return (
    <div className='mina'> 
    <div style={styles.headingFont}>Hey There
        <span style={{color:"#e96f46"}}> !</span>
    </div>
    <div style={styles.welcometext}>
        I'm <span style={{color:"#e96f46",fontWeight:"600"}}>Rupam Harsh</span> , A Software Developer with a passion in designing beautiful websites.
    </div>
        <Button variant='outlined' onClick={()=>{navigate('/skills')}} style={styles.buttonStart}>Let's Start {<ChevronRightIcon sx={{ fontSize: 30 }}/>} </Button>
    </div>
  )
}

export default MainPage