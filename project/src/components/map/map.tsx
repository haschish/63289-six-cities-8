import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { cities } from '../../mocks/cities';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';
import { Hotel } from '../../types/hotel';
import { URL_PIN_DEFAULT } from '../../const';

type MapProps = {
  offers: Hotel[],
  className?: string,
}

const defaultIcon = leaflet.icon({
  iconUrl: URL_PIN_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

function Map({offers, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cities[0]);

  useEffect(() => {
    if (map) {
      map.markers?.clearLayers();

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultIcon,
          })
          .addTo(map.markers ? map.markers : map);
      });
    }
  }, [map, offers]);

  return (
    <section className={classNames('map', className)} ref={mapRef}></section>
  );
}

export default Map;
