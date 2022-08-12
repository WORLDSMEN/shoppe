import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';


export const MyPaymentIcon = styled.img`
    position: absolute;
    top: 99px;
    left: 93px;
`
export const MainDiv = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 639px) {
        margin-top: 30px;
    }
`

export const CenterDiv = styled.div`
    width: 92%;
    height: auto;
`
export const Word = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 43px;
    color: #000000;
    padding: 100px;
    @media (max-width: 640px) {
        justify-content: start;
        padding: 0;
        margin-bottom: 20px;
    }
`
export const Divfirts = styled.div`
    h2{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #707070;
        line-height: 40px;
        
        @media (max-width: 1000px) {
            display: flex;
            justify-content: center;
            text-align: start;
        }
        @media (max-width: 640px) {
        justify-content: start;
        }
        @media (max-width: 360px) {
            font-size: 13px;
        }

    }
    span{
        color: black;
        font-weight: 600;
        @media (max-width: 1000px) {
            margin-left: 5px;
        }
        @media (max-width: 640px) {
        justify-content: start;
        }
    }
`
export const Smalldiv = styled.div`
    width: 45%;
    height: 190px;
    border: 1px solid gray;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    @media (max-width: 1017px) {
            display: none;
        }
    h1{
        margin: 25px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #707070;
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    input{
        width: 190%;
        padding: 5px;
        outline: none;
        border: none;
        border-bottom: 1px solid #808080c9;
        color: #808080c9;
        @media (max-width: 1370px) {
            width: 170%;
        }
        @media (max-width: 1270px) {
            width: 150%;
        }
        @media (max-width: 1200px) {
            width: 130%;
        }
        @media (max-width: 1110px) {
            width: 110%;
        }
    }
`

export const DIV = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
    label{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #707070;
    }
`
export const Button2 = styled(Button)`
    height: 60px !important;
    width: 150px !important;
    background-color: black !important;
    /* margin-left: 15px !important; */
    /* margin-top: -15px !important; */
`


// Next work

export const Parties = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 40px;
    justify-content: center;
    gap: 30px;
    @media (max-width: 1000px) {
       flex-direction: column;
       display: flex;
       justify-content: center;
       align-items: center;
    }
    
`

export const Leftdiv = styled.div`
    width: 49%;
    height: auto;
    .MuiInputLabel-root{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #707070 !important;
        margin: -10px 0px;
    }
    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 640px) {
        width: 100%;
    }
    
`
export const Billing = styled.p`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 35px;
    color: #000000;
`

export const Inputdiv = styled.div`
    margin: 25px 0px;
`
export const TextField1 = styled(TextField)`
    width: 90%;
`
export const TextField2 = styled(TextField)`
    width: 42%;
`
export const Innertdiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`

export const Alldiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const P = styled.p`
    border-bottom: 1px solid grey;
    width: 90%;
`
export const Word1 = styled.p`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #707070;
    margin: 10px;
    margin-top: 25px;
`
export const Divforchexbox = styled.div`
    display: flex;
    align-items: center;
    margin: px 0px;
`
export const Chexbox1 = styled(Checkbox)`
    color: black !important;
`
export const Chexword = styled.p`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #000000;
`

// Right page


export const Rightdiv = styled.div`
    width: 49%;
    height: 1000px;
    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 640px) {
        width: 100%;
    }
`
export const Rword = styled.p`
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 25px;
    text-transform: uppercase;
    color: #000000;
`
export const Rdiv = styled.div`
    background: #EFEFEF;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 8px;
`
export const Rinnerdiv = styled.div`
    width: 85%;
    height: 90%;
`
export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #000000;

    }
`
export const PP = styled.p`
    border-bottom: 1px solid #D8D8D8;
    width: 100%;
    margin: 20px 0px;
`
export const Footer = styled.div`
     display: flex;
     justify-content: space-between;
     p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 80px;
        color: #000000;
     }
`
export const Middle = styled.div`
     display: flex;
     justify-content: space-between;
     p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 47px;
        color: #707070;
     }
`
export const PPP = styled.p`
    border-bottom: 1px solid #D8D8D8;
    width: 100%;
    
`
export const Middletwo = styled.div`
    display: flex;
    justify-content: space-between;
    
    p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 45px;
        color: #000000;
    }
`    
export const Middleone = styled.div`
    display: flex;
    justify-content: space-between;
    
    p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 45px;
        color: #000000;
    }
`
export const Divradio = styled.div`
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        align-items: center;
        line-height: 80px;
        margin-left: -10px;
    }
    h1{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #707070;
    }
`
export const Radio1 = styled(Radio)`
    color: black !important;
`
export const Threeicons = styled.div`
    position: relative;
    margin: 17px 0px;
    
.MuiRadio-root {
  color: black !important;
}
`
export const Button1 = styled(Button)`
    width: 98% !important;
    height: 50px !important;
    background: #000000 !important;
    border: 1px solid #000000 !important;
    border-radius: 4px !important;
    color: white !important;
`