import "../CSS/listItem.css";

export const ListItem = ({ nameList }) => {
  return (
    <>
      <div className="nuovaLista">
        <h3 className="titoloLista">{nameList}</h3>
        <div
          className="contenitoreAggiungiNuovaScheda flex
        cursorPOINTER"
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
          <h4>Aggiungi nuova scheda</h4>
        </div>
      </div>
    </>
  );
};
