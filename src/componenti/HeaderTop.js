import "../CSS/header.css";
import "../CSS/utily.css";
import iconaTrello from "../assest/icons/iconaTrello.svg";

export const HeaderTop = () => {
  return (
    <>
      <div className="headerTop flex">
        <img src={iconaTrello} alt="icona Trello" />
        <h1>Clone Trello</h1>
      </div>
    </>
  );
};
