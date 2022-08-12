import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from "./views/Navbar/Navbar"
import Footer from "./views/Footer/Footer"
import Homepage from './pages/Homepage/Homepage'
import Shop from './components/Shop/Shop'
import Blog from './components/Blog/Blog'
import OurStory from './components/OurStrory/Dashboarr/Our'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import BlogSingle from './components/Blog/BlogSingle/BlogSingle'
import Orders from './components/OurStrory/Orders/Orders';
import Downloads from './components/OurStrory/Downloads/Downloads';
import Address from "./components/OurStrory/Address/Adres"
import Accaunt from './components/OurStrory/Account/Accaunt';
import Log from './components/OurStrory/Log/Log';
import Dashboard from './components/OurStrory/Dashboard/Dashboard'
import Order1 from './components/OurStrory/Order1/Order1'
import OrgOurStory from './components/OrgOurStory/OrgOurStory'

import Error from './views/Error/Error'
//
import Product from './components/Product/Product'


const App = () =>{
  return(
    <div className='App'>
      <React.Fragment>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop:id' element={<Shop/>}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/ourstory' element={<OurStory />}>
            <Route path='' index element={<Dashboard/>}/>
            <Route path='ikki' element={<Orders/>}/>
            <Route path='uch' element={<Downloads/>}/>
            <Route path='tort' element={<Address/>}/>
            <Route path='besh' element={<Accaunt/>}/>
            <Route path='olti' element={<Order1/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          {/* <Route path='/checkout' element={<Checkout/>} /> */}
          <Route path='/blogsingle' element={<BlogSingle/>} />
          <Route path='/orgourstory' element={<OrgOurStory />} />

          <Route path='/product'element={<Product/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
        <Footer/>
      </React.Fragment>
    </div>
  )
}

export default App
