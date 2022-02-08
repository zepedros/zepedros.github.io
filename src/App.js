import logo from './logo.svg';
import './App.css';
import React from "react"; 

import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";

import Default from './components/default/Default';
import HomePage from './components/homepage/Homepage';
import AboutMe from './components/about-me/AboutMe';
import Contacts from './components/contacts/Contacts'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="default" element={<Default />} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="about-me" element={<AboutMe/>}/>
        <Route path="contacts" element={<Contacts/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
