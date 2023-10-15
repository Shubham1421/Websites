import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>React Bootstrap Router</h1>
      <Link to="/redirect" className="btn btn-primary">Click to Redirect</Link>
    </div>
  );
};

export default Home;
