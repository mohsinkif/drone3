// HeatmapExample.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const HeatmapExample = () => {
  return (
    <MapContainer style={{ height: '100%', width: '100%' }} center={[40.505, -100.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[90.505, 100.09]}>
        <Popup>
          I am a pop-up!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default HeatmapExample;
