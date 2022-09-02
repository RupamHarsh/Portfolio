import React from 'react'
import './About.css'
import profile from  '../images/profile.jpg'
import { Button, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'
import astro from '../images/asto.svg'
import {ThemeProvider,createTheme} from '@mui/material'
import SpeedDial from '@mui/material/SpeedDial';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';
import Contact from './Contact'

const theme = createTheme({
  palette:{
    primary:{
      main: '#6d65db',
    }
  }
});

const About = () => {
  const styles = {
    profileImage : {
      position: 'absolute',
      top:'5rem',
      left:'2rem'
    },
    content : {
      width:'80vw',
      height:'6vw',
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
      overflow: 'hidden',
      marginTop: '30rem',
      marginLeft:'10rem',
      color:'white',
      padding:'1rem'
    },
    content2 : {
      width:'32vw',
      height:'7vw',
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
      overflow: 'hidden',
      color:'white',
      display:'block',marginTop:'2rem',marginLeft:'34rem',
    },
  }


  const actions = [
    { icon: <GitHubIcon />, name: 'GitHub', url:'https://github.com/RupamHarsh' },
    { icon: <LinkedInIcon />, name: 'LinkedIn', url:'https://www.linkedin.com/in/rupam-harsh-458b53228/' },
    { icon: <EmailIcon />, name: 'Mail',url:'mailto: harshrupam@19092000@gmail.com' },
    { icon: <InstagramIcon />, name: 'Instagram',url:'https://www.instagram.com/rishu_yy/'},
    { icon: <InfoIcon />, name: 'Resume',url:'https://docs.google.com/document/d/1IlH7MqgtF833Hm2BQkvnIId0owhKReuJAEKmN562Aps/edit?usp=sharing'},
    
  ];

  const [openPopup,setOpenPopup] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
    <div className='aboutp'>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div style={styles.profileImage}><img  className='pfp' src={profile} alt='Rupam harsh'/></div>
        </div>
        <div className='astrona'>
            <img className='astronaut' src={astro} alt='astro'/>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <div style={styles.content}> 
            <Typography variant='h6' align='left'>
              Hey Guys ! I'm Rupam Harsh , Currently purusing my 4th Year of B.Tech from <b>Kalinga Insitute of Industrial Technology</b> 
              <b> </b>with Computer Science as a Major.I have Interests in Full Stack Development and UI Designing. 
            </Typography>
        </div>
        <div style={styles.content2}>
          <Typography fontFamily='Segoe UI' style={{marginBottom:'1rem'}} variant='h5' sx={{color:'white'}}>
            Reach Me Out 
          </Typography>
        <Button color='primary' style={{marginRight:'3rem'}} variant='contained' startIcon={<ExitToAppIcon/>}
         href='https://docs.google.com/document/d/1IlH7MqgtF833Hm2BQkvnIId0owhKReuJAEKmN562Aps/edit?usp=sharing' target='_blank' >Resume</Button>
        <Button variant='contained' onClick={()=>{setOpenPopup(true)}}>Contact Me</Button>
        </div>
        </div>
        <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', top: 60, right: 16 }}
        icon={<SpeedDialIcon />}
        direction='down'
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>{
               window.open(action.url)
            }}
          />
        ))}
      </SpeedDial>
    </div>
    <Contact openPopup={openPopup}
    setOpenPopup={setOpenPopup}/>

    </ThemeProvider>
  )
}

export default About