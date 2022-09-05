import React from 'react';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import {Card, CardActionArea} from "@mui/material";
import { Icon } from '@iconify/react';

const useStyles = makeStyles(theme => ({
    outBox: {
        height: '100vh',
        position: 'relative',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        zIndex: 1,
    },
    textBox: {
        textAlign: 'centre',
        justifyContent:'center', 
        alignItems:'center',
        padding: '20px'

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
    },
    icons: {
        width: '300px',
        display: 'flex',
        height: '80px',
        margin: 'auto',
        marginTop: '50px',
        columnGap: '30px',
    },
      
    reduceMargin: {
        margin: '0px',
        color: 'white'
    }
  }));

const StyledCard = styled(Card)({ 
    flex: 1,
    textAlign: "center", 
    padding: '10px',
    background: 'rgba(99, 102, 106, 0)',
  
})


// dashboard for admin, diaplaying all quizzes, and some metadata about quizzes
function Home () {
    const classes = useStyles();
  // reuturns a nave bar, and all quizes
    return (<div id='home'>
        
        
        <div className={classes.outBox}>
            <div className={classes.textBox}>
                <h1 className={classes.heading}>Hi, I'm <span className={classes.blue} >Fiona</span>&nbsp;<span className={classes.green}>Wang</span></h1>
                <br/>
                <h3 className={classes.subLine}>A Third Year Computer Science Student at UNSW</h3>
                <div className={classes.icons}>
                    <StyledCard ><CardActionArea href="https://github.com/FionaWang12138/">
                        <div><Icon icon="akar-icons:github-fill" color="#77C9D4" width="30" height="30" /></div>
                        <h4 className={classes.reduceMargin}>GitHub</h4>
                    </CardActionArea></StyledCard>
                    <StyledCard><CardActionArea href = "mailto: fionawang12138@gmail.com">
                        <div><Icon icon="eva:email-outline" color="#67cab9" width="30" height="30" /></div>
                        <h4 className={classes.reduceMargin}>Email</h4>
                    </CardActionArea></StyledCard>
                    <StyledCard><CardActionArea>
                        <div><Icon icon="healthicons:i-certificate-paper-outline" color="#57BC90" width="30" height="30" /></div>
                        <h4 className={classes.reduceMargin}>Resume</h4>
                    </CardActionArea></StyledCard>
                </div>
            </div>
            
        </div>
        
        


    </div>)
}

export default Home;