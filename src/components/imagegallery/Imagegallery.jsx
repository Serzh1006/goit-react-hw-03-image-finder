// import PropTypes from 'prop-types';
import ImageGalleryItem from '../imagegalleryitem/Imagegalleryitem';

const ImageGallery = ({ dataPosts }) => {
  return (
    <ul class="gallery">
      {dataPosts.map(post => {
        return (
          <ImageGalleryItem
            key={post.id}
            webformat={post.webformatURL}
            alt={post.tags}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
