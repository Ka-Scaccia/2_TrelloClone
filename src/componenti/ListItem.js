import "../CSS/listItem.css";
import { useEffect, useRef, useState } from "react";
import { Overlay } from "./Overlay";
import { CardItem } from "./CardItem";

export const ListItem = ({ name }) => {
  // gestione visibilità testo: "+ Aggiungi una scheda"
  // aggiunta di una nuova card
  const [isClickedCard, setIsClickedCard] = useState(false);
  const [newCard, setNewCard] = useState(false);
  const [isClickedBtn, setIsClickedBtn] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [isVisibleBtnCard, setIsVisibleBtnCard] = useState(true);

  const cardClicked = () => {
    setIsClickedCard(true);
    setNewCard(true);
    setIsVisibleBtnCard(true);
  };

  // gestione focus input per aggiungere nuova card
  const inputRef = useRef(null);
  useEffect(() => {
    if (newCard && isVisibleBtnCard && inputRef.current) {
      inputRef.current.focus();
    }
  }, [newCard, isVisibleBtnCard]);

  // gestione testo scritto nell'input nuova card
  const [textNewCard, setTextNewCard] = useState("");

  // gestione chiusura contenitoreAggiungiNuovaSchedaAFTER
  // tramite overlay e icona "X"
  const closeCardInput = () => {
    if (cardList.length > 0) {
      return;
    }

    setIsClickedCard(false);
    setNewCard(false);
    setIsVisibleBtnCard(false);
    setTextNewCard("");
  };

  const handleOverlayClick = () => {
    if (cardList.length > 0) {
      return;
    }

    closeCardInput();
  };

  // gestione click sul btn "Aggiungi scheda"
  // creazione array per le cards
  // visualizzazione btn "Aggiungi scheda"
  const btnClicked = () => {
    if (textNewCard.trim() === "") {
      alert("Scrivere qualcosa!");
      return;
    }

    setIsClickedBtn(true);
    setCardList((prev) => [...prev, textNewCard]);
    setTextNewCard("");
    setIsClickedCard(false);
    setNewCard(true);
    setIsVisibleBtnCard(false);
  };

  // gestione scroll in fondo al contenitore delle schede automatico
  // la funzione verrà attivata ogni volta che l'array cardList cambia
  const cardsEndRef = useRef(null);
  const scrollToBottom = () => {
    cardsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [cardList]);

  return (
    <>
      <Overlay isVisible={newCard} onClose={handleOverlayClick} />
      <div className="nuovaLista">
        <h3 className="titoloLista">{name}</h3>
        {/* se l'array delle card ha lunghezza > 0
            renderizza */}
        <div className="cards">
          {cardList.length > 0 &&
            cardList.map((nomeCard, index) => (
              <CardItem key={index} text={nomeCard} />
            ))}
          {/* scroll forzato verso il basso */}
          <div ref={cardsEndRef}></div>
        </div>
        {/* PRIMA di cliccare "Aggiungi una scheda" */}
        <div
          onClick={cardClicked}
          className={`contenitoreAggiungiNuovaSchedaBEFORE flex cursorPOINTER ${isClickedCard ? "none" : ""}
          ${!isVisibleBtnCard ? "flex" : ""}`}
        >
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
            className="lucide lucide-plus-icon lucide-plus
            "
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <h4>Aggiungi una scheda</h4>
        </div>
        {/* DOPO aver cliccato aggiungi una scheda */}
        <div
          className={`aggiungiNuovaSchedaAFTER cursorPOINTER ${newCard ? "flex" : ""}
          `}
        >
          <div className={`${!isVisibleBtnCard ? "none" : ""}`}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Scrivi qualcosa"
              value={textNewCard}
              onChange={(e) => setTextNewCard(e.target.value)}
            />
            <div className="cardBottom flex">
              <input
                type="submit"
                value="Aggiungi scheda"
                className="cursorPOINTER"
                onClick={btnClicked}
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
                className={`lucide lucide-x-icon lucide-x grey middle cursorPOINTER ${isVisibleBtnCard && cardList.length === 0 ? "" : "none"}`}
                onClick={
                  isVisibleBtnCard && cardList.length === 0
                    ? closeCardInput
                    : undefined
                }
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
