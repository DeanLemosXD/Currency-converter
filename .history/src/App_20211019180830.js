import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    </div>
  );
}

export default App;
