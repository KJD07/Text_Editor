import Navbar from './Navbar';
import Text from './Text';
import './App.css';
import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";

function App(props) {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const[header,setheader]=useState('light')

  const showAlert =(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      setheader('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      document.title = 'Text Editor in Dark Mode';
      showAlert("switched to Dark mode", "success");
    }else if(mode==='dark'){
      setmode('light');
      setheader('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'Text Editor in Light Mode';
      showAlert("switched to Light mode", "success");
    }else{
      setmode('dark');
      setheader('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      document.title = 'Text Editor in Dark Mode';
      showAlert("switched to Dark mode", "success");
    }
  }

  const toggleModeGreen =()=>{
    if(mode==='light'){
      setmode('#9ADE7B');
      setheader('light');
      document.body.style.backgroundColor = '#9ADE7B';
      document.body.style.color = 'black';
      // showAlert("switched to Dark mode", "success");
    }else if(mode==='#9ADE7B'){
      setmode('light');
      setheader('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert("switched to Light mode", "success");
    }else{
      setmode('#9ADE7B');
      setheader('light');
      document.body.style.backgroundColor = '#9ADE7B';
      document.body.style.color = 'black';
    }
  }

  const toggleModeRed =()=>{
    if(mode==='light'){
      setmode('#FF6868');
      setheader('light');
      document.body.style.backgroundColor = '#FF6868';
      document.body.style.color = 'black';
      // showAlert("switched to Dark mode", "success");
    }else if(mode==='#FF6868'){
      setmode('light');
      setheader('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert("switched to Light mode", "success");
    }else{
      setmode('#FF6868');
      setheader('light');
      document.body.style.backgroundColor = '#FF6868';
      document.body.style.color = 'black';
      // showAlert("switched to Dark mode", "success");
    }
  }

  const toggleModeBlue =()=>{
    if(mode==='light'){
      setmode('#0174BE');
      setheader('dark');
      document.body.style.backgroundColor = '#0174BE';
      document.body.style.color = 'white';
      // showAlert("switched to Dark mode", "success");
    }else if(mode==='#0174BE'){
      setmode('light');
      setheader('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert("switched to Light mode", "success");
    }else{
      setmode('#0174BE');
      setheader('dark');
      document.body.style.backgroundColor = '#0174BE';
      document.body.style.color = 'white';
      // showAlert("switched to Dark mode", "success");
    }
  }

  const toggleModeYellow =()=>{
    if(mode==='light'){
      setmode('#FFBB64');
      setheader('light');
      document.body.style.backgroundColor = '#FFBB64';
      document.body.style.color = 'black';
      // showAlert("switched to Dark mode", "success");
    }else if(mode==='#FFBB64'){
      setmode('light');
      setheader('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert("switched to Light mode", "success");
    }else{
      setmode('#FFBB64');
      setheader('light');
      document.body.style.backgroundColor = '#FFBB64';
      document.body.style.color = 'black';
      // showAlert("switched to Dark mode", "success");
    }
  }

  const toggleModeBrown =()=>{
    if(mode==='light'){
      setmode('#7D0A0A');
      setheader('dark');
      document.body.style.backgroundColor = '#7D0A0A';
      document.body.style.color = 'white';
      // showAlert("switched to Dark mode", "success");
    }else if(mode==='#7D0A0A'){
      setmode('light');
      setheader('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert("switched to Light mode", "success");
    }else{
      setmode('#7D0A0A');
      setheader('dark');
      document.body.style.backgroundColor = '#7D0A0A';
      document.body.style.color = 'white';
      // showAlert("switched to Dark mode", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar anotheraction = "Action2" mode={mode} header={header}toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} toggleModeYellow={toggleModeYellow} toggleModeBlue={toggleModeBlue} toggleModeBrown={toggleModeBrown}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/" element={<Text mode={mode} showAlert={showAlert}/>}/>
      <Route exact path="/about" element={<About mode={mode}/>}/>
    </Routes>
    </Router>
    </>
    
    
  );
}

export default App;
