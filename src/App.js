
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import { useState } from 'react';
import Recipepage from './pages/Recipepage';
import Submit from './pages/Submit';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Country from './pages/Country';
import Sortedrecipes from './pages/Sortedrecipes';
import Randomrecipe from './pages/Randomrecipe';
import Testing from './pages/Testing';



function App() {
  
  // const Routingg=()=>{
  //   return (
  //   <Switch>
  //   <Route exact path ="/">
  //     <Home/>
  //   </Route>
  //   </Switch>
  //   )
  // }  
  return (

<>

<Navbar/>
<Router>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipe/:id" element={<Recipepage/>} />
        <Route path="/viewmore/:country" element={<Country/>} />
        <Route path="/latestrecipes" element={<Sortedrecipes/>} />
        <Route path="/randomrecipe" element={<Randomrecipe/>} />
        <Route path="/publish" element={<Submit/>} />
        {/* <Route path="/testing" element={<Testing/>} /> */}
      </Routes>
    </Router>

</>
    
    

  );
}

export default App;
