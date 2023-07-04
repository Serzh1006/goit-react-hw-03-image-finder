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
    const { query, page } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoading: true });
        const response = await fetchData(query, page);
        const { totalHits, hits } = response.data;
        if (query !== prevState.query) {
          this.setState({ total: totalHits, posts: hits });
        } else {
          this.setState({ posts: [...prevState.posts, ...hits] });
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  clickMouse = (largeFormat, alt) => {
    this.setState({ url: largeFormat, tags: alt });
    this.openModal();
  };

  fetchToServer = searchValue => {
    this.setState({ query: searchValue, page: 1 });
  };

  loadMoreImg = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = () => {
    console.log('open');
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    console.log('close');
    this.setState({ isOpen: false });
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
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
        {isOpen && <Modal url={this.state.url} tags={this.state.tags} />}
      </div>
    );
  }
}
