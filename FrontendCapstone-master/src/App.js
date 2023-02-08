import React from 'react'
import './App.css';
import Main from './Components/Main.js';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';

function App() {
    return (
      <div>
         <Header/>
         <Nav/>
         <Main/>
         <Footer />
      </div>
         
  );
}

export default App;
