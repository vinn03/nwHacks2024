import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';


export default function LeafletMap() {
  const position = [49.20, -123]; // Default map center coordinates

  return (
    <MapContainer center={position} zoom={11} style={{ height: '100vh', width: '70%' }}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};
;
