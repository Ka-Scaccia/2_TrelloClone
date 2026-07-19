import { useState } from "react";
import "./App.css";
import "./CSS/generalEroot.css";
import { HeaderTop } from "./componenti/HeaderTop.js";
import { HeaderBottom } from "./componenti/HeaderBottom.js";
import { AddList } from "./componenti/AddList.js";

function App() {
  // gestione: AGGIUNGI UNA LISTA
  const [ addList, setAddList ] = useState(false);
  return (
    <div className="App container">
      {/* Scheda */}
      <div className="scheda">
        {/* Header */}
        <HeaderTop />
        <HeaderBottom />
        <div className="liste">
         <AddList
         addList={addList}
         setAddList={setAddList} />
        </div>
        <p className="footer">Ho creato questa versione online di Trello per mettermi alla prova con React, ottimizzare il caricamento delle risorse e fare pratica con la gestione dello stato.</p>
      </div>
    </div>
  );
}

export default App;
