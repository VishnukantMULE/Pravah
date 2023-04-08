import React from 'react';
import '../css/Loading.css'; // import external CSS file
import loading from '../utils/icons/loading.png'
function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Loading" />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
