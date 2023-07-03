import css from './modal.module.css';

const Modal = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h1>modal</h1>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
