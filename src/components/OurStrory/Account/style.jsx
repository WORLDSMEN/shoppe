import styled from "styled-components";
import  TextField  from '@mui/material/TextField';
import { Button } from '@mui/material'

export const BigInp = styled.div`
    width: 100%;
    height: auto;
    /* border: 2px solid yellow; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media(max-width: 500px){
        width: 100%;
    }
`
export const Acaunt = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 33px;
        font-weight: 700;
        font-family: 'DM Sans';
        @media(max-width: 500px){
            font-size: 25px;
        }
    }
`
export const Inp = styled.div`
    width: 51%;
    height: auto;
    /* border: 2px solid blue; */
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    @media(max-width: 850px){
        width: 80%;
    }
    @media(max-width: 500px){
        width: 100%;
    }
`
export const InpBig = styled.div`
    width: 100%;
    height: 400px;
    /* border: 2px solid red; */
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;

`
export const Text = styled(TextField)`
    width: 100%;
    margin: 20px 0px 0px 0px;
`
export const BtnDiv = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px 0px 0px;
`
export const Btn = styled(Button)`
    width: 90% !important;
    height: 53px !important;
    /* border: 1px solid black !important; */
    background-color: black !important;
    color: white !important;
    cursor: pointer;
    transition: 0.5s !important;
    :hover{
        transform: scale(1.1);
        background-color: white !important;
        cursor: pointer !important;
        color: black !important;
        /* border:1px solid black !important; */
        }
`