type ImageWrapperProps = {
  src: string,
}

function ImageWrapper({src}: ImageWrapperProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="Photo studio" />
    </div>
  );
}

export default ImageWrapper;
