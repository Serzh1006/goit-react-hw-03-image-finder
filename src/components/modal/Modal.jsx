import css from './modal.module.css';

const Modal = ({ url, tags }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={url} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
