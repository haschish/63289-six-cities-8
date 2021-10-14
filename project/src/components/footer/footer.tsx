import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Link className="footer__logo-link" href="main.html" to={AppRoute.Main}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export default Footer;
