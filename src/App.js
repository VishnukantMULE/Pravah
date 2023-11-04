import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/Home/About';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import LinkSend from './components/Auth/LinkSend';

import Navbarh from './components/Home/Navbarh';
import Dashboard from './screens/Dashboard/Dashboard';
import Movies from './screens/Movies/Movies';






function App() {
  const [username, setUsername] = useState('');

  return (
    <>
      <Router>
        <Navbarh  setUsername={setUsername} username={username} /> {/* Include Navbarh component here */}
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login setUsername={setUsername}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/linksend" element={<LinkSend />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/movies' element={<Movies/>}/>


        </Routes>
      </Router>
    </>
  );
}

export default App;
