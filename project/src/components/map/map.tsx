import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { cities } from '../../mocks/cities';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';
import { Hotel } from '../../types/hotel';
import { URL_PIN_ACTIVE, URL_PIN_DEFAULT } from '../../const';
import { useSelector } from 'react-redux';
import { getHoveredHotel } from '../../store/app-process/selectors';

const defaultIcon = leaflet.icon({
  iconUrl: URL_PIN_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const activeIcon = leaflet.icon({
  iconUrl: URL_PIN_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

type MapProps = {
  offers: Hotel[],
  className?: string,
}

function Map({offers, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cities[0]);
  const hoveredHotel = useSelector(getHoveredHotel);

  useEffect(() => {
    if (map) {
      map.markers?.clearLayers();

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: hoveredHotel?.id === offer.id ? activeIcon : defaultIcon,
          })
          .addTo(map.markers ? map.markers : map);
      });
    }
  }, [map, offers, hoveredHotel]);

  return (
    <section className={classNames('map', className)} ref={mapRef}></section>
  );
}

export default Map;
