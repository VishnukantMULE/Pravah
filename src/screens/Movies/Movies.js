import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TrendingMovie from './Menu/TrendingMovie';
import AllMovies from './Menu/AllMovies';
import SavedMovies from './Menu/SavedMovies';
import History from './Menu/History';
import './style/Movies.css';

export default function Movies() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  let componentToRender;
  switch (selectedOption) {
    case 'trending':
      componentToRender = <TrendingMovie />;
      break;
    case 'allmovies':
      componentToRender = <AllMovies />;
      break;
    case 'save':
      componentToRender = <SavedMovies />;
      break;
    case 'history':
      componentToRender = <History />;
      break;
    default:
        componentToRender=<TrendingMovie/>
}

  return (
    <div className="wrapper">
<Sidebar onOptionSelect={handleOptionSelect} selectedOption={selectedOption} />
      <div className="component-container">{componentToRender}</div>
    </div>
  );
}
