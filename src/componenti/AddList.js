import { useEffect, useRef, useState } from "react";
import "../CSS/addList.css";

export const AddList = ({ addList, setAddList }) => {
  /* gestione: AGGIUNGI UNA LISTA, imposto setAddList "true" così
  apparirà contenitoreAggiungiListaAFTER */
  const newList = () => {
    setAddList((prev) => !prev);
  };

  // gestione: INPUT AGGIUNGA UNA LISTA FOCUS
  const inputRef = useRef(null);
  useEffect(() => {
    if (addList && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.classList.add("attivo");
    }
  }, [addList]);

  // gestione: CHIUSURA CONTENITOREADDLISTAFTER, imposto setAddList "false"
  // facendo riapparire così contenitoreAggiungiListaBEFORE
  const [close, setClose] = useState(false);
  const closeContainer = () => {
    setAddList((prev) => !prev);
  };

  // gestione: chiusura contenitoreAggiungiListaAFTER tramite overlay
  const closeOverlay = () => {
    setAddList((prev) => !prev);
  };

  return (
    <>
      {/* se addList è mostra l'overlay altrimenti no */}
      {/* se si clicca sull'overlay addList diventa false */}
      <div
        className={`overlay ${addList ? "" : "none"}`}
        onClick={closeOverlay}
      ></div>
      {/* se addList true --> appare contenitoreAggiungiListaAFTER
    altrimenti se false --> appare contenitoreAggiungiListaBEFORE */}
      <div
        className={addList ? "none" : "visible"}
        id="contenitoreAggiungiListaBEFORE"
      >
        <div className="liste_box flex" onClick={newList}>
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
            className="lucide lucide-plus-icon lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <h3>Aggiungi una lista</h3>
        </div>
      </div>
      <div
        className={`contenitoreAggiungiListaAFTER ${addList ? "flex" : ""} ${close ? "closeContainer" : ""}`}
      >
        <input
          type="text"
          placeholder="Inserisci il nome della lista..."
          className="addListText"
          ref={inputRef}
        />
        <div className="flex">
          <input
            type="submit"
            value="Aggiungi lista"
            className="addListBtn middle cursorPOINTER"
          />
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
            className="lucide lucide-x-icon lucide-x
            grey middle cursorPOINTER"
            onClick={closeContainer}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      </div>
    </>
  );
};
