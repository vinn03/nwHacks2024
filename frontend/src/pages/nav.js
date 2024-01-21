import React from 'react';
import LeafletMap from '../components/leafletmap';
import { useLocation } from 'react-router-dom'
import '../css/nav.css';
import { isFunctionDeclaration } from 'typescript';

function co2Production(carEfficiency){
    return carEfficiency * (8.99 * 10**(-3)/(100 * 3.785 * 0.993)) * 1000000
}

function gasConsumption(carEfficiency, distance){
    return (carEfficiency/100) * distance
}

export default function Nav() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const start = searchParams.get('startingPoint');
    const end = searchParams.get('destination');
    const gas = searchParams.get('gasConsumption');
    const routeRes = searchParams.get('routeRes');

    const co2 = co2Production(gas);
    

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
                    {co2} g CO2
                </div>
            </div>
        </div>
    );
}
