import logo from './logo.svg';
import './App.css';
import {

  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
