import React from 'react';
import '../css/Home.css';
import RouteForm from '../components/routeform';

export default function Home() {
  return (
    <div id="home">
      <header id="home-header">
        <div>
          <h1 id="header">ROUTEMAXXER</h1>
          <p id="slogan"> The eco-friendly route finder</p>
        </div>
        
      </header>
      <div id="location-container">
        <RouteForm></RouteForm>
      </div>
    </div>
  );
}
