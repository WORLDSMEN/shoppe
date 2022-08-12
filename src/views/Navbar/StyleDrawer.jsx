import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Div = styled.div`
 margin-left: 40px;
 cursor: pointer;

 @media (max-width:370px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
   }

`
export const H3 = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
  margin-top: 3rem;
`

export const Divp = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #707070;
  margin-top: 20px;
`

export const Divcenter = styled.div`
 display: flex;
 margin-top: 10px;
 margin-left: 40px;
 cursor: pointer;

 @media (max-width:380px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-left: 60px;
   }
`
export const Divimg = styled.div`

 @media (max-width:370px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
   }
`
export const Divimg2 = styled.img`
width: 136px  !important;
height: 136px !important;
`
export const Divleft = styled.div`
margin-left: 10px;
`
export const DIvh11 = styled.h1`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  margin-top: 20px;
`
export const Divh21 = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #707070;
`
export const Divp2 = styled.p`
  font-weight: 400;
  font-size: 14px;
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
  margin-left: 60px;
  background-color: white;
  color: black !important;
  border: 2px solid grey;
  border-radius: 50px;
  cursor: pointer;

  @media (max-width:380px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0px;
    margin-top: 1rem;
   }
`
export const Divnumber = styled.div`
display: flex;

`
export const Numberh1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #707070;
  margin-top: 3rem;

  @media (max-width:380px){
    margin-top: 1rem;
   }
`
export const Hr = styled.hr`
  color: #707070;
  margin-top: 3rem;
  margin-left: 60px;

  @media (max-width:380px){
    margin-left: 0px;
  }
`
export const Divcart = styled.div`
 display: flex;
 justify-content: space-around;
 margin-top: 2rem;
 cursor: pointer;

 @media (max-width:380px){
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-left: 60px;
  }

`
export const Carth1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #000000;

`
export const Cartp = styled.p`
 font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
`
export const Link1 = styled(Link)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-top: 22px !important;
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

  @media (max-width:380px){
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 208px;
    height: 53px;
    margin-left: 6rem;
    margin-bottom: 20px;
  }
`