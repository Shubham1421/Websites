import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import targetLinks from '../data/links'; // Import the array from the separate file

const Redirect = () => {
  const navigate = useNavigate();
  const { target } = useParams();

  // Get the link associated with the target
  const redirectLink = targetLinks[target] || '/default'; // Use a default link if target doesn't match
  
  const [secondsRemaining, setSecondsRemaining] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prev) => prev - 1);
      } else {
        if (redirectLink.startsWith('http')) {
          window.location.href = redirectLink; // Redirect to an external URL
        } else {
          navigate(redirectLink); // Redirect to an internal route
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [navigate, secondsRemaining, redirectLink]);

  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Redirecting in {secondsRemaining} seconds...
          <br /> <br /> <h5> redirecting to {redirectLink} </h5>
        </div>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
