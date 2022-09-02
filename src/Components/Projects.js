import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Animation from './Animation';
import { posts } from "./dummy-posts";
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Chip,
    Avatar,
    Button
  } from "@mui/material";
import LoopMania from "./LoopMania.png";
import javaPic from './java.png'
import javaFXPic from './javafx.png'
import jsPic from './js.png'
import reactPic from './react.png'
import { ImportantDevices } from '@mui/icons-material';
import bigBrain from './bigBrain.png'
import mlr from './mlr.jpg'
import pythonPic from './python.png'
import lurkForWork from './lurkForWork.png'
import htmlPic from './html.png'
import cssPic from './css.png'
import flaskPic from './flask.png'
import flockr from './flockr.png'

const useStyles = makeStyles(theme => ({
    outBox: {
       
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
      
        color:'white', 
        
        fontFamily: 'Alfa Slab One' ,
        marginBottom:'30px',
        marginTop:'30px',
        fontSize: '80px',
        
     
    },
    hBox: {
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    box: {
        display: 'flex',
        flex: 1,
        verticalAlign: 'top',
        marginBottom: '30px'
    },
    projectTitle: {
        color: '#424242',
        paddingBottom: '15px',
        paddingLeft: '35px',
        paddingRight: '35px',
        paddingTop: '0px',
        fontFamily: 'Times New Roman',
        fontWeight: 700,
        margin: '0'
    },
    description: {
        color: '#424242',
        paddingBottom: '20px',
        paddingLeft: '35px',
        paddingRight: '35px',
        fontFamily: 'Times New Roman',
        fontSize: '22px',
        margin: 0
    },
    skillHolder: {
        paddingLeft: '35px',
        paddingRight: '35px',
        paddingTop: '20px',
        display: 'block'
    },
    sizeAvatar: {
        height: 50,
        width: 50,
    },
    hover: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    skillBox: {
        color: 'white',
        backgroundColor: '#858585',
        fontWeight:"700", 
        width: 'fit-content',
        height: '50px',
        borderRadius: '8px',
        padding: '10px',
        float: 'left',
    },
    skillIcon: {
        width: '35px !important',
        height: '35px !important',
        
    },
    skillName: {
        float:'right', 
        display: 'inline-block',
    },
    madeWith:{
        color: '#424242',
        display: 'inline'
    },
    blue: {
        color:'#77C9D4',
    },
    green: {
        color:'#57BC90',
    }
   
  }));

const StyledCard = styled(Card)({
    backgroundColor: 'white',
    //backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    width: '90%',
    margin: 'auto',
    borderRadius: '10px',
    marginTop: 0

});
const StyledChip = styled(Chip)({
    color: 'white',
    //backgroundColor: '#77C9D4',
    backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    fontWeight:"700", 
    fontSize:"16px",
    height: '50px',
    marginRight: '10px',
});

const StyledButton = styled(Button)({
    //backgroundColor: '#1463F3',
    backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    marginLeft: '35px',
    marginBottom: '20px',

})

const StyledTypography = styled(Typography)({
    color:'white', 
    fontFamily: 'Alfa Slab One' ,
    marginBottom:'30px',
    marginTop:'50px'
})



function Projects() {

    const classes = useStyles()
  
    return (<>
        
        <div className={classes.outBox}>
            <h1 className={classes.heading}><span className={classes.blueu}>My</span><span className={classes.green}>&nbsp;Projects</span></h1>
            <div className={classes.hBox}>
                <div className={classes.box}>
                    <StyledCard className={classes.hover}>
                        <CardMedia
                            component="img"
                            alt="loopMania"
                            height="300"
                            image={LoopMania}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="Java"
                            avatar={<img src={javaPic} className={classes.skillIcon} alt='Java logo'/>}
                        />
                          
                        <StyledChip className="btn-skill" 
                            label="JavaFX"
                            avatar={<img src={javaPic} className={classes.skillIcon}/>}
                        />
                      
                        
                        </div>
                        <br/>
                       
                        
                        <h1 className={classes.projectTitle}>Loop Mania</h1>
                        <div className={classes.description}>
                        A game in which the character travels through a loop, and gain points by defeating enemies and constructing buildings. The game features a series of different enemies, which increase in strength and complexity as the player progresses through the game.
                        </div>

                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/LoopMania"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    </StyledCard>
                </div>

                <div className={classes.box}>
                    <StyledCard className={classes.hover}>
                        <CardMedia
                            component="img"
                            alt="bigBrain"
                            height="300"
                            image={bigBrain}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="JavaScript"
                            avatar={<img src={jsPic} className={classes.skillIcon}/>}
                        />
                          
                        <StyledChip className="btn-skill" 
                            label="React"
                            avatar={<img src={reactPic} className={classes.skillIcon}/>}
                        />  
                        </div>
                        <br/>
                       
                        <h1 className={classes.projectTitle}>Big Brain</h1>
                        <div className={classes.description}>
                        Inspired by Kahoot, Big Brain is a website that allows users to create and take part in online multiple choice quizzes.<br/> 
                       

                        </div>
                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/BigBrain.git"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    
                    </StyledCard>
                </div>
                
                 
            </div>
            
            <div className={classes.hBox}>
                <div className={classes.box}>

                    <StyledCard className={classes.hover}>
                        <CardMedia
                            component="img"
                            alt="lurkForWork"
                            height="300"
                            image={lurkForWork}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="HTML"
                            avatar={<img src={htmlPic} className={classes.skillIcon}/>}
                        />
                        <StyledChip className="btn-skill"
                            label="CSS"
                            avatar={<img src={cssPic} className={classes.skillIcon}/>}
                        />
                        <StyledChip className="btn-skill"
                            label="JavaScript"
                            avatar={<img src={jsPic} className={classes.skillIcon}/>}
                        />
                      
                        </div>
                        <br/>
                       
                        
                        <h1 className={classes.projectTitle}>Lurk For Work</h1>
                        <div className={classes.description}>
                        A rip-off version of LinkedIn, in which users can post job opportunities, view posts in a feed, follow other users, and interact with posts by commenting and liking. 
                        </div>

                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/LurkForWork"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    </StyledCard>
                </div>
                <div className={classes.box}>
                    <StyledCard className={classes.hover}>
                        <CardMedia
                            component="img"
                            alt="loopMania"
                            height="300"
                            image={mlr}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="Python"
                            avatar={<img src={pythonPic} className={classes.skillIcon}/>}
                        />
                      
                        </div>
                        <br/>
                       
                        
                        <h1 className={classes.projectTitle}>Predicting EBB Eligibility</h1>
                        <div className={classes.description}>
                        Created for the TracHack challenge, which requires participants to make predictions on the eligibility of customers for the Emergency Broadband Benifits (EBB) program. Positive unlabelled data were given, which presented a one-class classification problem. Modified Logistic Regression was chosen as the final model, and an F1 score of 0.96 was achieved. 
                        </div>

                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/PredictingEBBEligibility-OneClassClassification"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    </StyledCard>

                </div>
            </div>

            <div className={classes.hBox}>
                <div className={classes.box}>
                    <StyledCard className={classes.hover}>
                        <CardMedia
                            component="img"
                            alt="loopMania"
                            height="300"
                            image={flockr}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="Python"
                            avatar={<img src={pythonPic} className={classes.skillIcon}/>}
                        />

                        <StyledChip className="btn-skill"
                            label="Flask"
                            avatar={<img src={flaskPic} className={classes.skillIcon}/>}
                        />
                      
                        </div>
                        <br/>
                        <h1 className={classes.projectTitle}>Flockr Backend</h1>
                        <div className={classes.description}>
                        A digital communication and collaboration tool for teams, allowing for both private and group messaging
                        </div>

                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/Flockr"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    </StyledCard>

                </div>
                <div className={classes.box}>

                </div>
            </div>

        </div>
        <Animation/>
        
    </>)
}

export default Projects;