import { useEffect, useRef, useState, useLayoutEffect } from "react";
import "../CSS/addList.css";
import { ListItem } from "./ListItem";

export const AddList = ({ addList, setAddList }) => {
  /* gestione: AGGIUNGI UNA LISTA, imposto setAddList "true" così
  apparirà contenitoreAggiungiListaAFTER */
  const newListContainer = () => {
    setAddList(true);
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
    setAddList(false);
  };

  // gestione: CHIUSURA contenitoreAggiungiListaAFTER tramite overlay
  const closeOverlay = () => {
    setAddList(false);
  };

  // gestione NOME NUOVA LISTA
  /* 
  catturo il testo del nome della nuova lista dall'input, se questo testo
  esiste creo un nuovo componente passandogli il nome della lista
  */
  const [textNewList, setTextNewList] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // gestione CONTENITORI
  /*
  creo un array per memorizzare i nomi delle liste
  e implemento una funzione per le nuove liste aggiunte
  che:
  -imposta setIsSubmit a true
  -aggiunge setTextNewList all'array nameList
  */
  const [nameList, setNameList] = useState([]);
  const newList = () => {
    setIsSubmit((prev) => !prev);
    setNameList((prev) => [...prev, textNewList]);
  };
  useLayoutEffect(() => {
    if (nameList.length > 0) {
      setAddList(false);
    }
  }, [nameList]);
  return (
    <>
      {/* liste create dall'utente: overlay, listeItem, 
        contenitoreAggiungiAltraLista
        SONO VISIBILI SE L'UTENTE CREA UNA LISTA */}
      {isSubmit && textNewList.length > 0 && (
        <div className="flex">
          <div
            className={`overlay ${addList ? "" : "none"}`}
            onClick={closeOverlay}
          ></div>
          <ListItem nameList={textNewList} />
          <div className="contenitoreAggiungiAltraLista">
            <div className="liste_box flex" onClick={newListContainer}>
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
              <h3>Aggiungi un'altra lista</h3>
            </div>
          </div>
        </div>
      )}
      {/* se addList è mostra l'overlay altrimenti no */}
      {/* se si clicca sull'overlay addList diventa false */}
      <div
        className={`overlay ${addList ? "" : "none"}`}
        onClick={closeOverlay}
      ></div>
      {/* contenitore per inserire una nuova lista con 0 liste create
        E' VISIBILE SE L'ARRAY DELLE NUOVE LISTE HA LENGHT=0 */}
      {nameList.length === 0 && (
        <div
          className={addList ? "none" : "visible"}
          id="contenitoreAggiungiListaBEFORE"
        >
          <div className="liste_box flex" onClick={newListContainer}>
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
      )}
      {/* contenitore per inserire il nome di nuova lista 
        E' VISIBILE SE ...... */}
      <div
        className={`contenitoreAggiungiListaAFTER ${addList ? "flex" : ""} ${close ? "closeContainer" : ""}`}
      >
        <input
          type="text"
          placeholder="Inserisci il nome della lista..."
          className="addListText"
          ref={inputRef}
          onChange={(e) => setTextNewList(e.target.value)}
        />
        <div className="flex">
          <input
            type="submit"
            value="Aggiungi lista"
            className="addListBtn middle cursorPOINTER"
            onClick={newList}
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
