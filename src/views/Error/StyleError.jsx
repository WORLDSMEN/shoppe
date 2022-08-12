import styled from "styled-components";
import { Button } from "@mui/material";
import {NavLink, Link } from 'react-router-dom'

export const MainDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CenterDiv = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 90px 0px 90px 0px;
`

export const H1  = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 43px;
`

export const PI = styled.p`
    width: 306px;
    height: 63px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: gray;
    text-align: center;
`

export const MuiButton = styled(Button)`
    width: 187px !important;
    height: 53px !important;
    border: 1px solid black !important;
    color: black !important;
    
`

export const Mylink = styled(Link)`
    text-decoration: none !important;
`

