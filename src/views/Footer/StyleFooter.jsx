import styled from "styled-components";

//import mui-icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Container = styled.div`
  /* height: auto; */
`

export const Hr = styled.hr`
    border: 1px solid #D8D8D8;
    margin-top: 24px;
    width: 92%;
    margin-left: 60px;
    background-color: #D8D8D8;

    @media (max-width:1000px){
      display: none;
     }
`
export const Footerend = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

    @media (max-width:1000px){
      display: none;
   }

`
export const Left = styled.div`
  display: flex;
  margin-left: 40px;
  cursor: pointer;

`
export const H1 = styled.h1`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
    margin: 0 20px;
`
export const Right = styled.div`
    display: flex;
    align-items: center;

`
export const Righth1 = styled.h1`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
    margin-right: 50px;

    @media(max-width:1440px) {
      margin-right: 60px;
  }
`
export const ArrowRightAltIcon1 = styled(ArrowRightAltIcon)`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
    margin-right: 50px;

`
export const ArrowRightAltIcon123 = styled(ArrowRightAltIcon)`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 34px !important;
    line-height: 27px;
    color: #707070;
    position: absolute;
    margin-top: 10px;
    margin-right: 30px;
    right: 0;

    @media (max-width:840px){
      margin-top: 0px;
      margin-right: 15px;
   }
    @media (max-width:550px){
      margin-right: 20px !important;
   }
    @media (max-width:470px){
      margin-right: 40px !important;
   }
    @media (max-width:340px){
      margin-right: 10px !important;
   }

`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    @media (max-width:1000px){
      display: none;
   }
`

export const Hr2 = styled.hr`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    position: absolute;
    right: 0;
    margin-top: 10px;
    /* width: 24%; */
    margin-right: 50px;
    background-color: #000000c5;

    @media (max-width:2560px){
      width: 315px;
   }
   @media(max-width:1440px) {
    width: 320px;
  }
`

export const Number = styled.div`
   display: flex;
   align-items: center;
   margin-top: 0px;
   margin-left: 60px;
   cursor: pointer;

   @media (max-width:1000px){
    display: none;
   }
`
export const Number2 = styled.div`
   display: none;
   color: #707070;

   @media (max-width:1000px){
    display: block;
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-left: 40px;
    cursor: pointer;
   }

   @media (max-width:700px){
      margin-left: 20px;
   }
`
export const Numberh1 = styled.h1`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #000000;
   @media (max-width:1000px){
    display: none;
   }

 span{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
  }
`
export const Numberh12 = styled.h1`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
    margin-top: 40px;
`

export const Icondiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   right: 0;
   margin-top: 60px;
   margin-right: 30px;
   cursor: pointer;

   @media (max-width:1000px){
    display: none;
   }
`
export const Faciv = styled.div`
    border: 1px solid red;
    width: 50px;
    height: 50px;
    background-color: red;

`
export const FacebookOutlinedIcon1 = styled(FacebookIcon)`
    color: #707070 !important;
    margin: 0 80px;
    position: absolute;
    right: 0;
    width:50px !important;
    height:28px !important;
    background-color: none !important;

    transition: transform 300ms ease !important;

:hover{
  color: blue !important;
  transform: scale(1.1) !important;
}
`
export const FacebookOutlinedIcon123 = styled(FacebookIcon)`
    color: #707070 !important;
    width:50px !important;
    height:28px !important;
    background-color: none !important;
`
export const TwitterIcon1 = styled(TwitterIcon)`
    color: #707070 !important;
    position: absolute;
    right: 0;
    width:50px !important;
    height:28px !important;

    transition: transform 300ms ease !important;

  :hover{
    color: red !important;
    transform: scale(1.1) !important;
  }
`
export const TwitterIcon123 = styled(TwitterIcon)`
    color: #707070 !important;
    width:50px !important;
    height:28px !important;

`
export const InstagramIcon1 = styled(InstagramIcon)`
    color: #707070 !important;
    margin: 0 40px;
    position: absolute;
    right: 0;
    width:50px !important;
    height:28px !important;

    transition: transform 300ms ease !important;

:hover{
  color: #ee5a5a !important;
  transform: scale(1.1) !important;
}
`
export const InstagramIcon123 = styled(InstagramIcon)`
    color: #707070 !important;
    width:50px !important;
    height:28px !important;
`

export const LinkedInIcon1 = styled(LinkedInIcon)`
    color: #707070 !important;
    margin: 0 120px;
    position: absolute;
    right: 0;
    width:50px !important;
    height:28px !important;

    transition: transform 300ms ease !important;

:hover{
  color: #5cb8ee !important;
  transform: scale(1.1) !important;
}
`

   //Footerend 2
export const Footerend2 = styled.div`
  display: flex;
  display: none;
  margin-top: 50px;

 @media (max-width:1000px){
    display: block;
   }
 @media (max-width:340px){
    display: block;
    flex-wrap: wrap;
    flex-direction: column;
   }
`
export const Div2 = styled.div`
    display: flex;
`
export const Hr22 = styled.hr`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-top: 10px;
    margin-left: 40px;
    width: 92%;



    @media (max-width:700px){
      width: 94%;
      margin-left: 20px;
   }
    @media (max-width:550px){
      width: 92%;
   }
    @media (max-width:470px){
      width: 84%;
   }
`

export const Left2 = styled.div`
  display: flex;
  margin-left: 20px;
  cursor: pointer;

 @media (max-width:1000px){
    display: flex;
    flex-direction: column;
    margin-top: 40px;
   }
  @media (max-width:700px){
    margin-left: 0px;
    }
`
export const Right2 = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media(max-width:1000px) {
      margin-left: 40px;
    }

    @media(max-width:700px) {
      margin-left: 20px;
    }
`
export const Righth12 = styled.h1`
   font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
    margin-right: 50px;

    @media (max-width:380px){
      margin-right: 40px;
   }
`
export const H12 = styled.h1`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
    margin: 0 20px;
`
export const Divtext = styled.div`
   display: flex;
   margin-top: 20px;
   margin-left: 40px;

   @media(max-width:700px) {
      margin-left: 30px;
    }
`
export const Input = styled.input`

`
export const TextH1 = styled.h1`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: black;
    margin: 0 10px;
`
export const Divfollow = styled.div`
  display: none;

  @media (max-width:1000px){
    display: flex;
    margin-left: 30px;
    margin-top: 20px;
   }
  @media (max-width:700px){
      margin-left: 10px;
   }
`
export const Followh1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: black;
  margin: 0 10px;
`
export const Followhr = styled.hr`
  width: 100px;
  height: 0px;
  margin-top: 15px;
`
export const IconFooter =  styled.img`
  width: 12px;
  margin-left: 10px;



  @media (max-width:1000px){
      margin-top: 0px;
      margin-left: 20px;
      margin-right: 15px !important;
   }
    @media (max-width:360px){
     display: flex;
     margin-top: 5px;
     margin-right: 10px !important;
     width: 25px;
     height: 20px;
    }
`