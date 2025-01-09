import { createPortal } from "react-dom";

export default function Modal({ onClose }) {
  return createPortal(
    <div className="modal">
      <p>This is a modal.</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.body,
  );
}