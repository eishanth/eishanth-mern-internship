import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Users } from './components/users';
import { Formtoredux } from './components/formtoredux';
import { Addredux } from './components/addredux';
import { Basic } from './BootStrap/basicbs';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Basic />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
