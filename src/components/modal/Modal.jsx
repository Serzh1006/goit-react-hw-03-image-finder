import React, { Component } from 'react';
import css from './modal.module.css';

class Modal extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  clickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.clickOnBackdrop}>
        <div className={css.modal}>
          <img src={this.props.url} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
