import styled from "styled-components";

// export const OrderCenter = styled.div`
//     width: 100%;
//     height: 300px;
//     border: 1px solid black;
//     margin: 20px 0px 0px 0px;
// `
// export const Order = styled.div`
//     width: 100%;
//     height: 60px;
//     border: 2.5px solid #A18A68;
//     display: flex;
//     align-items: center;
//     background-color: #EFEFEF;;
//     justify-content: space-between;
//     padding: 30px;
//     border-left: none;
//     border-right: none;
//     border-bottom: none;
//     span{
//         color: #A18A68;
//         font-weight: 700;
//         font-family: 'DM Sans';
//     }
//     h4{
//         font-family: 'DM Sans';
//         font-weight: 700;
//     }
// `

export const OrderGrid = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
export const Ors = styled.div`
    width: 100%;
    height: auto;
    /* border: 2px solid yellowgreen; */
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    @media(max-width: 730px){
        display: block;
    }
`
export const DadeTop = styled.div`
    width: 90%;
    height: 60px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:10px 0px 0px 0px;
    @media(max-width: 730px){
        display: none;
    }
`
export const LittleText = styled.div`
    /* border: 1px solid red; */
    width: 15%;
    font-family: 'DM Sans';
    font-weight: 400;
    color: #999999;
    font-size: 16px;
    h4{
        color: black;
        font-weight: 400;
    }
    span{
        color:#A18A68 ;
    }
`