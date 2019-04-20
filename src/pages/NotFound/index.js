import React from 'react';
import './styles.css'

const NotFound = () => (
  <>
    <div id="thanos">
      <div className="main">
        <h1><span className="boldText">OOOPS!</span><br/>Thanos used the gauntlet and disappeared with this page :(</h1>
        <button className="btn" onClick={() => window.location='/'}>Back to homepage</button>
      </div>
    </div>
  </>
);

export default NotFound;
