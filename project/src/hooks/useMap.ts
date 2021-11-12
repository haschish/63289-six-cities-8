import {RefObject, useEffect, useState} from 'react';
import leaflet from 'leaflet';
import { City } from '../types/city';

type LeafletMap = leaflet.Map | null;

function useMap(mapRef: RefObject<HTMLDivElement>, city: City): LeafletMap {
  const [map, setMap] = useState<LeafletMap>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance: LeafletMap = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map]);

  useEffect(() => {
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      }, city.location.zoom);
    }
  }, [map, city]);

  return map;
}

export default useMap;
