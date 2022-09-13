import * as React from 'react';
import {
    Chip,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import javaPic from './java.png'
import jsPic from './js.png'
import reactPic from './react.png'
import pythonPic from './python.png'
import htmlPic from './html.png'
import cssPic from './css.png'
import flaskPic from './flask.png'
import cPic from './c.png'
import gitPic from './git.png'
import sqlPic from './sql.png'
import postgresqlPic from './postgresql.png'
import rPic from './r.png'
import bootstrapPic from './bootstrap.png'
import muiPic from './mui.png'
import me from './me.jpg'

const useStyles = makeStyles(theme => ({
    outBox: {
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
        ['@media (max-width:850px)']: { 
            fontSize:"64px"
        }
     
    },
    greyBox: {
        background: 'rgba(65, 65, 65, 0.90)',
        width: '100%',
        borderRadius: '10px',
        marginBottom: '50px',
        padding: '20px',
        ['@media (max-width:850px)']: { 
            padding: '0px',
        }
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
        top: 0,
        ['@media (max-width:850px)']: { 
            paddingLeft: '15px',
            paddingRight: '10px',
        }
    },
    blue: {
        color:'#77C9D4',
    },
    skillIcon: {
        width: '35px !important',
        height: '35px !important',
        ['@media (max-width:850px)']: { 
            width: '20px !important',
            height: '20px !important',
        }
        
    },
    profilePic: {
        width: '200px',
        margin: 'auto',
        borderRadius: '10px'
    }
}));

const StyledChip = styled(Chip)({
    color: 'white',
    //backgroundColor: '#77C9D4',
    backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    fontWeight:"700", 
    fontSize:"16px",
    height: '50px',
    marginRight: '15px',
    borderRadius: '25px',
    marginBottom: '15px',
    paddingLeft: '10px',
    paddingRight: '10px',
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    ['@media (max-width:850px)']: { 
        fontSize: '12px',
        height: '30px',
        paddingLeft: '0px',
        paddingRight: '0px',
        marginBottom: '5px',
    }
});

function AboutMe () {
    
    const classes = useStyles();

    return (<div id='aboutMe'>
        <div className={classes.outBox}>
            
            <h1 className={classes.heading}><span>About&nbsp;</span><span className={classes.blue} >Me</span></h1>
            <div className={classes.greyBox}>
                
                <h1 className={classes.subHead}>Education:</h1>
                
                <div className={classes.content}>
                    2020 - 2022/2023 <br/>
                    University of New South Wales - Bachelor of Science (Computer Science) <br/> 
                    &nbsp;&nbsp;&bull; WAM: 87.737 <br/> 
                    &nbsp;&nbsp;&bull; Dean's Honor List (2020, 2021)
                </div>
                
                <h1 className={classes.subHead}>My Skills:</h1>
                <div className={classes.content}>
                    <StyledChip className="btn-skill"
                        label="C"
                        avatar={<img src={cPic} className={classes.skillIcon} alt='C logo'/>}
                        alt='C logo'
                    />
                    <StyledChip className="btn-skill"
                        label="Python"
                        avatar={<img src={pythonPic} className={classes.skillIcon} alt='Python logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="Java"
                        avatar={<img src={javaPic} className={classes.skillIcon} alt='Java logo'/>}
                    />
                    <StyledChip className="btn-skill" 
                        label="JavaFX"
                        avatar={<img src={javaPic} className={classes.skillIcon} alt='Java logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="HTML"
                        avatar={<img src={htmlPic} className={classes.skillIcon} alt='HTML logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="CSS"
                        avatar={<img src={cssPic} className={classes.skillIcon} alt='CSS logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="JavaScript"
                        avatar={<img src={jsPic} className={classes.skillIcon} alt='Javascript logo'/>}
                    />
                    <StyledChip className="btn-skill" 
                        label="React"
                        avatar={<img src={reactPic} className={classes.skillIcon} alt='React logo'/>}
                    />  
                    <StyledChip className="btn-skill"
                        label="Material UI"
                        avatar={<img src={muiPic} className={classes.skillIcon} alt='MUI logo'/>}
                    />
                    <StyledChip className="btn-skill" 
                        label="Bootstrap"
                        avatar={<img src={bootstrapPic} className={classes.skillIcon} alt='Bootstrap logo'/>}
                    />  
                    <StyledChip className="btn-skill"
                        label="SQL"
                        avatar={<img src={sqlPic} className={classes.skillIcon} alt='Sql logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="PostgreSQL"
                        avatar={<img src={postgresqlPic} className={classes.skillIcon} alt='PostgreSQL logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="R"
                        avatar={<img src={rPic} className={classes.skillIcon} alt='R logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="Flask"
                        avatar={<img src={flaskPic} className={classes.skillIcon} alt='Flask logo'/>}
                    />
                    <StyledChip className="btn-skill"
                        label="Git"
                        avatar={<img src={gitPic} className={classes.skillIcon} alt='Git logo'/>}
                    />
                    
                    
                </div>
                <h1 className={classes.subHead}>Hobbies & Community:</h1>
                <div className={classes.content}>
                    &nbsp;&nbsp;&bull; Crocheting and Knitting <br/>
                    &nbsp;&nbsp;&bull; Speedcubing <br/>
                    &nbsp;&nbsp;&bull; Executive of UNSW RubikSoc (Vice President 2021, Events Director 2022) <br/>
                    &nbsp;&nbsp;&bull; Member of World Cube Association Archive Team (2021 - Current)<br/>
                </div>

            </div>

          
        </div>
        
       
        </div>
    );
}

export default AboutMe

