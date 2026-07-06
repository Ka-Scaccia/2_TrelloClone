import "../CSS/overlay.css";

export const Overlay = ({ isVisible, onClose }) => {
  return (
    <>
      <div
        className={`overlay ${isVisible ? "" : "none"}`}
        onClick={onClose}
      ></div>
    </>
  );
};
