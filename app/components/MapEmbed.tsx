'use client';

import React from 'react';
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

interface MapEmbedProps {
  mapApiKey: string;
  mapId: string;
  mapCenterLat: number;
  mapCenterLng: number;
  markerPositionLat: number;
  markerPositionLng: number;
  mapZoom?: number;
  containerClassName?: string;
  mapContainerStyle?: React.CSSProperties;
}

const defaultMapStyle: React.CSSProperties = {
  width: '100%',
  height: '400px', // Default height
  borderRadius: '0.5rem',
  overflow: 'hidden'
};

const MapEmbed: React.FC<MapEmbedProps> = ({
  mapApiKey,
  mapId,
  mapCenterLat,
  mapCenterLng,
  markerPositionLat,
  markerPositionLng,
  mapZoom = 15,
  containerClassName = 'rounded-lg overflow-hidden shadow-md',
  mapContainerStyle,
}) => {
  if (!mapApiKey) {
    return <div className="p-4 text-center text-red-600 bg-red-100 rounded-md">Google Maps API Key is missing.</div>;
  }
  if (!mapId) {
    return <div className="p-4 text-center text-red-600 bg-red-100 rounded-md">Google Maps Map ID is missing.</div>;
  }

  const center = {
    lat: mapCenterLat,
    lng: mapCenterLng,
  };

  const markerPosition = {
    lat: markerPositionLat,
    lng: markerPositionLng,
  };

  const effectiveMapStyle = { ...defaultMapStyle, ...mapContainerStyle };

  return (
    <APIProvider apiKey={mapApiKey}>
      <div className={containerClassName} style={effectiveMapStyle}>
        <Map
          mapId={mapId}
          defaultCenter={center}
          defaultZoom={mapZoom}
          disableDefaultUI={true}
          zoomControl={true}
          style={{ width: '100%', height: '100%' }}
        >
          <AdvancedMarker position={markerPosition} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapEmbed; 