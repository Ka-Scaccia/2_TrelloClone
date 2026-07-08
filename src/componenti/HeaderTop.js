import "../CSS/header.css";
import "../CSS/utily.css";
import logoTrello from "../assest/icons/logoTrello.svg";

export const HeaderTop = () => {
  return (
    <>
      <div className="headerTop flex">
        <img src={logoTrello} alt="logo Trello" />
        <h1>Clone Trello</h1>
      </div>
    </>
  );
};
