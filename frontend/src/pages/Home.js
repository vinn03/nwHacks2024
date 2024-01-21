import React from 'react';
import '../css/Home.css';
import RouteForm from '../components/routeform';

export default function Home() {
  return (
    <div id="home">
      <header id="home-header">
        <h1>Routemaxxer</h1>
      </header>
      <div id="location-container">
        <RouteForm></RouteForm>
      </div>
    </div>
  );
}
