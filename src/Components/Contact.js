import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { Box, Button, TextareaAutosize} from "@mui/material";


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
        ['@media (max-width:850px)']: { 
            fontSize:"64px"
        }
     
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
    green: {
        color:'#57BC90',
    },
    textForm: {
        width: '50px',
        display: 'flex',
        flex: 1,
        paddingLeft: '10px !important',
        paddingRight: '10px !important',
    },

}));

const StyledButton = styled(Button)({
    //backgroundColor: '#1463F3',
    backgroundImage: 'linear-gradient(to bottom right, #77C9D4, #57BC90)',
    fontFamily: 'Times New Roman',
    marginLeft: 'calc(50% - 100px)',
    marginBottom: '20px',
    marginTop: '25px',
    color: 'white',
    width: '200px',
    height: '50px',
    fontSize:"24px", 
    fontWeight: '800',

})

const StyledBox = styled(Box)({
    width: '100%',
    display: 'flex',
    height: '50px',
    marginBotton: '20px !important',
    padding: '0',
})

function Contact () {
    
    const classes = useStyles();

    return (<div id='contact'>
        <div className={classes.outBox}>
            
            <h1 className={classes.heading}><span>Contact&nbsp;</span><span className={classes.green} >Me</span></h1>
            <div className={classes.greyBox}>
                
                <form action="https://getform.io/f/ac804f85-dfa6-4b41-84ee-f2cef901e317" method="POST">
                    <StyledBox>
                        <input style={{width: '50%', marginRight: '10px'}} name="Name" placeholder="Name" ></input>
                        <input style={{width: '50%', marginLeft: '10px'}} name="Email" placeholder="Your Email" type="email"></input>
                    </StyledBox>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Your Message"
                        className="text-area"
                        style={{ width:  "calc(100% - 6px)", height: "200px", marginTop: "20px" }}
                        name="Message"
                    ></TextareaAutosize>
                    
                    <StyledButton type="submit" size="small" >Submit</StyledButton>
                    
                </form>
                
				

            </div>
        
        </div>
        </div>
    );
}

export default Contact

