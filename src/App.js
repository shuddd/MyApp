import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

let name="Shubham"
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
      document.title="MyApp : Dark Mode"
      // setInterval(() => {
      //   document.title="MyApp is amazing!"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install MyApp now!"
      // }, 1500);
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    {/* <Router> */}
          
    <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} aboutText="About MyApp"/>
    <Alert alert={alert}></Alert>
    <div className="container">
          {/* <Switch> */}
                {/* <Route exact path="/about"> */}
                {/* <About/> */}
                {/* </Route> */}
                {/* <Route exact path="/"> */}
                <TextForm showAlert={showAlert} mode ={mode} heading="Enter the text to convert to Uppercase or Lowercase!"/>
                {/* </Route> */}
              {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
