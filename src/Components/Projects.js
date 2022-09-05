import React from 'react';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Card,
    CardMedia,
    Chip,
    Button
  } from "@mui/material";
import LoopMania from "./LoopMania.png";
import javaPic from './java.png'
import jsPic from './js.png'
import reactPic from './react.png'
import bigBrain from './bigBrain.png'
import mlr from './mlr.jpg'
import pythonPic from './python.png'
import lurkForWork from './lurkForWork.png'
import htmlPic from './html.png'
import cssPic from './css.png'
import flaskPic from './flask.png'
import flockr from './flockr.png'
import cPic from './c.png'
import flightDb from './flightDb.png'
import bootstrapPic from './bootstrap.png'
import muiPic from './mui.png'
//import { AnimatePresence } from "framer-motion";

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
        marginBottom:'50px',
        marginTop:'30px',
        fontSize: '80px',
        
     
    },
    hBox: {
        width: '100%',
        ['@media (min-width:850px)']: { 
            display: 'flex',
            flex: 1,
        }
    },
    
    box: {
        display: 'flex',
        flex: 1,
        verticalAlign: 'top',
        marginBottom: '50px'
    },
    projectTitle: {
        color: 'white',
        paddingBottom: '15px',
        paddingLeft: '35px',
        paddingRight: '35px',
        paddingTop: '0px',
        fontFamily: 'Times New Roman',
        fontWeight: 700,
        margin: '0'
    },
    description: {
        //color: '#424242',
        color: 'white',
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
    hover: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    skillIcon: {
        width: '35px !important',
        height: '35px !important',
        
    },
    madeWith:{
        //color: '#424242',
        color: 'white',
        display: 'inline'
    },
    green: {
        color:'#57BC90',
    }
   
  }));

const StyledCard = styled(Card)({
    //backgroundColor: 'white', 
    //backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    //background: 'rgba(99, 102, 106, 0.90)',
    background: 'rgba(65, 65, 65, 0.90)',
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
    borderRadius: '25px',
    marginBottom: '15px',
    paddingLeft: '10px',
    paddingRight: '10px',
});

const StyledButton = styled(Button)({
    //backgroundColor: '#1463F3',
    backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    marginLeft: '35px',
    marginBottom: '20px',

})


function Projects() {

    const classes = useStyles()
  
    return (<div id="projects">
        
        <div className={classes.outBox}>
            <h1 className={classes.heading}><span>My</span><span className={classes.green}>&nbsp;Projects</span></h1>
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
                            avatar={<img src={javaPic} className={classes.skillIcon} alt="Java logo"/>}
                        />
                      
                        
                        </div>
                        <br/>
                       
                        
                        <h1 className={classes.projectTitle}>Loop Mania</h1>
                        <div className={classes.description}>
                        A game in which the character travels through a loop, and gains points by defeating enemies and constructing buildings. The game features a series of different enemies, which increase in strength and complexity as the player progresses through the game. The project uses object-oriented design patterns such as observer, state and strategy.
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
                            avatar={<img src={jsPic} className={classes.skillIcon} alt="Javascript logo"/>}
                        />
                          
                        <StyledChip className="btn-skill" 
                            label="React"
                            avatar={<img src={reactPic} className={classes.skillIcon} alt="React logo"/>}
                        />  
                        <StyledChip className="btn-skill"
                            label="Material UI"
                            avatar={<img src={muiPic} className={classes.skillIcon} alt="MUI logo"/>}
                        />
                        </div>
                        <br/>
                       
                        <h1 className={classes.projectTitle}>Big Brain</h1>
                        <div className={classes.description}>
                        Big Brain is a website that allows users to create and take part in online multiple choice quizzes. A game creator can login/register, create new games by adding and editing questions, host games, and view past results in a dashboard. Game participants can join games through a link or password, answer questions, and view their own results.<br/> 
                       

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
                            avatar={<img src={htmlPic} className={classes.skillIcon} alt="html Logo"/>}
                        />
                        <StyledChip className="btn-skill"
                            label="CSS"
                            avatar={<img src={cssPic} className={classes.skillIcon} alt="CSS logo"/>}
                        />
                        <StyledChip className="btn-skill"
                            label="JavaScript"
                            avatar={<img src={jsPic} className={classes.skillIcon} alt="JavaScript logo"/>}
                        />
                        <StyledChip className="btn-skill" 
                            label="Bootstrap"
                            avatar={<img src={bootstrapPic} className={classes.skillIcon} alt="Bootstrap logo"/>}
                        /> 
                      
                        </div>
                        <br/>
                       
                        
                        <h1 className={classes.projectTitle}>Lurk For Work (frontend)</h1>
                        <div className={classes.description}>
                        A rip-off version of LinkedIn, in which users can post job opportunities, view posts in a feed, follow other users, and interact with posts by commenting and liking. The frontend interacts with a RESTful API in the backend, which was provided. 
                        </div>

                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/LurkForWork"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    </StyledCard>
                </div>
                <div className={classes.box}>
                    <StyledCard className={classes.hover}>
                        <CardMedia
                            component="img"
                            alt="modified logistic regression"
                            height="300"
                            image={mlr}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="Python"
                            avatar={<img src={pythonPic} className={classes.skillIcon} alt="Python Logo"/>}
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
                            alt="flockr text art"
                            height="300"
                            image={flockr}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="Python"
                            avatar={<img src={pythonPic} className={classes.skillIcon} alt="Python Icon"/>}
                        />

                        <StyledChip className="btn-skill"
                            label="Flask"
                            avatar={<img src={flaskPic} className={classes.skillIcon} alt="Flask Icon"/>}
                        />
                      
                        </div>
                        <br/>
                        <h1 className={classes.projectTitle}>Flockr (backend)</h1>
                        <div className={classes.description}>
                        A digital communication and collaboration tool for teams, allowing users to register/login (authentication using JWT), send private messsages, create and manage group chats, and send group messages. This project was developed in a group, and managed using Git.
                        </div>

                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/Flockr"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    </StyledCard>

                </div>
                <div className={classes.box}>
                    <StyledCard className={classes.hover}>
                        <CardMedia
                            component="img"
                            alt="flightDb AVLTree"
                            height="300"
                            image={flightDb}
                            top='0'
                        />
                        <div className={classes.skillHolder}>
                        <h3 className={classes.madeWith}>Made With:&nbsp;&nbsp;&nbsp;</h3>
                        <StyledChip className="btn-skill"
                            label="C"
                            avatar={<img src={cPic} className={classes.skillIcon} alt="C Icon"/>}
                        />
                      
                        </div>
                        <br/>
                        <h1 className={classes.projectTitle}>FlightDb</h1>
                        <div className={classes.description}>
                        FlightDb stores flight details, and offers efficient operations for searching for flights accodring to flight number, departure date, and departure airport. It can also find all flights between any two given times, as well as the next available flight out of any airport. The underlaying data structure of FlightDb is an AVL tree, which allows for insertion, deletion and search with time complexity O(log n)
                        </div>

                        <StyledButton size='large' variant="contained" href="https://github.com/FionaWang12138/FlightDB"><GitHubIcon/>&nbsp;CODE</StyledButton >
                    </StyledCard>
                </div>
            </div>

        </div>
        
    </div >)
}

export default Projects;