// src/components/Map/Map.tsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './Map.module.css';

const MapComponent: React.FC = () => {
  // Replace these coordinates with your actual location
  const center = {
    lat: -1.4728, // Kitengela approximate coordinates
    lng: 36.9782
  };

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <div className={styles.mapContainer}>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker
            position={center}
            title="VetCare Pro"
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;