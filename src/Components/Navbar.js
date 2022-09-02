import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'



const useStyles = makeStyles(theme => ({
    tb: {
        boxShadow: "none",
        //backgroundImage: 'linear-gradient(to right, #77D9C4, #57BC90)'
        backgroundColor: '#1e1e1e',
        height:'60vh',
    },
    buttons: {
        paddingLeft: '60% !important',
        width: '100%',
        display: 'flex'
    },
    topBarOptions: {
        fontSize:"24px", 
        fontWeight: '800',
        fontFamily:"Times New Roman",
        flexGrow: 1,
        color:'white',
        cursor: 'pointer',
        flex: 1,
        width: '100%'
    },
    logo: {
        width: '50px',
        display: 'inline-block',
        cursor: 'pointer',
    }
  }));

const StyledTypography = styled(Typography)({
    //backgroundColor: theme.palette.background.default, //property to override
    fontSize:"24px", 
    fontWeight: '800',
    fontFamily:"Times New Roman",
    flexGrow: 1,
    color:'white',
    cursor: 'pointer',
    flex: 1,
    width: '100%'
});

const StyledAppBar = styled(AppBar)({
    boxShadow: "none",
    
    backgroundImage: 'linear-gradient(to right, #77D9C4, #57BC90)',
    //backgroundColor: '#1e1e1e',
    height:'65px',
    //borderBottomLeftRadius: '15px'
});




function Navbar () {
    
    const classes = useStyles();
    const navigate = useNavigate();

    return (<>
        <Box>
            
            <StyledAppBar>
            
                <Toolbar>
                    <img className={classes.logo}  src={logo} onClick={()=>{navigate('/home')}}/>
                    <div className={classes.buttons}>
                        <div className={classes.topBarOptions} onClick={()=>{navigate('/home')}}>
                            Home
                        </div>
                        <div className={classes.topBarOptions} onClick={()=>{navigate('/projects')}}>
                            Projects
                        </div>
                        <div className={classes.topBarOptions} onClick={()=>{navigate('/contact')}}>
                            Contact
                        </div>

                    </div>
                    
                </Toolbar>
            </StyledAppBar>
        </Box>
        </>
    );
}

export default Navbar

