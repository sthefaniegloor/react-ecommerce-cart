import './App.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Home/>
    </div>
  );
}

export default App;
