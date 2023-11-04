import React from 'react';
import spinner from './style/ICONS/pinner.gif'; // Update the path to the spinner GIF if needed
import './style/Loading.css'; 
export default function Loading() {
  return (
    <div className="loading-spinner">
      <img className="spinner-image" src={spinner} alt="Loading Spinner" />
    </div>
  );
}
