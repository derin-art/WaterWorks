import logo from './logo.svg';
import "./maybe.css"
import Header from './waterworks/header';
import MainPage from './waterworks/mainpage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './waterworks/products';
import Contact from './waterworks/contact';









function App() {
 return <BrowserRouter>
 <Routes>
   <Route exact path='/' element={<div className='max-w-screen'>
      <Header></Header>
      <div className='mt-2'>
      <MainPage></MainPage>
      </div>
    </div>}>
  </Route>

  <Route exact path='/products' element={
    <div className='max-w-screen'>
    <Header></Header>
    <div className='mt-2'>
    <Products></Products>
    </div>
  </div>
 }>

  </Route>

  <Route exact path='/contact' element={
    <div className='max-w-screen'>
    <Header></Header>
    <div className='mt-2'>
      <Contact></Contact>
    </div>
  </div>
 }>

  </Route>
 </Routes>
 
 </BrowserRouter>

}

export default App;
