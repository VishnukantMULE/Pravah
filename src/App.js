import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import NotFound from './screens/NotFound';
import Login from './screens/Login';
import Register from './screens/Register';
import LinkSend from './screens/LinkSend';
import User from './screens/User';
import Navbarh from './components/Navbarh';
import Recommanded from './screens/Recommanded';
import Trending from './screens/Trending';
import History from './screens/History';
import Saved from './screens/Saved';
import Music from './screens/Music';
// import Profile from './screens/Profile';
import Movies from './screens/Movies';
import Settings from './screens/Settings';
import PlayMovie from './screens/PlayMovie';




function App() {
  const [username, setUsername] = useState('');

  return (
    <>
      <Router>
        <Navbarh  setUsername={setUsername} username={username} /> {/* Include Navbarh component here */}
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUsername={setUsername}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/linksend" element={<LinkSend />} />
          <Route path="/user" element={<User username={username}/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/rcm"  element={<Recommanded />} />
          <Route path="/trend" element={<Trending />} />
          <Route path="/history" element={<History />} />
          <Route path="/movies" element={<Movies username={username}/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/play/:movieId" element={<PlayMovie username={username} />} />



          <Route path="/saved" element={<Saved/>} />
          <Route path="/music" element={<Music />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
