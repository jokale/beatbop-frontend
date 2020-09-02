import React from 'react';
// import logo from './logo.svg';
import Yellow from './components/Yellow'
import Blue from './components/Blue'
import Red from './components/Red'
import Green from './components/Green'
// import Pink from './components/Pink'


import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div >
        <Yellow/>
        <br></br>
        <Blue/>
        <br></br>
        <center><h1 id="middle-title">BEAT <br></br> BOP <br></br> IT</h1></center>
        <Red/>
        <br></br>

        <Green/>
        <br></br>



<Footer/>
 
    </div>
  );
}

export default App;
