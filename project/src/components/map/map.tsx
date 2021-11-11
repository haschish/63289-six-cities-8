import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { cities } from '../../mocks/cities';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';
import { Hotel } from '../../types/hotel';
import { URL_PIN_ACTIVE, URL_PIN_DEFAULT } from '../../const';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/reducer';

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

const mapStateToProps = ({AppProcess}: RootState) => ({
  hoveredHotel: AppProcess.hoveredHotel,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & MapProps;

function Map({offers, className, hoveredHotel}: ComponentProps): JSX.Element {
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

export default connector(Map);
