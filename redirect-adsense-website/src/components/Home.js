import React from 'react';
import { Link } from 'react-router-dom';

// import FashionLifestyleBlog from './FashionLifestyleBlog';

const Home = () => {
  return (
    <div className="container">
      <h1>React Bootstrap Router</h1>
      <Link to="/redirect/link3" className="btn btn-primary">Click to Redirect</Link>
      <br/><br/><br/><br/><br/><br/>
      {/* <FashionLifestyleBlog/> */}
    </div>
  );
};

export default Home;
