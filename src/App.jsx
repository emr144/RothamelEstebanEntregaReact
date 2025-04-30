import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/styles/App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { withLogging } from "./HOC/withLogging.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ProductDetail from "./components/ProductDetail"; 



const ItemListContainerWithLogging = withLogging(ItemListContainer);
console.log("App renderizada");

function App() {
  return (
    <BrowserRouter> {/* Envolvemos la aplicación con Router para habilitar el enrutamiento */}  
      <div className="app">
        <Navbar /> {/* Encabezado */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />

          </Routes>
        </main>
        {/* 
        <ItemListContainerWithLogging 
          renderButton={(handleClick) => <button onClick={handleClick}>Click!</button>}
        />
        */}
        <Footer /> {/* Pie de página */}
      </div>
    </BrowserRouter>
  );
}

export default App;


