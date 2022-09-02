import logo from './logo.svg';
import './App.css';
import {

  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Header/Header';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import RequireAuth from './Hooks/RequireAuth';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
        <Route  path='/products/:id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
