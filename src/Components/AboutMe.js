import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'
import Animation from './Animation';
import unswLogo from './unsw.png'


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
        paddingTop: '65px',
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
        background: 'rgba(99, 102, 106, 0.90)',
        width: '100%',
        height: '500px',
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
        color: '#424242',
        paddingBottom: '20px',
        paddingLeft: '35px',
        paddingRight: '35px',
        fontFamily: 'Times New Roman',
        fontSize: '22px',
        margin: 0
    },
    blue: {
        color:'#77C9D4',
    },
}));


function AboutMe () {
    
    const classes = useStyles();
    const navigate = useNavigate();

    return (<>
        <div className={classes.outBox}>
            
            <h1 className={classes.heading}><span>About&nbsp;</span><span className={classes.blue} >Me</span></h1>
            <div className={classes.greyBox}>
                <h1 className={classes.subHead}>Education:</h1>
                <img src={unswLogo}/>
                <div className={classes.content}>
                    &bull;
                </div>
                <h1 className={classes.subHead}>My Skills:</h1>
                <div className={classes.content}></div>
                <h1 className={classes.subHead}>Hobbies & Community:</h1>
                <div className={classes.content}></div>

            </div>

          
        </div>
        
       
        </>
    );
}

export default AboutMe

