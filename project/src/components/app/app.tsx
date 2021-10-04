import MainPage from '../main-page/main-page';

type AppProps = {
  numberOfOffers: number,
}

function App(props: AppProps): JSX.Element {
  return <MainPage numberOfOffers={props.numberOfOffers}/>;
}

export default App;
