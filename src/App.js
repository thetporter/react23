import './App.css';
import React from 'react';
import { Navbar } from './components/Navigator/Navigator';
import { Route, Routes  } from 'react-router-dom';
import { Home, NotFound, PostsPage, PostPage, CreatorPage } from './components/'

function App() {
  return (
  <Navbar>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<PostsPage/>}/>
          <Route path='/posts/create' element={<CreatorPage />} />
          <Route path='/posts/:id' element={<PostPage />} />
          <Route path='*' element={<NotFound/>}/>
      </Routes>
  </Navbar>);
}

export default App;