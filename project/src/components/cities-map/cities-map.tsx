import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { cities } from '../../mocks/cities';
import 'leaflet/dist/leaflet.css';
import { Hotel } from '../../types/hotel';
import { URL_PIN_DEFAULT } from '../../const';

type CitiesMapProps = {
  offers: Hotel[],
}

function CitiesMap({offers}: CitiesMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cities[0]);

  const defaultIcon = leaflet.icon({
    iconUrl: URL_PIN_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default CitiesMap;
