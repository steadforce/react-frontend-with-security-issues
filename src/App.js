import logo from './Steadforc_logo.png';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HandleQuery from './HandleQuerystring';
import Forum from './Forum';


function App() {
  return (
    <Router>       
      <div className="App">        
        <header className="App-header">  
        <div className='App-logo-chapter'>
          <a         
            className="App-link"   
            href="https://www.steadforce.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          </div>    
        <div className="App-headline"><h1>This website has a few security vulnerabilities.<br /> 
          Are you able to find them all?</h1></div>           
        
        </header>
        <div className="App-body">          
          <div  >
            <div className="App-content">
            <h1 >Test your security knowledge</h1>
            <HandleQuery />
            <Routes>
              <Route path="/forum" Component={Forum} />
            </Routes>
            </div>
          <div className="App-linklist">
            <h2 className="App-Linklist-header">Klick for execute</h2>
            <ul>
              <li><NavLink to="/?query=%3Cimg%20src=%22https://images.nightcafe.studio/jobs/eeAm4HsplPFebchirWed/eeAm4HsplPFebchirWed--1--ui923.jpg?tr=w-1600,c-at_max%22%20alt=%22Test%20Bild%22%20width=%22700%22/%3E">Vulnerability 1</NavLink></li>
              <li><NavLink to="forum" target="_self" rel="noopener noreferrer">Vulnerability 2</NavLink></li>
              <li><NavLink to="" target="_self" rel="noopener noreferrer">clear</NavLink></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
