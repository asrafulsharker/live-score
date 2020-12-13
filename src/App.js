import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MyCard from './components/MyCard';
import {getMatches} from './api/api';
function App() {
  useEffect(()=>{
    getMatches()
        .then((data)=>console.log("DATA",data))
        .catch( )
  },[])
  return (
    <div className="App">
      <Navbar/>
      <h1>This is app</h1>
      <MyCard/>
      {
      }
    </div>
  );
}

export default App;
