const styles = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

function LoadingScreen(): JSX.Element {
  return (
    <div style={styles}>
      <strong>Loading ...</strong>
    </div>
  );
}

export default LoadingScreen;
