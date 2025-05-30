'use client';

import React from 'react';
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

interface MapEmbedProps {
  mapApiKey: string;
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

  const center = {
    lat: mapCenterLat,
    lng: mapCenterLng,
  };

  const markerPosition = {
    lat: markerPositionLat,
    lng: markerPositionLng,
  };

  const mapOptions = {
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
    disableDefaultUI: true,
    zoomControl: true,
  };
  
  const effectiveMapStyle = { ...defaultMapStyle, ...mapContainerStyle };

  return (
    <APIProvider apiKey={mapApiKey}>
      <div className={containerClassName} style={effectiveMapStyle}>
        <Map
          defaultCenter={center}
          defaultZoom={mapZoom}
          style={{ width: '100%', height: '100%' }}
          {...mapOptions}
        >
          <AdvancedMarker position={markerPosition} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapEmbed; 