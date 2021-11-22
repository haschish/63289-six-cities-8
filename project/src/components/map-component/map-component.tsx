import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';
import { Hotel } from '../../types/hotel';
import { URL_PIN_ACTIVE, URL_PIN_DEFAULT } from '../../const';
import { City } from '../../types/city';

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
  city: City,
  className?: string,
  selectedOffer?: Hotel,
}

const markers = new Map<number, leaflet.Marker>();

function MapComponent({offers, className, city, selectedOffer}: MapComponentProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const [activeMarker, setActiveMarker] = useState<leaflet.Marker>();

  useEffect(() => {
    if (map) {
      markersGroup.addTo(map);
      markersGroup.clearLayers();
      markers.clear();

      offers.forEach((offer) => {
        const icon = (selectedOffer && offer.id === selectedOffer.id) ? activeIcon : defaultIcon;
        const marker = leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon,
        });
        markers.set(offer.id, marker);
        marker.addTo(markersGroup);
      });
    }
  }, [map, offers]);

  useEffect(() => {
    activeMarker?.setIcon(defaultIcon);
    if (selectedOffer) {
      const marker = markers.get(selectedOffer.id);
      marker?.setIcon(activeIcon);
      setActiveMarker(marker);
    }
  }, [selectedOffer]);

  return (
    <section className={classNames('map', className)} ref={mapRef}></section>
  );
}

export default MapComponent;
