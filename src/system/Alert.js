import React from 'react';
import './style/Alert.css';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
