import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/header';
import MapComponent from '../map-component/map-component';
import PlacesList from '../places-list/places-list';
import CommentForm from './comment-form/comment-form';
import ReviewsList from './reviews-list/reviews-list';
import PropertyGallery from './property-gallery/property-gallery';
import InsideList from './inside-list/inside-list';
import { useParams } from 'react-router';
import { fetchOfferAction, toggleFavorite } from '../../store/api-action';
import { useEffect } from 'react';
import { AuthStatus, cities, ResourceStatus, typeMap } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from '../not-found/not-found';
import { getNearbyOffers, getOffer, getOfferStatus, getPreparedReviews } from '../../store/app-data/selectors';
import { getAuthStatus } from '../../store/user-data/selectors';
import classNames from 'classnames';

const MAX_IMAGES = 6;


function PropertyPage(): JSX.Element {

  const {id} = useParams<{id: string}>();

  const reviews = useSelector(getPreparedReviews);
  const nearbyOffers = useSelector(getNearbyOffers);
  const authStatus = useSelector(getAuthStatus);
  const offer = useSelector(getOffer);
  const offerStatus = useSelector(getOfferStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(parseInt(id, 10)));
  }, [id]);

  if (offerStatus === ResourceStatus.Loading || offerStatus === ResourceStatus.Unknown) {
    return <LoadingScreen />;
  }

  if (offerStatus === ResourceStatus.NotFound || offerStatus === ResourceStatus.Error) {
    return <NotFound />;
  }

  const handlerBookmarkButtonClick = () => {
    dispatch(toggleFavorite(offer!.id, !offer!.isFavorite));
  };

  const city = cities.find((it) => it.name === offer?.city.name);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery images={offer!.images.slice(0, MAX_IMAGES)} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer!.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer!.title}</h1>
                <button className={classNames('property__bookmark-button button', {'property__bookmark-button--active': offer!.isFavorite})} type="button" onClick={handlerBookmarkButtonClick}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {typeMap[offer!.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer!.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer!.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer!.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <InsideList data={offer!.goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={classNames('property__avatar-wrapper user__avatar-wrapper', {'property__avatar-wrapper--pro': offer!.host.isPro})}>
                    <img className="property__avatar user__avatar" src={offer!.host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer!.host.name}
                  </span>
                  {offer!.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer!.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                {authStatus === AuthStatus.Authorized && <CommentForm hotelId={parseInt(id, 10)}/>}
              </section>
            </div>
          </div>
          <MapComponent city={city!} offers={nearbyOffers.concat(offer!)} selectedOffer={offer!} className="property__map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList offers={nearbyOffers} className="near-places__list" classNameCard="near-places__card" isDispatchHover={false}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
