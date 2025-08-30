import './Modal.css';

const Modal = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
