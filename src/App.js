
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="container-fluid justify" style={{top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}>
      <NavBar/>
      <ItemListContainer greeting="Aqui iran Dino Items"/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
