import React from 'react';
import LeafletMap from '../components/leafletmap';
import '../css/nav.css';

export default function Nav() {
  return (
    <div className="Nav">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
      <LeafletMap />
      <div className="overlay-box">Content here</div>
    </div>
  );
}
