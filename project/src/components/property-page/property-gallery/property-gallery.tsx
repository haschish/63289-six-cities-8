import ImageWrapper from './image-wrapper';

type PropertyGalleryProps = {
  images: string[],
}

function PropertyGallery({images}: PropertyGalleryProps): JSX.Element {
  return (
    <div className="property__gallery">
      {images.map((it) => <ImageWrapper key={it} src={it}/>)}
    </div>
  );
}

export default PropertyGallery;
