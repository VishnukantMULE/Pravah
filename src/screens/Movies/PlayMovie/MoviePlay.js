import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function MoviePlay() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("MoviePlay component mounted with ID:", id);
    // Fetch and display movie details using the movie ID here if needed
  }, [id]);

  return (
    <div>
      <h2>MoviePlay</h2>
      <p>Movie ID: {id}</p>
    </div>
  );
}
