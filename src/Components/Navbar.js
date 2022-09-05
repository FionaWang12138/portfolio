import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
//import { Hashlink as Link } from 'react-router-hash-link';
import { Anchor } from 'antd';
import styles from './style.module.css';

const { Link } = Anchor;


const useStyles = makeStyles(theme => ({
    tb: {
        boxShadow: "none",
        //backgroundImage: 'linear-gradient(to right, #77D9C4, #57BC90)'
        backgroundColor: '#1e1e1e',
        height:'60vh',
    },
    buttons: {
        width: '400px',
        right: '50px',
        position: 'absolute',
        display: 'flex'
    },
    topBarOptions: {
        fontSize:"24px", 
        fontWeight: '800',
        fontFamily:"Times New Roman",
        flexGrow: 1,
        color:'white',
        cursor: 'pointer',
        marginRight: '20px',
        width: '100%',
        textDecoration: 'none', 
    },
    logo: {
        width: '50px',
        display: 'inline-block',
        cursor: 'pointer',
    }
  }));


const StyledAppBar = styled(AppBar)({
    boxShadow: "none",
    
    backgroundImage: 'linear-gradient(to right, #77D9C4, #57BC90)',
    //backgroundColor: '#1e1e1e',
    height:'65px',
    //borderBottomLeftRadius: '15px'
});

const StyledToolbar = styled(Toolbar)({
    width: '100%'
})


function Navbar () {
    
    const classes = useStyles();
    const navigate = useNavigate();

    return (<>
        <Box>
            
            <StyledAppBar>
            
                <StyledToolbar>
                    <img className={classes.logo}  src={logo} onClick={() => window.location.replace("/#home")}/>
                   
                    
                    <div className={classes.buttons}>
                        <a className={classes.topBarOptions} href="#home" >Home</a>
                        <a className={classes.topBarOptions} href="#projects" >Projects</a>
                        <a className={classes.topBarOptions} href="#aboutMe" >About</a>
                        <a className={classes.topBarOptions} href="#contact" >Contact</a>
                    </div>
                    
                    
                </StyledToolbar>
            </StyledAppBar>
        </Box>
       
        </>
    );
}

export default Navbar

