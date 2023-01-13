import React, { useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReactPlayer from'react-player/lazy';
import Link from '@mui/material/Link';
export default function vidss() {
    const [selectedFile,setSelectedFile] = useState(null)
    const[path,setPath] = useState("http://127:0.0.1:8000/vid/")
    const fileInputRef = useRef(null);
    // const handleClick = () => {
    //     fileInputRef.current.click();
    // };
    const fileChangeHandler = (e) => {
      setSelectedFile(e.target.files[0]);
      console.log(e.target.files[0]);
    };
    const handleSubmit = (e) => {
      const formData = new FormData();
      formData.append("file", selectedFile, selectedFile.name);
      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch("http://127.0.0.1:8000/upload/", requestOptions)
      .then((response) => response.json())
      .then(function (response) {
        console.log(response);
      });
  };
    return (
        <>
    <Box sx={{ flexGrow: 1 }}>
     
    <AppBar position="static" sx={{background:'#161616'}}>
                <Toolbar> 
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Auto-Surgery
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Predict-Video
                    </Typography>
                    <Link color='#FFFFFF' href = "/login">
                      <Button color="inherit" >Logout</Button>
                      </Link>
                    
                </Toolbar>
            </AppBar>
    </Box>
    
    <div className='videoscreen'>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'True' }}
      accept = {"video/*"}
        onChange={fileChangeHandler}
        />

          <Button variant="contained" color="primary" onClick={handleSubmit} >
                        predict
                    </Button>
          
    </div>
 {/* "/Users/sahilapte/Documents/project school stuff/acer/result.mp4" */}
    <div>
            <ReactPlayer
            
              url={"/Users/sahilapte/Documents/project school stuff/acer/result.mp4"}
              playing={true}
              // controls={true}
              // volume={0.8}
            />
            
          </div>

    {/* <ReactPlayer width={'100%'} height='100%' url="/Users/sahilapte/Documents/project school stuff/acer/result.mp4"/> */}
        </>
    );
}