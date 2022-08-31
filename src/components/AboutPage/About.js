import React from 'react'
import './About.css'
import profile from  '../images/profile.jpg'
import { Typography } from '@mui/material'
import astro from '../images/asto.svg'

const about = () => {
  const styles = {
    profileImage : {
      position: 'absolute',
      top:'5rem',
      left:'2rem'
    },
    content : {
      width:'50vw',
      height:'8vw',
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
      overflow: 'hidden',
      marginTop: '23rem',
      marginLeft:'2rem',
      color:'white'
    }
  }
  return (
    <div className='aboutp'>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={styles.profileImage}><img  className='pfp' src={profile} alt='Rupam harsh'/></div>
        </div>
        <div className='astrona'>
            <img className='astronaut' src={astro} alt='astro'/>
        </div>
        <div style={styles.content}> 
            <Typography variant='h5' align='center' pt={2}>
              Hey Guys ! I'm Rupam Harsh , Currently purusing my 4th Year of B.Tech from Kalinga Insitute of Industrial technology
              with Computer Science as a Major.I have Interests in Full Stack Development and UI Designing. 
            </Typography>
        </div>

    </div>
  )
}

export default about