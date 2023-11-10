import React from 'react';

export const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovieId, setSelectedMovieId] = React.useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovieId, setSelectedMovieId }}>
      {children}
    </MovieContext.Provider>
  );
};
