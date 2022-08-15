import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Detail from './pages/Detail';
import Store from './pages/Store';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Store/>}/>
        <Route path="/item/:productId" element={<Detail/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
