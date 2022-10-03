import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/Login';
import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path='/home' element={<Homescreen/>} />
     <Route path='/book/:movieid' element={<Bookingscreen/>} />
  
     
     </Routes>
     </BrowserRouter>
      



    </div>
  );
}

export default App;
