import React, { useState } from 'react';
import Recommanded from './Recommanded';
import History from './History';
import Saved from './Saved';
import Profile from './Profile';
import Leftsidebar from './Leftsidebar';
import '../css/Movies.css';


function Movies(props) {
  const username=props.username;
  const [selected, setSelected] = useState('rcm'); // Default selected option is "Recommanded"
  const [movieSelected, setMovieSelected] = useState(false); // Set initial value to false

  const handleSelect = (option) => {
    setSelected(option);
    setMovieSelected(false); // Reset movie selection when switching to another tab
  };


  return (
    <div className="movies-container">
      <div className='leftsidebar'>

      <Leftsidebar selected={selected} handleSelect={handleSelect} />
      </div>
      <div className="content-container">
        {/* Conditionally render components based on selected option */}
        {selected === 'rcm' && !movieSelected && <Recommanded  username={username}/>}
        {selected === 'history' && <History username={username}/>}
        {selected === 'saved' && <Saved username={username}/>}
        {selected === 'settings' && <Profile username={username}/>}

      </div>
    </div>
  );
}

export default Movies;
