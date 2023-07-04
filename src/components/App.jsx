import React, { Component } from 'react';

import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/Imagegallery';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import { fetchData } from 'services/api';
import css from './app.module.css';

export class App extends Component {
  state = {
    posts: [],
    isLoading: false,
    total: 0,
    page: 1,
    query: '',
    isOpen: false,
    url: '',
    tags: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, posts } = this.state;

    try {
      this.setState({ isLoading: true });
      const response = await fetchData(query, page);
      const { totalHits, hits } = response.data;
      if (query !== prevState.query || posts.length === 0) {
        return this.setState({ total: totalHits, posts: hits });
      } else if (page !== prevState.page) {
        return this.setState({ posts: [...prevState.posts, ...hits] });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  clickMouse = (largeFormat, alt) => {
    this.setState({ url: largeFormat, tags: alt });
    this.openModal();
  };

  fetchToServer = searchValue => {
    this.setState({ query: searchValue, page: 1, posts: [] });
  };

  loadMoreImg = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { posts, isLoading, total, isOpen } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.fetchToServer} />
        {posts.length > 0 && (
          <ImageGallery dataPosts={posts} mouse={this.clickMouse} />
        )}
        {isLoading && <Loader />}
        {posts.length < total && <Button moreImg={this.loadMoreImg} />}
        {isOpen && (
          <Modal
            onClose={this.closeModal}
            url={this.state.url}
            tags={this.state.tags}
            isOpen={isOpen}
          />
        )}
      </div>
    );
  }
}
