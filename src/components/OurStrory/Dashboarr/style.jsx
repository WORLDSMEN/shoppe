 import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const My = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    margin: 45px 0px 0px 0px;
    h2{
        font-size: 33px;
        font-weight: 800;
        font-family: 'DM Sans';
    }
`
export const Navbar = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    line-height: 40px;
`
export const NavText = styled.div`
    width:70%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    button{
        
    }
    @media(max-width: 930px){
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transform: scale();
    }
    @media(max-width: 730px){
        display: none;
    }
    /* overflow: hidden; */
`
export const Swip = styled.div`
    width: 100%;
    height: 60px;
    display: none;
    justify-content: center;
    align-items: center;
    @media(max-width: 730px){
        display: block;
    }
`
export const ReverseLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: black;
`
export const Line = styled.div`
    width: 100%;
    height: 30px;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const Center = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    line-height: 27px;
    margin: 0px 0px 100px 0px;
    flex-direction: column;
    line-height: 30px;
    p{
        font-family: 'DM Sans';
        font-size: 16px;
        font-weight: 400;
    }
    span{
        color: #A18A68;
    }
`
export const Link = styled(NavLink)`
    text-decoration: none !important;
    font-family: 'DM Sans' !important;
    border: none !important;
    background: none !important;
    font-size:20px !important;
    font-family: 'DM Sans' !important;
`