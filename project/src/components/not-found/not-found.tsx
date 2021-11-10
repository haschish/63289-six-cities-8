const styles = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

function NotFound(): JSX.Element {
  return (
    <div style={styles}>
      <strong>404 Not Found</strong>
    </div>
  );
}

export default NotFound;
