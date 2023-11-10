import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import LinkSend from './components/Auth/LinkSend';
import Navbarh from './components/Home/Navbarh';
import Dashboard from './screens/Dashboard/Dashboard';
import Movies from './screens/Movies/Movies';
import { AuthProvider } from './components/Auth/AuthContext'
import { MovieProvider } from './screens/Movies/Menu/MovieContext';
import MoviePlay from './screens/Movies/PlayMovie/MoviePlay';


function App() {
  return (
    <AuthProvider >
      <Router>
        <Navbarh />
        <MovieProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/linksend" element={<LinkSend />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/movies' element={<Movies />}>
              <Route path='play/:id' element={<MoviePlay />} />
            </Route>

          </Routes>
        </MovieProvider>
      </Router>
    </AuthProvider >
  );
}

export default App;
