import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

export default function App() {
  return (
    <div class="Home">
      <header id="Home-header">
        <span class="nav-heading" id="home-heading">Home</span>
        <span class="nav-heading">About Us</span>
        <span class="nav-heading">Contact</span>
      </header>
      <body>
        <div id="location-container">
          <h2>Starting Point:</h2>
          <input type="text" id="start-input" placeholder="Enter a starting point..."></input>
          <h2>Destination:</h2>
          <input type="text" id="destination-input" placeholder="Enter a destination..."></input>
          <button id="nav-button">
            OK
          </button>
        </div>
      </body>
    </div>
  );
}
