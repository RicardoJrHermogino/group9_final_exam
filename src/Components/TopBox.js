import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTachometerAlt, faBox, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const TopBox = () => {
  return (
    <div className="d-flex justify-content-end align-items-center p-3" style={{ backgroundColor: '#374149' }}>
      <div className="mr-auto">
        <span className="text-white me-3">Welcome, User!</span>
        <FontAwesomeIcon icon={faBell} className="text-white me-3" />
        <FontAwesomeIcon icon={faUser} className="text-white" />
      </div>
    </div>
  );
};

export default Topbox;


