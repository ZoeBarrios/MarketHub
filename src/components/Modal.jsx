import { createPortal } from "react-dom";
import "/public/css/modal.css";
const Modal = ({ children }) => {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-container">{children}</div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
