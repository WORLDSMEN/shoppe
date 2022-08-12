import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export const Centertop = styled.div`

`
// Start Navbar
export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
`

export const Left = styled.div`
    margin-left: 60px;

    @media (max-width:1000px){
     margin-left: 50px !important;
    }
    @media (max-width:500px){
     margin-left: 30px !important;
    }
`
export const H1 = styled.div`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 43px;

    @media (max-width:670px){
      display: flex;
      font-size: 25px;
    }
    @media (max-width:500px){
      margin-left: 0px;
    }
`
export const Right = styled.div`
    margin-right: 60px;

    @media (max-width:1200px){
     margin-right: 50px !important;
    }
    @media (max-width:670px){
     margin-right: 30px !important;
    }
    @media (max-width:500px){
      flex-direction: column;
      margin-top: 80px;
      margin-left: 0px;
      position: absolute;
      left: 0;
    }

`
export const H3 = styled.div`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    text-transform: capitalize;
    color: #A18A68;

    @media (max-width:500px){
      margin-left: 30px;
    }
    @media (max-width:360px){
        font-size: 18px;
    }
`
// End Navbar

// Start Centerend
export const Centerend = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 /* border: 3px solid red; */
 width: 100%;
 height: auto;

`

export const Divnumber2 = styled.div`

    @media(max-width:2560px) {
      margin-left: 0px;
    }
    @media(max-width:790px) {
      margin-left: 10px;
    }
`

export const Divh1 = styled.h1`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
    margin-top: 24px;
`
export const Homenavbar = styled.div`
  /* border: 5px solid green; */
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* gap: 34px; */


`
export const Navdiv = styled.div`
   display: flex !important;
   flex-direction: column !important;
   justify-content: space-between !important;
   cursor: pointer !important;

   @media (max-width: 500px) {
     margin-top: 40px;
   }
`
export const Divp = styled.p`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #A18A68;
    margin-top: 16px;
`
export const Link33 = styled(Link)`

`

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 40px;
  width: 400px;
  height: 380px;
  position: relative;
  overflow: hidden;
  transition: transform 500ms ease;

  :hover{
  transform: scale(1.05);
  }

    @media(max-width:2560px) {
      width: 380px;
      height: 360px;
    }
    @media(max-width:1440px) {
      width: 380px;
      height: 380px;
    }

    @media(max-width:1285px) {
      width: 340px;
      height: 300px;
    }
    @media(max-width:1160px) {
      width: 300px;
      height: 280px;
    }
    @media(max-width:1030px) {
      width: 280px;
      height: 260px;
    }
    @media(max-width:970px) {
      width: 260px;
      height: 240px;
    }
    @media(max-width:900px) {
      width: 240px;
      height: 220px;
    }
    @media(max-width:820px) {
      width: 230px;
      height: 200px;
    }
    @media(max-width:790px) {
      width: 310px;
      height: 260px;
      margin-left: 10px;
    }
    @media(max-width:715px) {
      width: 280px;
      height: 240px;
    }
    @media(max-width:650px) {
      width: 260px;
      height: 240px;
    }
    @media(max-width:605px) {
      width: 240px;
      height: 220px;
    }
    @media(max-width:565px) {
      width: 220px;
      height: 190px;
    }
    @media(max-width:520px) {
      width: 200px;
      height: 190px;
    }
    @media(max-width:500px) {
      width: 350px;
      height: 300px;
    }
    @media(max-width:470px) {
      width: 380px;
    }
    @media(max-width:450px) {
      width: 360px;
    }
    @media(max-width:435px) {
      width: 360px;
    }
    @media(max-width:393px) {
      width: 340px;
      height: 260px;
    }
    @media(max-width:360px) {
      width:  310px;
      height: 240px;
    }


  &:hover button{
    height: 65px;
    transition: all ease 0.3s;

  }
  img{
    position: absolute;


  }
  button{
    width: 100%;
    height: 0px;
    background: #e7e6e6;
    border-radius: 4px 4px 0px 0px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    border: none;
    position: absolute;
    bottom: 0;
    transition: all ease 0.3s;
    cursor: pointer;
    transition: 1s;

    :hover{
    transform: scale(1.05);
    transition: 0.5s;
    }
  }
`
export const Img222 = styled.img`
  width: 100%;
  height: 100%;

`
