import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import Header from '../header/header';
import Map from '../map/map';
import PlacesList from '../places-list/places-list';
import CommentForm from './comment-form/comment-form';
import ReviewsList from './reviews-list/reviews-list';
import PropertyGallery from './property-gallery/property-gallery';
import InsideList from './inside-list/inside-list';
import { useParams } from 'react-router';
import { fetchOfferAction } from '../../store/api-action';
import { ThunkAppDispatch } from '../../types/action';
import { useEffect } from 'react';
import { AuthStatus, OfferStatus } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from '../not-found/not-found';

type PropertyPageProps = {
}
const mapStateToProps = ({offer, offerStatus, reviews, nearbyOffers, authStatus}: State) => ({
  offer,
  offerStatus,
  reviews,
  nearbyOffers,
  authStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadOffer(id: number) {
    dispatch(fetchOfferAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux & PropertyPageProps;

function PropertyPage(props: ComponentProps): JSX.Element {
  const {reviews, offer, offerStatus, loadOffer, nearbyOffers, authStatus} = props;

  const {id} = useParams<{id: string}>();

  useEffect(() => {
    loadOffer(parseInt(id, 10));
  }, [id]);

  if (offerStatus === OfferStatus.Loading || offerStatus === OfferStatus.Unknown) {
    return <LoadingScreen />;
  }

  if (offerStatus === OfferStatus.NotFound || offerStatus === OfferStatus.Error) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery images={offer!.images} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer!.title}</h1>
                <button className="property__bookmark-button button" type="button">
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
                  {offer!.type}
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
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
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
          <Map offers={nearbyOffers} className="property__map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList offers={nearbyOffers} className="near-places__list" classNameCard="near-places__card" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default connector(PropertyPage);
