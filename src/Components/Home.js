import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Animation from './Animation';
import zIndex from '@mui/material/styles/zIndex';

const useStyles = makeStyles(theme => ({
    outBox: {
        height: '60vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
    },
    textBox: {
        width: '60vw',
        textAlign: 'centre',
        zIndex: 1,
        justifyContent:'center', 
        alignItems:'center',

    },
    heading: {
        color: 'white',
        fontSize:"80px", 
        fontFamily:"Times New Roman",
        marginBottom: '10px',
     
    },
    subLine: {
        color: 'white',
        fontSize:"30px", 
        fontFamily:"Times New Roman",
        
    },
    blue: {
        color:'#77C9D4',
    },
    green: {
        color:'#57BC90',
    }
  }));

// dashboard for admin, diaplaying all quizzes, and some metadata about quizzes
function Home () {
    const classes = useStyles();
  // reuturns a nave bar, and all quizes
    return (<>
        
        
        <div className={classes.outBox}>
            <div className={classes.textBox}>
                <h1 className={classes.heading}>Hi, I'm <span className={classes.blue} >Fiona</span>&nbsp;<span className={classes.green}>Wang</span></h1>
                <br/>
                <h3 className={classes.subLine}>A Third Year Computer Science student at UNSW</h3>
            </div>
        </div>
        
        <Animation/>
        


    </>)
}

export default Home;