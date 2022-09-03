import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';


const Contact = (props) => {

    const {openPopup,setOpenPopup} = props;

    // const [name,setName] = React.useState("");
    // const [mail,setMail] = React.useState('');
    // const [message,setMessage] = React.useState("");

    // const sendMessage = (props) => {
    //     const {name,mail,message} = props;
    //     localStorage.setItem(name,{email:mail,text:message});
    //     setOpenPopup(false);
    // } 
    const closeHandler = () => {
        setOpenPopup(false);
    }

    const styles = {
        heading: {
            width:'300px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        textFields : {
            width:'310px',
            display:'flex',
            flexDirection:'column',
        },
        buton : {
            width:'2rem',
            marginRight:'-2rem'
        },
        background : {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(5px)",
        }
    }

    // const getValue = (e) =>
    // {
    //    return e.target.value;
    // }

  return (
    <div > 
        <Dialog open={openPopup} style={styles.background}>
            <DialogTitle>
                <div style={styles.heading}> Drop a message ! 😉 <Button disableElevation style={styles.buton} startIcon={<CloseIcon/>} onClick={()=>setOpenPopup(false)}></Button></div>
            </DialogTitle>
            <DialogContent>
                <div style={styles.textFields}>
                    <Typography style={{fontSize:'1rem',fontWeight:'600'}}>Full Name </Typography>
                        <TextField  fullWidth
                                    size='small'
                                    style={{marginBottom:'1rem'}}
                                    />

                    <Typography  style={{fontSize:'1rem',fontWeight:'600'}}>Email</Typography>
                        <TextField size='small'  fullWidth type='email' style={{marginBottom:'1rem'}}>Email Address</TextField>

                    <Typography style={{fontSize:'1rem',fontWeight:'600'}}>Your Message</Typography>
                        <TextField size='small' multiline fullWidth type='text' style={{marginBottom:'1rem',overflow:'auto'}}>FullName</TextField></div>
            </DialogContent>
            <DialogActions>
                <div style={{display:'flex',flexDirection:'row',gap:'1rem',marginRight:'1rem'}}>
      <Button variant="contained" onClick={closeHandler} endIcon={<SendIcon />}>
        Send
      </Button>
                <Button variant="contained" onClick={closeHandler} startIcon={<CloseIcon />}>
                    Cancel
                </Button>
                </div>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default Contact