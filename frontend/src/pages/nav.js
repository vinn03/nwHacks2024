import React from 'react';
import LeafletMap from '../components/leafletmap';
import '../css/nav.css';

export default function Nav() {
    return (
        <div className="Nav">
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <div className="flex-container">
                <LeafletMap />
                <div id="stats">
                    <h1>Time</h1>
                    <h1>Distance</h1>
                    <h1>Net Gas Consumption</h1>
                    <h1>Net Carbon Emissions</h1>
                </div>
            </div>
        </div>
    );
}
