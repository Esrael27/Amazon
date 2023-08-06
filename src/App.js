import React, { useEffect } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Components/CheckOut/Checkout'
import LogIn from './Components/Login/LogIn'
import { useStateValue } from './Components/StateProvider/StateProvider'
import {auth} from './Components/Login/firebase'

import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Payment from './Components/Payment/Payment'
import Orders from './Components/Orders/Oreder'


const promise = loadStripe(
  'pk_test_51NaC82LjTPTp4dPLDtsCXef3Y5jkQlBmUW4a9q0pI64U4kaZVWNjs34ipfFIzms0NL9qcZDXtMj3lM9MflHeTqGu004gtZCr8D'
)
console.log(promise)



function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
     
    <Routes>
      <Route path='/Checkout' element={<><Header /> <Checkout /></>} />
      <Route path='/orders' element={<><Header /> <Orders /></>} />
      <Route path='/' element={<><Header /> <Home /></>} />
      <Route path='/Login' element={<><Header /> <LogIn /></>} />
      <Route path='/payment'
       element={
      <>
      <Header />
       <Elements stripe={promise}>
      <Payment /> 
      </Elements> 
     
     
       
    
      
      </>} />
    </Routes>
    
   
    </>
    
  )
}

export default App