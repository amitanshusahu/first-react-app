import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';

function App(){
  return(
    <div>
    <Navbar title="hi"/>
    <Textform heading="The Text area" />
    </div>
  );
}

export default App;
