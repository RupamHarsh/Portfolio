import React from 'react'
import './Skills.css'
import  TerminalIcon from '@mui/icons-material/Terminal';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import coding from './images/coding.png';

const Skills = () => {
const styles = {
  page : {
  paddingTop: "50px",
  marginLeft:'7vw',
  height: "99.3vh",
  width:'80vw',
  display: 'flex',
  flexDirection:'column',
  alignItems: 'center',
  },
  dis : {
    color: 'white',
    border : '1px solid black',
    height: '220px',
    width: '300px',
    marginBottom: '3.5rem',
    marginLeft:'10rem',
    fontSize: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(3px)",
    overflow: 'hidden',
  },
  dis2 : {
    color: 'white',
    border : '1px solid black',
    height: '150px',
    width: '300px',
    marginBottom: '3rem',
    marginLeft:'10rem',
    fontSize: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(3px)",
    overflow: 'hidden',
  },
  dis3 : {
    color: 'white',
    border : '1px solid black',
    height: '180px',
    width: '300px',
    marginBottom: '3.5rem',
    marginLeft:'10rem',
    fontSize: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(3px)",
    overflow: 'hidden',
  },
  divHeading : {
    position : 'relative',
    right : '60px',
    paddingTop:"10px",
    paddingBottom : '10px'
  },
  list : {
    paddingTop: '10px',
    textAlign: 'initial',
    paddingLeft: '40px',
    fontSize:'1.35rem'
  },
  listBottom : {
    paddingTop: '2px',
    textAlign: 'initial',
    paddingLeft: '40px',
    fontSize:'1.35rem'
  }
}

let navigate = useNavigate();
  return (
    <div className='skillMain'>
      <div style={{height:'90vh',width:'5vw',position:'absolute',left:'0',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'center'}}>
        <Button disableElevation={true} onClick={()=>{navigate('/')}} style={{height:'100px',width:'100px'}} startIcon={<KeyboardArrowLeftIcon sx={{ color:'aqua',fontSize:'5rem !important'}}/>}/>
      </div>
    <div  style={styles.page}>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div style={styles.dis}>
      <div style={styles.divHeading}>Technical Skills</div>
      <hr style={{marginLeft:'10px',marginRight:'10px'}}/>
      <div>
        <ul style={styles.list}>
          <li>
            C++
          </li>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            JScript
          </li>
          <li>
            ReactJS
          </li>
        </ul>
      </div>
    </div>
    <div>
      {<TerminalIcon  style={{paddingLeft:'7vw'}} sx={{color:'white',fontSize:'15rem'}}/>}
    </div>
    </div>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div>
      {<AutoStoriesIcon style={{paddingLeft:'7vw',position:'relative',bottom:'30px'}} sx={{color:'white',fontSize:'15rem'}} />}
    </div>
    <div style={styles.dis2}>
      <div style={styles.divHeading}>Domain Skills</div>
      <hr style={{marginLeft:'10px',marginRight:'10px'}}/>
      <div>
        <ul style={styles.list}>
          <li>
            DBMS   
          </li>
          <li>
            OOPs
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div style={{display:'flex',flexDirection:'row'}}>
    <div style={styles.dis3}>
      <div style={styles.divHeading}>Certifications</div>
      <hr style={{marginLeft:'10px',marginRight:'10px'}}/>
      <div style={{paddingBottom:'1px'}}>
        <ul style={styles.listBottom}>
          <li>
          Problem Solving <a href='https://www.hackerrank.com/certificates/675eefd0695c' style={{color:'pink'}}>Basic(HackerRank)</a>
          </li>
          <li>
          Problem Solving <a href='https://www.hackerrank.com/certificates/c905d4db92e0' style={{color:'pink'}}>Intermediate(HackerRank)</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      {<SchoolIcon style={{paddingLeft:'7vw',position:'relative',bottom:'25px'}} sx={{color:'white',fontSize:'15rem'}}/>}
    </div>
    </div>
    </div>
    <div style={{height:'90vh',width:'5vw',position:'absolute',right:'0',top:'0',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'center'}}>
        <Button disableElevation={true} onClick={()=>{navigate('/projects')}} style={{height:'100px',width:'100px'}} startIcon={<KeyboardArrowRightIcon sx={{ color:'aqua',fontSize:'5rem !important'}}/>}/>
      </div>
    </div>
  )
}

export default Skills