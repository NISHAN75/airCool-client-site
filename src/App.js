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
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Pages/Dashborad/Dashborad';
import Profile from './Components/Pages/Dashborad/Profile';
import AddReview from './Components/Pages/NormalUser/AddReview/AddReview';
import AddProduct from './Components/Pages/Admin/AddProduct/AddProduct';
import AllProducts from './Components/Pages/Admin/AllProducts/AllProducts';
import AllOrders from './Components/Pages/Admin/AllOrders/AllOrders';
import MyOrders from './Components/Pages/NormalUser/MyOrders/MyOrders';
import Users from './Components/Pages/Admin/Users/Users';
import Payment from './Components/Pages/NormalUser/Payment/Payment';




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route  path='/products/:id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route  path='/dashborad' element={<Dashboard/>}>
          <Route index element={<Profile/>}></Route>
          <Route path="review"  element={<AddReview/>}></Route>
          <Route path="addProduct"  element={<AddProduct/>}></Route>
          <Route path="allProducts"  element={<AllProducts/>}></Route>
          <Route path="allOrder"  element={<AllOrders/>}></Route>
          <Route path="users"  element={<Users/>}></Route>
          <Route path="myOrders"  element={<MyOrders/>}></Route>
          <Route path="payment/:id"  element={<Payment/>}></Route>
          
        </Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/register' element={<Register/>}></Route>
      </Routes>
      < ToastContainer/>
    </div>
  );
}

export default App;
