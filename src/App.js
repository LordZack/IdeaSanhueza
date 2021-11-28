
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid" style={{top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}>
      <NavBar />
      <Landing />
      <Footer/>
    </div>
  );
}

export default App;
