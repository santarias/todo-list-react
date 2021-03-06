import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navegacion';

function App() {
  return (
    <div className="App">
      <Navigation titulo="Tareas" />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
