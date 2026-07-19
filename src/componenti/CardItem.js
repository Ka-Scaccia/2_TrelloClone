import "../CSS/cardItem.css";
import { useState } from "react";
import { Circle, CircleCheckBig, Trash } from "lucide";

export const CardItem = ({ text, state, onDelete, onToggle }) => {
  // gestione check e uncheck
  const [isChecked, setIsChecked] = useState(state);
  const getCheck = () => {
    setIsChecked(!isChecked);
  };
  // gestione delete
  const [isDelete, setIsDelete] = useState();
  const getDelete = () => {
    setIsDelete(true);
  };
  return (
    <>
      <div className="card flex">
        <div className="card_left flex">
          {/* se isChecked(true) mostra l'icona con la spunta
          ; se isChecked(false) mostra l'icona senza spunta */}
          {/* ICONA NO CHECKED */}
          <Circle
            size={24}
            className={`cursorPOINTER iconNoChecked ${state ? "none" : "flex"}`}
            onClick={onToggle}
          />
          {/* ICONA CHECKED */}
          <CircleCheckBig
            size={24}
            className={`cursorPOINTER iconChecked ${!state ? "none" : "flex"}`}
            onClick={onToggle}
          />
          <h3 className={`textCard ${state ? "taskDone" : ""}`}>{text}</h3>
        </div>
        <div className="card_right">
          <Trash
            size={24}
            className="cursorPOINTER iconDelete"
            onClick={onDelete}
          />
        </div>
      </div>
    </>
  );
};
