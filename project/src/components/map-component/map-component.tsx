import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';
import { Hotel } from '../../types/hotel';
import { URL_PIN_ACTIVE, URL_PIN_DEFAULT } from '../../const';
import { useSelector } from 'react-redux';
import { getCurrentCity, getHoveredHotel } from '../../store/app-process/selectors';

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

const markersGroup = leaflet.layerGroup();

type MapComponentProps = {
  offers: Hotel[],
  className?: string,
}

const markers = new Map<number, leaflet.Marker>();

function MapComponent({offers, className}: MapComponentProps): JSX.Element {
  const mapRef = useRef(null);
  const currentCity = useSelector(getCurrentCity);
  const map = useMap(mapRef, currentCity);
  const [activeMarker, setActiveMarker] = useState<leaflet.Marker>();
  const hoveredHotel = useSelector(getHoveredHotel);

  useEffect(() => {
    if (map) {
      markersGroup.addTo(map);
      markersGroup.clearLayers();
      markers.clear();

      offers.forEach((offer) => {
        const marker = leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: defaultIcon,
        });
        markers.set(offer.id, marker);
        marker.addTo(markersGroup);
      });
    }
  }, [map, offers]);

  useEffect(() => {
    activeMarker?.setIcon(defaultIcon);
    if (hoveredHotel) {
      const marker = markers.get(hoveredHotel.id);
      marker?.setIcon(activeIcon);
      setActiveMarker(marker);
    }
  }, [hoveredHotel]);

  return (
    <section className={classNames('map', className)} ref={mapRef}></section>
  );
}

export default MapComponent;
