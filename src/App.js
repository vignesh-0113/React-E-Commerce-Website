import './App.css';
import { Navbar } from './components/Navbar';
import { Counter } from './components/Counter';
import { Products } from './components/Products';
import { BrowserRouter , Routes , Route, HashRouter} from 'react-router-dom';
import { Home } from './components/Home';
import { Product} from './components/Product';
import { Login } from './components/Login';
import { AuthProvider } from './auth/Authenticate';
import { Cart } from './components/Cart';

function App() {
  return (
    <>
    <HashRouter>
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path='//'  element = {<Home/>}/>
        <Route path='home'  element = {<Home/>}/>
        <Route path='products' element = { <Products/>}/>
        <Route path="product/:id" element = { <Product/>}/>
        <Route path='counter' element = { <Counter/>}/>
        <Route path='login' element ={ <Login/>} />
        <Route path='cart' element ={ <Cart/>}/>
      </Routes>
    </AuthProvider>
    </HashRouter>
      
    </>

  );
}

export default App;
