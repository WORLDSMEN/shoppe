import React from 'react'
import { My, Navbar,Link,NavText, Wrapper,ReverseLine,Line, Center, Swip } from './style'
import { useState } from 'react'
import { Outlet,Routes,Route,} from "react-router-dom"
import Swipper from './Swiper/swiperlar'

const Our = () => {

  const [Color, setColor] = useState('dashboard')
  const Api1 = 'http://10.10.7.109:8000/api/post-user_register/'
 
  return (
    <Wrapper>
      <My><h2>My Account</h2></My>
      <Navbar>
        <NavText>
          <Link onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}} to="">Dashboard</Link>
          <Link onClick={()=>setColor('order')} style={{color:Color==='order' ? '#070707' : '#707070'}} to="ikki">Orders</Link>
          <Link onClick={()=>setColor('downloads')} style={{color:Color==='downloads' ? '#070707' : '#707070'}} to="uch">Downloads</Link>
          <Link onClick={()=>setColor('addresses')} style={{color:Color==='addresses' ? '#070707' : '#707070'}} to="tort">Addresses</Link>
          <Link onClick={()=>setColor('account details')} style={{color:Color==='account details' ? '#070707' : '#707070'}} to="besh">Account details</Link>
          <Link onClick={()=>setColor('logout')} style={{color:Color==='logout' ? '#070707' : '#707070'}} to="olti">Logout</Link>
          <Swip>
            <Swipper/>
          </Swip>
        </NavText>
        <Swip>
            <Swipper/>
          </Swip>
        <Line>
          <ReverseLine></ReverseLine>
        </Line>
       </Navbar>
      <Center>
       
        {/* <p>Hello Vitatheme (not Vitatheme? <span>Log out</span>) </p>
        <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>s
        hipping and billing addresses</span>, and edit your <span>password and account details.</span></p> */}

        <Outlet/>
      </Center>
    </Wrapper>
  )
}

export default Our




{/* <h3 onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}}>Dashboard</h3>
<h3 onClick={()=>setColor('orders')} style={{color:Color==='orders' ? '#070707' : '#707070'}}>Orders</h3>
<h3 onClick={()=>setColor('downloads')} style={{color:Color==='downloads' ? '#070707' : '#707070'}}>Downloads</h3>
<h3 onClick={()=>setColor('addresses')} style={{color:Color==='addresses' ? '#070707' : '#707070'}}>Addresses</h3>
<h3 onClick={()=>setColor('account details')} style={{color:Color==='account details' ? '#070707' : '#707070'}}>Account details</h3>
<h3 onClick={()=>setColor('logout')} style={{color:Color==='logout' ? '#070707' : '#707070'}}>Logout</h3> */}


{/* <button onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}}>Dashboard</button>
          <button onClick={()=>setColor('orders')} style={{color:Color==='orders' ? '#070707' : '#707070'}}>Orders</button>
          <button onClick={()=>setColor('downloads')} style={{color:Color==='downloads' ? '#070707' : '#707070'}}>Downloads</button>
          <button onClick={()=>setColor('addresses')} style={{color:Color==='addresses' ? '#070707' : '#707070'}}>Addresses</button>
          <button onClick={()=>setColor('account details')} style={{color:Color==='account details' ? '#070707' : '#707070'}}>Account details</button>
          <button onClick={()=>setColor('logout')} style={{color:Color==='logout' ? '#070707' : '#707070'}}>Logout</button> */}