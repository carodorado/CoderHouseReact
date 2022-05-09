import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemCard from './components/ItemCard/ItemCard.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Soy un mensaje"/>
      <div className="CardContainer">
        <ItemCard/>
      </div>
    </div>
  );
}

export default App;
