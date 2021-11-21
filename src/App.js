import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor:'red'}} className="App">
      <header className="App-header">
        <h1>Dino Tienda</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Todo lo que necesitas para tu Dino vida</p>
      </header>
    </div>
  );
}

export default App;
