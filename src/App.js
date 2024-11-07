import logo from './Steadforc_logo.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
import HandleQuery from './HandleQuerystring';

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
        <body className="App-body">          
          <div  >
            <div className="App-content">
            <h1 >Test your security knowledge</h1>
            <HandleQuery />          
            </div>
          <div className="App-linklist">
            <h2 className="App-Linklist-header">Klick for execute</h2>
            <ul>
              <li><a href="http://localhost:3000/?query=%3Cimg%20src=%22https://images.nightcafe.studio/jobs/eeAm4HsplPFebchirWed/eeAm4HsplPFebchirWed--1--ui923.jpg?tr=w-1600,c-at_max%22%20alt=%22Test%20Bild%22%20width=%22700%22/%3E" target="_self" rel="noopener noreferrer">Vulnerability 1</a></li>
              <li><a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">clear</a></li>

            </ul>
          </div>
          </div>
        </body>
      </div>
    </Router>
  );
}

export default App;
