import "./App.css";
import "./CSS/generalEroot.css";
import { HeaderTop } from "./componenti/HeaderTop.js";
import { HeaderBottom } from "./componenti/HeaderBottom.js";

function App() {
  return (
    <div className="App container">
      {/* Scheda */}
      <div className="scheda">
        {/* Header */}
        <HeaderTop />
        <HeaderBottom />
      </div>
    </div>
  );
}

export default App;
