import "../CSS/listItem.css";
import { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide";
import { Overlay } from "./Overlay";
import { CardItem } from "./CardItem";

export const ListItem = ({ name }) => {
  /* variabile useState per uso globale file ; testo nuova scheda
  ; array nomi schede ; input focus ; scroll forzato bottom */
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [textNewCard, setTextNewCard] = useState("");
  const [cardList, setCardList] = useState([]);
  const inputRef = useRef(null);
  const cardsEndRef = useRef(null);

  const openComposer = () => setIsComposerOpen(true);
  const closeComposer = () => {
    setTextNewCard("");
    setIsComposerOpen(false);
  };

  // funzione: aggiungi nuova scheda
  const addCard = () => {
    const trimmedText = textNewCard.trim();

    if (!trimmedText) {
      alert("Scrivere qualcosa!");
      return;
    }

    const id = Date.now().toString();
    setCardList((prev) => [...prev, { id, text: trimmedText, check: false }]);
    setTextNewCard("");
    setIsComposerOpen(false);
  };

  // controllo visibilità overlay
  const handleOverlayClick = () => {
    if (cardList.length > 0) {
      return;
    }

    closeComposer();
  };

  // input focus
  useEffect(() => {
    if (isComposerOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isComposerOpen]);

  // scroll forzato bottom
  useEffect(() => {
    cardsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cardList]);

  // eliminazione scheda
  const deleteCard = (id) => {
    setCardList((prev) => prev.filter((card) => card.id !== id));
  };

  // gestione check
  const toggleCard = (id) => {
    setCardList((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, check: !card.check } : card,
      ),
    );
  };

  return (
    <>
      <Overlay isVisible={isComposerOpen} onClose={handleOverlayClick} />
      {/* lista */}
      <div className="lista">
        <h3 className="lista_titolo">{name}</h3>
        {/* elenco schede */}
        <div className="cards">
          {Object.keys(cardList).length > 0 &&
            Object.entries(cardList).map(([id, card]) => (
              <CardItem
                key={card.id}
                text={card.text}
                state={card.check}
                onDelete={() => deleteCard(card.id)}
                onToggle={() => toggleCard(card.id)}
              />
            ))}
          <div ref={cardsEndRef}></div>
        </div>
        {/* se isComposerOpen(false) mostra la schermata di default
        per aggiungere una scheda */}
        {!isComposerOpen && (
          <div
            onClick={openComposer}
            className="aggiungiNuovaSchedaBEFORE flex cursorPOINTER"
          >
            <Plus size={24} />
            <h4>Aggiungi una scheda</h4>
          </div>
        )}
        {/* se isComposerOpen(true) mostra la schermata per inserire il
        nome di una nuova scheda */}
        {isComposerOpen && (
          <div className="aggiungiNuovaSchedaAFTER flex cursorPOINTER">
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
                onClick={addCard}
              />
              {cardList.length === 0 && (
                <X
                  size={24}
                  className="grey middle cursorPOINTER"
                  onClick={closeComposer}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
