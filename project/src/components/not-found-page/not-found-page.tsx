import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Footer from '../footer/footer';
import Header from '../header/header';
import NotFound from '../not-found/not-found';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Header />

      <main className="page__main">
        <NotFound />
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
