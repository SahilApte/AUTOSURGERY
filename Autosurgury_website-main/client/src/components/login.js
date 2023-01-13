import './edo.css';
import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "/Users/sahilapte/Documents/project school stuff/acer/Autosurgury_website-main/client/src/components/home.css"
import backgroundImage from '/Users/sahilapte/Documents/project school stuff/acer/Autosurgury_website-main/client/src/components/mrmsddr.png'
import Image from '/Users/sahilapte/Documents/project school stuff/acer/Autosurgury_website-main/client/src/assets/login_scren.jpg'
const Login = ({ setLoginUser}) => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3001/login", user)
        // axios.post("http://43.206.117.90:5000/login", user)
        .then(res => {
            // alert(res.data.message)
            setLoginUser(res.data.user)
            console.log("send");
            navigate("/")
        })
    }
   

        
    return (
        <backgroundImage>
        <div className ="bgm" sx={{ backgroundImage: `url(${"/Users/sahilapte/Documents/project school stuff/acer/Autosurgury_website-main/mrmsddr.png"})` }}>
        <AppBar position="static" sx={{backgroundColor:'#000000'}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Auto-Surgery
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="avtar">
                <img src={Image} alt="SVG" className="svavtar" />                
                </div>
        <Box m={7} t={7}
        display="flex"
        justifyContent="right"
        alignItems=""
        minHeight="1000vh">
        <div className="login">

            <h1>Sign_In</h1>
            {/* <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username"></input><br/><br/> */}
            <TextField
                variant="outlined"
                color="primary"
                type="text"
                label="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
        
            /><br/><br/>
            
            <TextField
                variant="outlined"
                color="primary"
                type="password"
                label="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
            /> <br/><br/>

            <Button className='normal' variant="contained" color="primary" onClick={login}>
                Login
            </Button>
            &ensp;
            <Button variant="contained" color="primary" onClick={() => navigate("/signup")} >
                signup
            </Button>
            </div>
        </Box>
        </div>
        </backgroundImage>
    )
}

export default Login