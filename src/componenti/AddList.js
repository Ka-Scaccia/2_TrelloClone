import { useEffect, useRef, useState } from "react";
import { X, Plus } from "lucide-react";
import "../CSS/addList.css";
import { ListItem } from "./ListItem";
import { Overlay } from "./Overlay";

export const AddList = ({ addList, setAddList }) => {
  // APERTURA contenuto per creare nuova lista
  const handleOpenListCreator = () => {
    setAddList(true);
  };

  // CHIUSURA contenuto per chiudere la creazione di una
  // nuova lista
  const handleCloseListCreator = () => {
    setAddList(false);
  };

  // AUTOFOCUS INPUT quando si vuole creare una nuova lista
  const inputRef = useRef(null);
  useEffect(() => {
    if (addList && inputRef.current) {
      inputRef.current.focus();
    }
  }, [addList]);

  // nome lista, array liste, id progressivo lista
  const [newListName, setNewListName] = useState("");
  const [listNames, setListNames] = useState([]);
  const [nextListId, setNextListId] = useState(1);

  // CONTROLLO CONTENUTO INPUT nuova lista
  const handleAddList = () => {
    const trimmedName = newListName.trim();

    if (trimmedName === "") {
      alert("Scrivere il nome della lista!");
      setNewListName("");
      return;
    }

    // se c'è contenuto si salva la nuova lista nell'array
    // si incrementa l'id progressivo
    // si resetta contenuto input
    // si chiude il contenuto per creare nuova lista
    setListNames((prev) => [...prev, { id: nextListId, name: trimmedName }]);
    setNextListId((prev) => prev + 1);
    setNewListName("");
    setAddList(false);
  };
  return (
    <>
      <div className="liste flex">
        {/* OVERLAY */}
        {/* se addList(true) mostra l'overlay altrimenti no */}
        {/* se si clicca sull'overlay addList(false) */}
        <Overlay isVisible={addList} onClose={handleCloseListCreator} />
        {/* LISTITEM*/}
        {/* se l'array ha almeno un elemento saranno visibili */}
        {listNames.length > 0 && (
          <div className="flex">
            <div className="listeCreate flex">
              {listNames.map((lista) => (
                <ListItem key={lista.id} name={lista.name} />
              ))}
            </div>
          </div>
        )}
        {/* contenitore per inserire il nome di nuova lista */}
        {/* visibile se addList(true) */}
        <div className={`aggiungiListaAFTER ${addList ? "flex" : ""}`}>
          <input
            type="text"
            placeholder="Inserisci il nome della lista..."
            className={`addListText ${addList ? "attivo" : ""}`}
            ref={inputRef}
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
          />
          <div className="listActions flex">
            <input
              type="submit"
              value="Aggiungi lista"
              className="addListBtn middle cursorPOINTER"
              onClick={handleAddList}
            />
            <X
              size={24}
              className="grey middle cursorPOINTER"
              onClick={handleCloseListCreator}
            />
          </div>
        </div>

        {/* contenitore per inserire una nuova lista con 0 liste create */}
        {/* visibile se l'array delle lista ha lenght === 0 */}
        {listNames.length === 0 && (
          <div
            className={`aggiungiListaBEFORE ${addList ? "none" : "visible"}`}
          >
            <div className="liste_box flex" onClick={handleOpenListCreator}>
              <Plus size={24} />
              <h3>Aggiungi una lista</h3>
            </div>
          </div>
        )}
        {/* contenitore per aggiungere un altra lista */}
        {/* è visibile se l'array delle liste ha almeno un elemento */}
        {listNames.length > 0 && (
          <div className="aggiungiAltraLista">
            <div className="liste_box flex" onClick={handleOpenListCreator}>
              <Plus size={24} />
              <h3>Aggiungi un'altra lista</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
