import React, { Component } from 'react';

import Button from './button/Button';
import ImageGallery from './imagegallery/Imagegallery';
import ImageGalleryItem from './imagegalleryitem/Imagegalleryitem';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import Searchbar from './searchbar/Searchbar';

export class App extends Component {
  state = {};

  fentchToServer(searchValue) {
    console.log(searchValue);
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.fentchToServer} />
        {/* <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal /> */}
      </div>
    );
  }
}
