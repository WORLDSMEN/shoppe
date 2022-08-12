import styled from "styled-components";

//import mui-icon
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// import mui-icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { NavLink } from 'react-router-dom';

import { Link } from "react-router-dom";

import {Menu} from "@mui/icons-material"



// mui-icons import qilindi
import { IconButton } from "@mui/material";

export const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    padding: 0;
    margin: 0;
`

// START NAVBAR CSS
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 50px;
`


export const BtnWrap = styled.div`
  /* display: none; */
  .MuiButtonBase-root:hover{
    background: grey;
    width: 40px;
    height: 40px;
  }
    @media screen  and (max-width:1000px) {
     display: block !important;

  }

`

export const MenuBtn = styled(IconButton)`

  @media (max-width:1000px) {
    display: block !important;
  }
`
export const Menu1 = styled(Menu)`
   /* display: none !important; */
  @media (max-width:1000px) {
    display: block !important;
  }
`

export const Navbarleft = styled.div`
  @media (max-width:700px) {
    left: 0px !important;
    font-size: 35px !important;
  }
`
export const H1 = styled.h1`
  font-family: 'Allerta Stencil';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;

  @media (max-width:350px) {
    font-size: 25px !important;
  }

  span{
    font-family: 'Allerta Stencil';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 40px;
    color: #A18A68;

    @media (max-width:350px) {
      font-size: 25px !important;
    }
  }
`
export const Endcardiv = styled.div`
  position: absolute !important;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column;
  width: 100% !important;
  margin-top: 5rem;

 @media (max-width:530px){
   display: flex;
   position: absolute;
   bottom: 0;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: white;
   z-index: 1000;
 }
`

export const Navbarright = styled.div`
 display: flex;
 align-items:center;
 margin-right: 30px;
 transition: all 4s;
`
export const DIV = styled.div`
 display: flex;

 @media (max-width:1000px) {
      display: none !important;
    }

 .active {
    color: #666;
    display: inline-block;
    text-transform: uppercase;
  }
  .active:after {
   display: block;
   content: "";
   border-bottom: solid 3px;
   color: #000000;
    /* transform: scaleX(0); */
    transition: transform 250ms ease-in-out;
  }
  .active:hover:after {
    transform: scaleX(1);
  }
  .active:after {
    transform-origin: 0% 50%;
  }

`

export const Link1 = styled(NavLink)`
  font-family: 'DM Sans' !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 27px !important;
  color: #000000 !important;
  margin: 0 54px !important;
  text-decoration: none !important;
  transition: transform 300ms ease !important;

  :hover{
    color: #aaa9a9c3 !important;
    transform: scale(1.1) !important;
  }

  @media (max-width:700px) {
    margin-left: 25px !important;
    font-size: 35px !important;
  }
`

export const Line = styled.div`
  border: 1px solid #707070;
`
export const SearchIcon1 = styled(SearchIcon)`
  font-family: 'DM Sans' !important;
  font-style: normal !important;
  font-weight: 700 !important;
  color: #000000 !important;
  font-size: 28px !important;
  margin: 0 20px;
  transition: transform 300ms ease !important;
  :hover{
    color: red !important;
    transform: scale(1.3) !important;
  }

  @media (max-width:1000px) {
    display: none !important;
  }


`
export const ShoppingCartIcon2 = styled(ShoppingCartOutlinedIcon)`
  font-family: 'DM Sans' !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 28px !important;
  color: #000000 !important;
  transition: transform 300ms ease !important;
  :hover{
    color: red !important;
    transform: scale(1.3) !important;
  }

  @media (max-width:1000px) {
    width: 40px !important;
    height: 35px !important;
    margin-right: 40px;
  }
`



export const Icondiv2 = styled(NavLink)`
  color: black !important;
`
export const PersonOutlineIcon3 = styled(PersonOutlineIcon)`
  font-family: 'DM Sans' !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 28px !important;
  color: black !important;
  margin: 0 30px;
  transition: transform 300ms ease !important;

  :hover{
    color: red !important;
    transform: scale(1.3) !important;
  }

  @media (max-width:1000px) {
    display: none !important;
  }

`

export const PersonOutlineIcon35 = styled(PersonOutlineIcon)`
  font-family: 'DM Sans' !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 28px !important;
  margin: 0 20px;

  @media (max-width:1000px) {
    display: block !important;
    margin: 0 30px;
  }


`
// END NAVBAR CSS

export const Divgamburger = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 999;
  top: 0;
  right: -100%;
  background-color: #b3b0a4;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  @media (max-width:1000px){

   }
`
export const Divgamburger2 = styled.div`
  height: 100vh;
  width: 500px;
  position: fixed;
  z-index: 1000;
  top: 0px;
  right: -100%;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 0px;
 /* overflow-y: scroll; */

 @media (max-width:520px){
    display: flex;
    flex-direction: column;
    width: 400px;
  }
 @media (max-width:420px){
    width: 300px;
  }

`

export const Link3 = styled(Link)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-weight: 700;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
  font-weight: 500;

  :hover {
    font-weight: 700 !important;
    color: black;
 }
`
export const Link33 = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-weight: 700;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
  font-weight: 500;

  :hover {
    font-weight: 700 !important;
    color: black;
 }
`
export const ScrolDiv = styled.div`
    width: 100%;
    height: 480px;
    overflow-y: scroll;

    @media (max-width:440px){

   }

`
export const DDh1 = styled.h1`
      text-align: center;
      margin-top: 12rem;
      font-size: 40px;
      cursor: pointer;
      line-height: 60px;
      transition: 1s;
      overflow: hidden;
      transition: transform 200ms ease;

      :hover{
        color: red;
        transition: 2s;
        transform: scale(1.05);
      }

      @media (max-width:490px) {
       font-size: 25px !important;
       line-height: 40px;
       margin-left: 40px;
      }
      @media (max-width:440px) {
       margin-left: 100px;
      }
`

export const Divshop = styled.div`
  margin-top: 30px;
`
export const Dinn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Hr = styled.hr`
  border: 1px solid #dddada;
  margin-top: 24px;
  width: 100%;
  padding-left: 20px;
  position:absolute;
`
export const Hrr = styled.hr`
  border: 1px solid #dddada;
  margin-top: 24px;
  width: 100%;
`

export const Navbarleft22 = styled.div`


`
export const H11 = styled(Link)`
  font-family: 'Allerta Stencil';
  font-style: normal;
  color: black !important;
  margin-top: 5rem !important;
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;
  margin-left: 30px !important;
  text-decoration: none !important;

  span{
    font-family: 'Allerta Stencil';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 40px;
    color: #A18A68;

    @media (max-width:350px) {
       font-size: 35px !important;
      }
   }
`

export const Closebutton = styled.button`
    position: absolute;
    top: 55px;
    right: 0px;
    color: white;
    font-size: 46px;
    margin-right: 10px;
    list-style: none !important;
    border: none;
    cursor: pointer;
    background: none;
  `
export const Closebutton2 = styled.button`
    position: absolute;
    top: 60px;
    right: 0px;
    color: black;
    font-size: 40px;
    margin-right: 20px;
    list-style: none !important;
    border: none;
    cursor: pointer;
    background: none;
    margin-bottom: 30px;

    @media (max-width:335px){
      top: 55px;

   }

  `

export const Localniset  = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;


`
export const Icondiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 20px;
  cursor: pointer;
`

export const FacebookOutlinedIcon1 = styled(FacebookOutlinedIcon)`
 position: absolute;
 font-weight: 700 !important;
 font-size: 25px !important;
 color: rgba(66, 103, 178);
 margin-left: 70px;
 left:0;
 width:60px !important;
 height:40px !important;
 background-color: none !important;
 transition: all 1s;

 :hover{
    transform: scale(1.1) !important;
     color: #00b7ff !important;
    cursor: pointer;
    transition: all 1s;
    }

`
export const TwitterIcon1 = styled(TwitterIcon)`
 color: #1DA1F2 !important;
 position: absolute;
 margin-right: 0px;
 right: 0;
 width:60px !important;
 height:40px !important;
 transition: all 1s;

:hover{
   transform: scale(1.1) !important;
    color: #00b7ff !important;
   cursor: pointer;
   transition: all 1s;
   }
`
export const InstagramIcon1 = styled(InstagramIcon)`
 color: #f04040  !important;
 position: absolute;
 right: 0;
 margin-right: 65px;
 width:60px !important;
 height:40px !important;
 transition: all 1s;

  :hover{
    transform: scale(1.1) !important;
    color: red !important;
    cursor: pointer;
    transition: all 1s;
    }
`
export const LinkedInIcon1 = styled(LinkedInIcon)`
 color: #0072b1!important;
 margin-left: 10px;
 position: absolute;
 left: 0;
 width:60px !important;
 height:40px !important;
 position: absolute;
 transition: all 1s;

:hover{
   transform: scale(1.1) !important;
   color: aquamarine;
   cursor: pointer;
   transition: all 1s;
   }

`

// START GAMBURGER SHOP

export const Div = styled.div`
    cursor: pointer;
    margin-left: 40px;
`
export const H3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #000000 !important;
  margin-top: 4rem;

`

export const Divp = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #666363;
  margin-top: 20px;

`
export const Divcenter = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 40px;
  cursor: pointer;
  position: relative;

 @media (max-width:525px){
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-size: 20px;
  margin-left: 20px;
}
 /* @media (max-width:320px){
  margin-left: 220px;
} */

`
export const Divimg = styled.div`

 /* @media (max-width:430px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
   } */
`
export const Divimg2 = styled.img`
  width: 180px  !important;
  height: 180px !important;

`
export const Divleft = styled.div`
  margin-left: 10px;

  /* @media (max-width:430px){
   margin-top: 20px;
   } */
`
export const DIvh11 = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-top: 0px;

`
export const DIvh14 = styled.h2`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
  color: #707070;
`
export const Divh21 = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-left: 10px;
  color: #707070;
  margin-top: 10px;
`
export const Divp2 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #A18A68;
`
export const Divend = styled.div`
  display: flex;
`
export const Endbutton = styled.button`
  font-weight: 600;
  width: 25px;
  height: 20px;
  right: 0;
  margin-right: 20px;
  position: absolute;
  background-color: white;
  color: black !important;
  border: 2px solid grey;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width:525px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    position: static;
    font-size: 20px;
    border-radius: 80px;
    margin-top: 20px;
 }
`
export const Divnumber = styled.div`
 display: flex;

`
export const Divprice = styled.div`
 display: flex;
 align-items: center;
 margin-top: 4.70rem;
 cursor: pointer;
`
export const Numberh1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #707070;
  margin-left: 5px;
  text-align: center;
`
export const Button13 = styled.button`
  width: 20px;
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #707070;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  transition: all ease 0.3s;
  transition: 1s;
  cursor: pointer;

  :hover{
    background-color: red;
    color: white;
    transform: scale(1.05);
    transition: 0.5s;
  }
`
export const Divcart = styled.div`
 display: flex;
 justify-content: space-around;
 margin-top: 2rem;
 cursor: pointer;

 @media (max-width:460px){
  margin-left: 0px;
  text-align: center;
  flex-direction: column;
}

`

export const Burgerhr= styled.hr`
  color: #707070 !important;
  margin-top: 3rem !important;
  width: 100%;
`

export const Carth1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  margin-right: 10px;
  color: #000000;

`
export const Cartp = styled.p`
 font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
`
export const Link123 = styled(Link)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-top: 22px !important;
  margin-bottom: 30px;
  cursor: pointer !important;
  text-decoration: none !important;

`
export const Cartbutton = styled.button`
  width: 288px;
  height: 53px;
  background: #FFFFFF;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  cursor: pointer;

  @media (max-width:460px){
    width: 200px;
    height: 53px;
    margin-left: 0rem;
    margin-bottom: 10px;
  }
`
  export const NavbarImg = styled.img`
    display: none;
    margin-right: 40px;

    @media (max-width:1000px) {
    display: block;
    margin-right: 20px !important;
    width: 30px !important;
    height: 25px !important;
  }
    @media (max-width:570px) {
    margin-right: 0px !important;
  }
`
  export const Divinputsearch = styled.div`
    display: none;

    @media (max-width:1000px){
      display: block;
      margin: 0 6%;
      margin-top: 20px;
      position: relative;
    }

    input{
      @media (max-width:1000px){
         width: 100% !important;
         padding-left: 60px;
         height: 42px;
         background: #EFEFEF;
         color: black !important;
         font-weight: 600;
         font-size: 22px;
         border-radius: 4px;
         border: none;
      }

      ::placeholder{
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #707070!important;
      }
    }
`

export const SearchTwoToneIcon222 = styled(SearchTwoToneIcon)`
    display: none !important;

  @media (max-width:1000px){
      display: block !important;
      color: #707070!important;
      position: absolute;
      top: 10px;
      left: 20px;

    }

`