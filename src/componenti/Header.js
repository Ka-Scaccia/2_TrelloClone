import "../CSS/header.css";
import "../CSS/utily.css";
import iconaTrello from "../assest/icons/iconaTrello.svg";

export const Header = () => {
  return (
    <>
      <header className="flex">
        <img src={iconaTrello} alt="icona Trello" />
        <h3>Clone Trello</h3>
      </header>
    </>
  );
};
