import './style/App.css';
import { Rotas } from "./Routes";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Rotas />
    </div>
    </Router>
  );
}

export default App;
