import styled from "styled-components";
import TextField from "@mui/material/TextField";

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
export const Select1 = styled.div`
    /* border: 1px solid red; */
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
export const Leftdiv = styled.div`
    width: 49%;
    height: auto;
    /* border: 1px solid blue; */
    .MuiInputLabel-root{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #707070 !important;
        margin: -10px 0px;
    }
    @media(max-width: 650px){
        flex-direction: column;
        display: flex;
        width: 100%;
        justify-content: center;
        /* align-items: center; */
    }
`
export const Btn = styled.div`
    width: 100%;
    height: 90px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    @media(max-width: 650px){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    button{
        border: none;
        outline: none;
        background-color: black;
        width: 244px;
        height: 53px;
        color: #fff;
        border-radius: 4px;
        font-family: 'DM Sans';
        @media(max-width: 650px){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    transition: 0.5s !important;
    :hover{
        transform: scale(1);
        background-color: white !important; 
        cursor: pointer !important;
        color: black !important;
        }
    }
    
`
export const TextRight = styled.div`
    width: 50%;
    height: 130px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    @media(max-width: 650px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    button{
        border: none;
        outline: none;
        color: #A18A68;
        font-size: 16px;
        font-weight: 400;
        background: none;
        font-family: 'DM Sans';
        
    }
    h2{
        font-size: 20px;
        font-family: 'DM Sans';
        font-weight: 400;
    }
    h4{
        font-size: 14px;
        font-family: 'DM Sans';
        font-weight: 400;
    }
`
export const Div1 = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    @media(max-width: 650px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`