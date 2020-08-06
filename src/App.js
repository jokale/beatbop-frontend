import React from 'react';
// import logo from './logo.svg';
import Yellow from './components/Yellow'
import Blue from './components/Blue'
import Red from './components/Red'
import Green from './components/Green'

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div >
        <center><h1>Beat Bop</h1></center>
        <Yellow/>
        <br></br>
        <Blue/>
        <br></br>

        <Red/>
        <br></br>

        <Green/>
        <br></br>


<Footer/>
 
    </div>
  );
}

export default App;
