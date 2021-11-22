import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const styles = {
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'center',
  placeItems: 'center',
  height: '100vh',
};

function NotFound(): JSX.Element {
  return (
    <div style={styles}>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Go to the main page</Link>
    </div>
  );
}

export default NotFound;
