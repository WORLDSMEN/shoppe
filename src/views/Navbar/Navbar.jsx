import React, { useContext, useEffect, useRef, useState } from 'react';
//import style

  // import AnimatedCursor from "react-animated-cursor"
import {Container, Navbar, Navbarleft, H1, Navbarright, DIV,SearchIcon1,  ShoppingCartIcon2, PersonOutlineIcon3, Hr, Link1, Divgamburger, Closebutton,  Navbarleft22, H11, Dinn, Divshop, Link3, Icondiv, FacebookOutlinedIcon1, InstagramIcon1, LinkedInIcon1, TwitterIcon1, Localniset, Hrr, PersonOutlineIcon35, Divgamburger2, Closebutton2, Div, H3, Divp, Divcenter, Divend, DIvh11, Divh21, Divimg, Divimg2,  Divleft,   Divp2, Endbutton,  Numberh1,  Divcart, Carth1, Link123, Cartp, Cartbutton, Burgerhr, NavbarImg, Divinputsearch, SearchTwoToneIcon222, Endcardiv, Line1, Icondiv2, ScrolDiv, DDh1, DIvh14, Divprice, Numberh13, Button13, } from "./StyleNavbar";



  import { ApiData } from '../../pages/Homepage/data/API';

  //import Navbar.css
  import "../Navbar/StyleNavb.css";

  //Axios import
  import axios from "axios"

  import Menu from './photo/Menu 1.png';

  import phone1 from "../Navbar/photo/1.png"
  import phone2 from "../Navbar/photo/02(1).png"
  import phone3 from "../Navbar/photo/02.png"
  import phone4 from "../Navbar/photo/03.png"
  import { ClassNames } from '@emotion/react';

  import { Context } from '../../components/Context/Context';
  import { render } from '@testing-library/react';

  import { Link as About} from 'react-router-dom';
  import { Link as Checkout} from 'react-router-dom';

  // //Api import
  const API = "http://10.10.7.109:8000/api/get-slider/"

  //Api import
  const API2 = "http://10.10.7.109:8000/api/product/latest/"

  const API5 = ApiData

 const Nav = () => {

  console.log("A"==="A");

  const [data, setData] = useState([]);
   useEffect(() => {

    axios.get(API2)
    .then(res =>{
      setData(res.data)
      // console.log('shaxri',res.data);
    })
  }, []);

  console.log([1, 2, 3]);

  // SEARCH USETATE API
  const [data2, setData2] = useState([]);


  useEffect(() => {

    axios.get(API5)
    .then(res =>{
      setData(res.data)
      // console.log('shaxri',res.data);
    })
  }, []);

const {olma ,setOlma} = useContext(Context)

 // End SEARCH API ulash

   {/* START Responsive GAMBURGER */}
     const menu = useRef()
     const [menublack2, setMenublack2] = useState(true)

     const openMenu = ()=>{
      menu.current.style.right = "0"
      setMenublack2(false)
    }
      const closeMenu = ()=>{
       menu.current.style.right = "-100%"
       setMenublack2(true)
    }
    {/* End Responsive GAMBURGER */}


     {/* START SHOPPING GAMBURGER */}
    const menu2 = useRef()

    const [menublack, setMenublack] = useState(true)
    const [orderarr, setorderarr] = useState([])
    const [count, setCount] = useState(0);
    const [render, setrender] = useState(false)


    const openMenu2 = ()=>{
      menu2.current.style.right = "0"
      setMenublack(false)
      let order = JSON.parse(localStorage.getItem("order"))
      setorderarr(order)
    }
    const closeMenu2 = ()=>{
      menu2.current.style.right = "-100%"
      setMenublack(true)
    }
      {/* END SHOPPING GAMBURGER */}

      const Delete = (id) =>{
        orderarr.splice(id,1)
        setrender(!render)
      }

  return (
    <Container>


        <Navbar>
          <Link1 to='/'>
          <Navbarleft>
              <H1><span>S</span>HOPPE</H1>
          </Navbarleft>
          </Link1>
         <Navbarright>
             <DIV className='libottom'>
                <Link1 onClick={closeMenu} to='/shop'
                className=''>Shop</Link1>
                <Link1 onClick={closeMenu} to='/blog' className=''>Blog</Link1>
                <Link1 onClick={closeMenu} to='/orgourstory' className=''>Our Story</Link1>
             </DIV>
              {/* <Line></Line> */}

             <Checkout to={"checkout"}>
                <SearchIcon1></SearchIcon1>
             </Checkout>


   {/* START SHOPPING GAMBURGER */}

        <div onClick={closeMenu2} className={menublack ? "bleck__show" : "bleck__show bleckshow"}></div>
        <Divgamburger2 ref ={menu2} id="mySidenav" className="sidenav">
        <Closebutton2 href="javascript:void(0)" className='closebtn' onClick={closeMenu2}>&times;</Closebutton2>


        <Div>
         <H3>Shopping bag</H3>
         <Divp>5 items</Divp>
       </Div>

         <Burgerhr>
         </Burgerhr>

         <ScrolDiv>
            {
            orderarr ?
              orderarr  && orderarr.map((item,index)=>(
                <Divcenter>
                <Divimg>
                  <Divimg2 src={item.img} alt="" />
                </Divimg>
                <Divleft>
                  <div style={{"display":"flex", "flexDirection":"column"}}>
                    <DIvh11> {item.name} </DIvh11>
                    <DIvh14> {item.color} </DIvh14>
                    <Divh21> {item.size} </Divh21>
                  </div>
                    <Divp2> ${item.price}</Divp2>
                  <Divprice>
                      <Numberh1>QTY</Numberh1>
                      <Button13 onClick={() => setCount(count - 1)} >-</Button13>
                      <Numberh1>{count}</Numberh1>
                      <Button13 onClick={() => setCount(count + 1)} >+</Button13>
                  </Divprice>
                </Divleft>
                <Divend>
                  <Endbutton onClick={()=>Delete(index)}>X</Endbutton>
                </Divend>
              </Divcenter>
                ))
              :
              <DDh1>The product was not <br/> filled in</DDh1>
              }

         </ScrolDiv>

          <Endcardiv>
            <Divcart>

              <Carth1> Subtotal (5 items) </Carth1>
              <Cartp> $ 100,00</Cartp>
            </Divcart>
            <Link123 to='/cart'>
                <Cartbutton>VIEW CART</Cartbutton>
            </Link123>
          </Endcardiv>
        </Divgamburger2>

      <ShoppingCartIcon2 onClick={openMenu2} />
        <About to={"/ourstory"}>
           <PersonOutlineIcon3 />
        </About>

   {/* END SHOPPING GAMBURGER */}

  {/* START RESPONSIVE GAMBURGER */}
        <div onClick={closeMenu} className={menublack2 ? "bleck__show" : "bleck__show bleckshow"}></div>
        <Divgamburger ref={menu} id="mySidenav" className="sidenav">

        <Navbarleft22>
          <H11 to="/"><span>S</span>HOPPE</H11>
        </Navbarleft22>
          <Dinn>
            <Hr></Hr>
          </Dinn>
          <Closebutton href="javascript:void(0)" className="closebtn" onClick={closeMenu}>&times;</Closebutton>
          <Divshop>
            <Icondiv2 to="besh">
              <PersonOutlineIcon35>
              </PersonOutlineIcon35>
            </Icondiv2>
            <Link3 to='/shop'>Shop</Link3>
            <Link3 to='/blog'>Blog</Link3>
            <Link3 to='/oustory'>Ourstory</Link3>
          </Divshop>

          <Hrr></Hrr>

          <Localniset>
            <Icondiv>
              <FacebookOutlinedIcon1 onClick={()=>window.open('https://ru-ru.facebook.com')}>
              </FacebookOutlinedIcon1>
              <InstagramIcon1 onClick={()=>window.open('https://download-instagram.ru/kak-zaregistrirovatsya-v-instagram.html')}>
              </InstagramIcon1>
              <LinkedInIcon1 onClick={()=>window.open('https://www.linkedin.com/login/ru')}>
              </LinkedInIcon1>
              <TwitterIcon1 onClick={()=>window.open('https://download-instagram.ru/kak-zaregistrirovatsya-v-instagram.html')}>
              </TwitterIcon1>
            </Icondiv>
          </Localniset>

          </Divgamburger>
         <NavbarImg src={Menu} onClick={openMenu} />
       {/* END RESPONSIVE GAMBURGER */}

         </Navbarright>
       </Navbar>

      <Divinputsearch>
        <SearchTwoToneIcon222>

        </SearchTwoToneIcon222>
         <input placeholder='Search...' type="search" onChange={event =>{setOlma(event.target.value)}} />
      </Divinputsearch>

    </Container>
  )
}

export default Nav;
