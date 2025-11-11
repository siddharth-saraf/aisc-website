import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found - AISC UW</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <img 
              src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00:16:56.957Z" 
              alt="404 Error" 
              className="error-image"
            />
            <h1 className="error-title">404 Error!</h1>
            <p className="error-description">
              The page you are looking for is not available or doesn't belong to this website!
            </p>
            <Link to="/" className="home-button">
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;