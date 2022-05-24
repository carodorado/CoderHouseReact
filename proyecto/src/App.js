import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path ="/" element={ <ItemListContainer/> }/>
          <Route path ="/categoria/:categoryId" element={ <ItemListContainer/> }/>
          <Route path ="/detalle/:id" element={ <ItemDetailContainer/> }/>
          <Route path ="/cart" element={ <Cart/> }/>
          <Route path ="/*" element={ <Navigate to="/" replace/> }/>
       </Routes>
      </div>   
    </BrowserRouter>
  ); 
}

export default App;
