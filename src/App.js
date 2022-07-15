import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')

  const toggleMode= ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (

    <div className="App">
      <Navbar title="Textomate" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3" >
       <Textform title="Enter the text here" mode={mode}/> 
      {/*<About/>*/}
      </div>
      
     
    </div>
  );
}

export default App;
