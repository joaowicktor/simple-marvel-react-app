import React from 'react';
import './styles.css';

const LoadingSpinner = () => (
  <div className="spinner">
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
);

export default LoadingSpinner;
