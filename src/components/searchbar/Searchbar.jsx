// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GrFormSearch } from 'react-icons/gr';
import css from './searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.searchValue === '') {
      alert('Ваша строка пустая. Введите текст');
      return;
    }
    this.props.onSubmit(this.state.searchValue.trim());
    this.setState({ searchValue: '' });
  };

  getValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.onSubmitForm} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <GrFormSearch className={css.reactIcons} />
          </button>

          <input
            name="searchValue"
            value={searchValue}
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.getValue}
          />
        </form>
      </header>
    );
  }
}
