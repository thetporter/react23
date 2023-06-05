import './App.css';
import React from 'react';
import { Navbar } from './components/Navigator/Navigator';
import { Route, Routes  } from 'react-router-dom';
import { Home, NotFound } from './components/'

function App() {
  return (<Navbar>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
  </Navbar>);
}

export default App;