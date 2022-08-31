import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './Project.css'
import FollowUp from '../images/FollowUp.jpg'
import DrumKit from '../images/DrumKit.jpg'
import Dice from '../images/Dice.jpg'
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Projects = () => {
  const styles = {
    maincontainer : {
      paddingTop: "50px",
      marginLeft:'10vw',
      height: "99.3vh",
      width:'80vw',
      display: 'flex',
      flexDirection:'row',
      gap:'10rem',
      alignItems: 'center',
    },

  }
  let navigate = useNavigate();
  return (
    <div className='projectMain'> 
    <div style={{height:'90vh',width:'5vw',position:'absolute',left:'0',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'center'}}>
        <Button disableElevation={true} onClick={()=>{navigate('/skills')}} style={{height:'100px',width:'100px'}} startIcon={<KeyboardArrowLeftIcon sx={{ color:'aqua',fontSize:'5rem !important'}}/>}/>
      </div>
    <div style={styles.maincontainer}>
      <div style={styles.page}>
      <Card sx={{ maxWidth: 345,height: 380}}>
      <CardMedia
        component="img"
        height="200"
        image={FollowUp}
        alt="Follow Up Game"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Follow Up Game
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Follow the Patterns as Displayed on the Screen. Let's See what HighScore You Reach.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://rupamharsh.github.io/Follow_up/' target='_blank'>Play</Button>
        <Button size="small" href='https://github.com/RupamHarsh/Follow_up' target='_blank'>Source Code</Button>
      </CardActions>
    </Card>
      </div>
      <div style={styles.page}>
      <Card sx={{ maxWidth: 345 , height: 380}}>
      <CardMedia
        component="img"
        height="200"
        image={DrumKit}
        alt="Online Drum Kit"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Online Drum Kit
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Play the Drums and make a beat on the go !
        <br/>          
        </Typography>
      </CardContent>
      <CardActions style={{paddingTop:'2.8rem'}}>
        <Button size="small" href='https://rupamharsh.github.io/Drum_kit/' target='_blank' color='primary'>Play</Button>
        <Button size="small" href='https://github.com/RupamHarsh/Drum_kit' target='_blank'>Source Code</Button>
      </CardActions>
    </Card>
      </div>
      <div style={styles.page}>
      <Card sx={{ maxWidth: 345 , height: 380}}>
      <CardMedia
        component="img"
        height="200"
        image={Dice}
        alt="Dice Game"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dice Game
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Roll the Dice and the dice with the maximum output wins !
        <br/>          
        </Typography>
      </CardContent>
      <CardActions style={{paddingTop:'1.5rem'}}>
        <Button size="small" href='https://rupamharsh.github.io/Dice_game/' target='_blank' color='primary'>Play</Button>
        <Button size="small" href='https://github.com/RupamHarsh/Dice_game' target='_blank'>Source Code</Button>
      </CardActions>
    </Card>
      </div>
      </div>
      <div style={{height:'90vh',width:'5vw',position:'absolute',right:'0',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'center'}}>
        <Button disableElevation={true} onClick={()=>{navigate('/about')}} style={{height:'100px',width:'100px'}} startIcon={<KeyboardArrowRightIcon sx={{ color:'aqua',fontSize:'5rem !important'}}/>}/>
      </div>
    </div>
  )
}

export default Projects