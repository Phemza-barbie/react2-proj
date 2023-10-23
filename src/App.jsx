import Login from './components/About/LogjnSigup/Login'
import './App.css'
import {useEffect, useState} from 'react'
import Register from './components/About/LogjnSigup/Register'
import Navigation from './components/Navigation/Navigation';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/home/Homepage';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const[user, setUser] = useState("user")

  const handleLogout =() => {
    setIsLogin(false);
    setUser("user");
  }

  //useEffect
  useEffect(() => {
    console.log("useEffect is called")
  }, [])
  
  return (
    <>
      <Login/>
      <Register/>
      <Navigation/>
      <Routes>
        <Route path='/' element={ <Homepage />}/>
        <Route path='/' element={ <Products />}/>
        <Route path='/' element={ <Profile />}/>
      </Routes>
    </>
  )
}

export default App
