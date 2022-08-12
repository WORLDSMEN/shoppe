import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Img1 from '../../assets/images/Img 01.png';
import Img5 from '../../assets/images/Img 05.png';
import Img2 from '../../assets/images/Img 02.png';
import Img3 from '../../assets/images/Img 03.png';
import Img4 from '../../assets/images/Img 04.png';

import Img6 from '../../assets/images/Img 06.png';

import {Link} from 'react-router-dom';



export const Link3 = styled(Link)`
  text-decoration: none !important;
`

export const MySearchIcon2 = styled(SearchIcon)`
  position:absolute !important;
  display: flex !important;
  cursor: pointer !important;
  justify-content: center !important;
  left: 16% !important;
  margin-top: 60px;
`

export const MySearchIcon = styled(SearchIcon)`
position:absolute !important;
display: flex !important;
cursor: pointer !important;
justify-content: center !important;
right: 30px;
`

export const MainDiv = styled.div`
  width: 100%;
  height: auto;
  max-width: 1440px;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  //flex-direction: column;
  margin-bottom: 200px;

  
    

    
    @media (max-width:952px) {
      height: 2300px;

    } 
  
    @media (max-width:331px) {
      height: 3150px;

    } 
  
    @media (max-width:340px) {
    height:3550px;
  }
`



export const Div1 = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  
  @media (max-width:951px) {
    display: none;
  }
   
  h1{
    width: 252px;
    height: 43px;
    margin-top: 53px;
    text-align: center;
     font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 43px;
    color: #000000;

  }

  

  select{
    box-sizing: border-box;

     position: absolute;
     width: 261px;
     height: 53px;
     top: 359px;
     //border: 1px solid #D8D8D8;
     border-radius: 4px;
     margin-top: 90px;
     color: #000000;
  }
`

export const SlaiderDiv = styled.div`
  height: 5px;
  border-radius: 5px;
  width: 320px;
  display: flex;
  left: 10px;
  background-color: #ddd;
  margin-top: 10px;
  position: relative;

  
`

export const PriceDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  
`

export const InputDiv = styled.div`
  display: flex;
  gap: 5px;
  position: relative;
  div{
    input{
      width: 50px;
      border: none;
      outline: none;
    }
  }

`

export const Sale = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Stock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`


 export const Cardp = styled.p`


 `







export const InpDiv = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
  input {
    width: 91%;
    border:none;
    border-bottom:2px solid black;
    margin-left: 8px;
    outline: none;
    height: 50px;
    font-size: 20px;
  }
`


// export const Div2 = styled.div`
//   width: 75%;
//   border: 1px solid red;
// `
export const  Card1 = styled.div`
  
` 

export const  Card2 = styled.div`
  
` 
export const  CardImg = styled.div`
  /* background-image: url({${Img1}}); */
  background-position :center ;
  background-size: cover ;
  width: 300px;
  height: 300px;
` 
export const  CardImg2 = styled.div`
  background: url(${Img2});
  width: 300px;
  height: 300px;
`
 export const  CardImg3 = styled.div`
  background: url(${Img3});
  width: 300px;
  height: 300px;

` 
export const  CardImg4 = styled.div`
  background: url(${Img4});
  width: 300px;
  height: 300px;

`
 export const  CardImg5 = styled.div`
  background: url(${Img5});
  width: 300px;
  height: 300px;
` 
export const  CardImg6 = styled.div`
  background: url(${Img6});
  width: 300px;
  height: 300px;

` 
export const CardBox = styled.div`
  width: 75%;
  height: auto;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width:951px) {
    width: 100%;
    display: flex;
    align-items: center;
    //margin-top: -400px;
  }

  @media (max-width:949px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

 
`



export const ProdactsDiv = styled.div`
  width: 100%;
  height: auto;
 // border: 1px solid blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 135px;



  @media (max-width:951px) {
    display: flex;
    align-items: center;
    margin-bottom: 100px;
  }
  `
 export const Box = styled.div`
  width: 300px;
  height: auto;
  //border: 1px solid darkblue;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;

  

  @media (max-width:951px) {
    display: flex;
    align-items: center;
    margin-bottom:250px;
  }

  @media (max-width:701px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -100px;
  }

  @media (max-width:647px) {
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
    justify-content: center;
    margin-top: -30px;
  }

  @media (max-width:632px) {
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
    justify-content: center;
    width: 250px;
    margin-top: 0px;
  }

  @media (max-width:532px) {
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
    justify-content: center;
    width: 225px;
  }

  @media (max-width:490px) {
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
    justify-content: center;
    width: 200px;
    margin-top: 0px;
  }

  @media (max-width:490px) {
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
    justify-content: center;
    width: 175px;
  }
  @media (max-width:390px) {
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
    justify-content: center;
    width: 150px;
    margin-top: -0px;
  }

  

`
export const Card = styled.div`
  width: 300px;
  height: 300px;
  //border: 1px solid green;
  display: flex;
  flex-wrap: wrap;

  @media (max-width:647px) {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin: 0px 0px 0px 25px;
  }

  @media (max-width:631px){
    width: 225px;
    height: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width:490px){
    width: 190px;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  background-position: center;
 
`

export const InfoDiv = styled.div`
  width: 100%;
  height: calc(100% - 300px);
  //border: 1px solid red;
  display: flex;
  
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top:35px;
`

export const ProdactName = styled.h1`
 color: #000000;
 font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;

 @media (max-width:650px){
  margin-left: 25px;
}

@media (max-width:532px){
  font-size: 17px;
} 


@media (max-width:491px){
  font-size: 14px;
line-height: 22px;

} 

@media (max-width:391px){
  font-size: 11px;
line-height: 22px;

} 
`

export const Price = styled.p`
  color: #A18A68;
  font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;

text-transform: capitalize;

@media (max-width:650px){
  margin-left: 25px;
}
`

export const SearchDiv = styled.div`
  width: 100%;
  
  position: relative;
  display: none;
 @media (max-width:951px){
  display: flex;
  flex-direction: column;
  align-items: center;

  }

h1{
  text-align: left;
  margin-top: 20px;
}

h3{
  cursor: pointer;
}
  input{
    width: 70%;
height: 42px;
margin-top: 50px;
background: #EFEFEF;
border-radius: 4px;
display: flex;
font-size: 20px;

  }

  div{
    display: flex;
    gap: 10px;
  }
`

export const SliderDiv = styled.div`
  //border: 1px solid yellow;
  height: 100px;
`


 

