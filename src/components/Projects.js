import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './Project.css'
import FollowUp from './images/FollowUp.jpg'
import DrumKit from './images/DrumKit.jpg'

const projects = () => {
  const styles = {
    maincontainer : {
      paddingTop: "50px",
      marginLeft:'7vw',
      height: "99.3vh",
      width:'80vw',
      display: 'flex',
      flexDirection:'row',
      gap:'10rem',
      alignItems: 'center',
    },

  }
  return (
    <div className='projectMain'> 
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
      <CardActions style={{paddingTop:'2rem'}}>
        <Button size="small" href='https://rupamharsh.github.io/Drum_kit/' target='_blank' color='primary'>Play</Button>
        <Button size="small" href='https://github.com/RupamHarsh/Drum_kit' target='_blank'>Source Code</Button>
      </CardActions>
    </Card>
      </div>
      </div>
    </div>
  )
}

export default projects