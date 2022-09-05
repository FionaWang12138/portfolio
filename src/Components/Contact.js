import * as React from 'react';
import {
    Chip,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextareaAutosize} from "@mui/material";


const useStyles = makeStyles(theme => ({
    outBox: {
        //height: '100vh',
        //position: 'relative',
        //display: 'flex',  
        //justifyContent:'center', 
        //zIndex: 1,

        width: '85vw',
        marginLeft: '7.5vw',
        position: 'relative',
        zIndex: 1,
        
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '30px',
        justifyContent:'center', 
        alignItems:'center',
    },
    heading: {
        color: 'white',
        fontSize:"80px", 
        fontFamily:"Times New Roman",
        marginBottom: '20px',
     
    },
    greyBox: {
        //backgroundColor: '#63666A',
        //backgroundColor: 'white',
        background: 'rgba(65, 65, 65, 0)',
        width: '100%',
        borderRadius: '10px',
        marginBottom: '50px',
        padding: '20px'
    },
    subHead: {
        opacity: '100%',
        color: 'white',
        paddingBottom: '15px',
        paddingLeft: '35px',
        paddingRight: '35px',
        paddingTop: '0px',
        fontFamily: 'Times New Roman',
        fontWeight: 700,
        margin: '0'
    },
    content: {
        color: 'white',
        paddingBottom: '20px',
        paddingLeft: '55px',
        paddingRight: '35px',
        fontFamily: 'Times New Roman',
        fontSize: '22px',
        margin: 0,
        display: 'inline-block',
        top: 0
    },
    blue: {
        color:'#77C9D4',
    },
    green: {
        color:'#57BC90',
    },
    skillIcon: {
        width: '35px !important',
        height: '35px !important',
        
    },
    textForm: {
        width: '50px',
        display: 'flex',
        flex: 1
    }
}));

const StyledButton = styled(Button)({
    //backgroundColor: '#1463F3',
    backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    fontFamily: 'Times New Roman',
    marginLeft: 'calc(50% - 100px)',
    marginBottom: '20px',
    color: 'white',
    width: '200px',
    height: '50px'

})

const StyledBox = styled(Box)({
    width: '100%',
    display: 'flex',
    height: '50px'
})

function Contact () {
    
    const classes = useStyles();
    const navigate = useNavigate();

    return (<div id='contact'>
        <div className={classes.outBox}>
            
            <h1 className={classes.heading}><span>Contact&nbsp;</span><span className={classes.green} >Me</span></h1>
            <div className={classes.greyBox}>
                <Box component="form" className="contact">
                    <form action="https://getform.io/f/ac804f85-dfa6-4b41-84ee-f2cef901e317" method="POST">
                        <StyledBox>
                            <input className={classes.textForm} name="Name" placeholder="Name"></input>
                            <input className={classes.textForm} name="Email" placeholder="Email" type="email"></input>
                        </StyledBox>
                        <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Your Message"
                            className="text-area"
                            style={{ width:  "100%", height: "200px" }}
                            name="Message"
                        ></TextareaAutosize>
                        
                        <StyledButton type="submit" size="small" >Submit</StyledButton>
                        
                    </form>
                </Box>
				

            </div>
        
        </div>
        </div>
    );
}

export default Contact

