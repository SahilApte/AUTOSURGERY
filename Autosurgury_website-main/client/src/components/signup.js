import React, { useState } from "react"
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
import Icon from '../assets/signupscreen.jpg';
const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "", // 
        username:"", // sanjuth
        password:"", // 1234
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, username, password } = user
        if( name && username && password){
            // console.log(username);
            // axios.post("http://43.206.117.90:5000/signup", user)
            axios.post("http://localhost:3001/signup", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
            .catch(err => console.log("req error"));
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div>
            <AppBar position="static" sx={{backgroundColor:'#000000'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Auto-Surgery
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="avtar">
                <img src={Icon} alt="SVG" className="svavtar" />                
                </div>
        <Box className="box1"
        display="flex"
        justifyContent="right"
        alignItems="center"
        minHeight="100vh">
        <div className="signup">
            {console.log("User", user)}
            <h1>Sign up</h1>
            {/* <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>  */}
            <TextField
                variant="outlined"
                color="primary"
                type="text"
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
            /> <br/><br/>
            {/* <input type="text" name="username" value={user.username} placeholder="Your username" onChange={ handleChange }></input> <br/><br/> */}
            <TextField
                variant="outlined"
                color="primary"
                type="text"
                label="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
            /> <br/><br/>
            {/* <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input> <br/><br/> */}
            <TextField
                variant="outlined"
                color="primary"
                type="password"
                label="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
            /> <br/><br/>
        
            <Button variant="contained" color="primary" onClick={signup} >
                Sign Up
            </Button>
            <br></br>
            <Button variant="text" color="primary" onClick={() => navigate("/login")} >
               <i><u>

                Already a user? Login
               </u>
                </i>
            </Button>
        </div>
        </Box>
        </div>
    )
}

export default Register