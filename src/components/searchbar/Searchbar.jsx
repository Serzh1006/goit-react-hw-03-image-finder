import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ searchValue: '' });
  };

  getValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <header class="searchbar">
        <form onSubmit={this.onSubmitForm} class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            name="searchValue"
            value={searchValue}
            class="input"
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

export default Searchbar;
