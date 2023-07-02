import React, { Component } from 'react';

import Button from './button/Button';
import ImageGallery from './imagegallery/Imagegallery';
import ImageGalleryItem from './imagegalleryitem/Imagegalleryitem';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import Searchbar from './searchbar/Searchbar';

export class App extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal></Modal>
      </div>
    );
  }
}
