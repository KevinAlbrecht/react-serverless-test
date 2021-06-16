import React from 'react';

import L from 'leaflet';
import 'leaflet-css/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';

import { useEffect } from 'react';
import './leaflet-map.css';

let myMap;
let markerLayer;

const toggleMarkers = (locations = []) => {
  if (markerLayer) myMap.removeLayer(markerLayer);
  const layers = [];
  locations.forEach((c) => {
    const icon = new L.Icon({
      iconUrl: markerIcon,
    });
    const marker = L.marker(c.marker, {
      icon,
    });
    marker.bindPopup(`<b>${c.name}</b>`);
    layers.push(marker);
  });
  markerLayer = L.layerGroup(layers);

  myMap.addLayer(markerLayer);
};

export default function ({ locations }) {
  useEffect(() => {
    myMap = L.map('mapid').setView([43.4550741, 5.4798312], 16);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          '',
      }
    ).addTo(myMap);
  }, []);

  useEffect(() => {
    toggleMarkers(locations);
  }, [locations]);

  return <div id='mapid'></div>;
}
