import "../CSS/cardItem.css";
import { useState } from "react";

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
  }
  return (
    <>
      <div className="card flex">
        <div className="card_left flex">
          {/* se isChecked(true) mostra l'icona con la spunta
          ; se isChecked(false) mostra l'icona senza spunta */}
          {/* ICONA NO CHECKED */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-circle-icon lucide-circle 
            cursorPOINTER iconNoChecked ${state ? "none" : "flex"}`}
            onClick={onToggle}
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          {/* ICONA CHECKED */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-circle-check-icon lucide-circle-check
            cursorPOINTER iconChecked ${!state ? "none" : "flex"}`}
            onClick={onToggle}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <h3 className={`textCard ${state ? "taskDone" : ""}`}>
            {text}
          </h3>
        </div>
        <div className="card_right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash-icon lucide-trash cursorPOINTER
            iconDelete"
            onClick={onDelete}
          >
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </div>
      </div>
    </>
  );
};
