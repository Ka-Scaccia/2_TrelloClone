import "./App.css";
import "./CSS/generalEroot.css";
import { HeaderTop } from "./componenti/HeaderTop.js";
import { HeaderBottom } from "./componenti/HeaderBottom.js";
import { AddList } from "./componenti/AddList.js";

function App() {
  return (
    <div className="App container">
      {/* Scheda */}
      <div className="scheda">
        {/* Header */}
        <HeaderTop />
        <HeaderBottom />
        <div className="liste">
         <AddList />
        </div>
      </div>
    </div>
  );
}

export default App;
