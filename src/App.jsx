import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { withLogging } from './HOC/withLogging.jsx';
import ItemListContainer from './components/ItemListContainer'; // Corrección aquí

const ItemListContainerWithLogging = withLogging(ItemListContainer); // Corrección aquí
console.log("App renderizada");

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar /> {/* Encabezado */}
        <main>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ItemListContainerWithLogging 
          renderButton={(handleClick) => <button onClick={handleClick}>Click!</button>}
        />
        <Footer /> {/* Pie de página */}
      </div>
    </Router>
  );
}

export default App;


