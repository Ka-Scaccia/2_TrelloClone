import "../CSS/overlay.css";

export const Overlay = ({ addList, closeOverlay }) => {
  return (
    <>
      <div
        className={`overlay ${addList ? "" : "none"}`}
        onClick={closeOverlay}
      ></div>
    </>
  );
};
