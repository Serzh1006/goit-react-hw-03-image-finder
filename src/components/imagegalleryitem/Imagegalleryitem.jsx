// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformat, alt }) => {
  return (
    <li class="gallery-item">
      <img src={webformat} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
