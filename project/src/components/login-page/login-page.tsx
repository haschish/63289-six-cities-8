import { FormEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loginAction } from '../../store/api-action';
import { ThunkAppDispatch } from '../../types/action';
import Header from '../header/header';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(email: string, password: string) {
    dispatch(loginAction({email, password}));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentProps = PropsFromRedux;

function LoginPage({onSubmit}: ComponentProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit(email, password);
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default connector(LoginPage);
