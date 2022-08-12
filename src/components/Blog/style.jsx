import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 10px;
    margin-top: 50px;
    /* border: 2px solid black; */
    display: flex;
    @media (max-width:600px) {
        flex-direction: column;
        display: flex;
        justify-content: center;
        width: 100% !important;
    }
    @media (max-width:391px) {
        width: 100% !important;
        display: flex;
        justify-content: center;
    }
`

export const Text1 = styled.div`
  
    h1 {
        font-size: 33px;
    }

    @media (max-width:391px) {
        width: 100%;
        flex-direction: column-reverse;
    }
`
// export const Input2 = styled.input`
//     display: none;
//     @media (max-width:391px) {
//         background-color: #EFEFEF;
//         width: 100%;
//         border-radius: 4px;
//         height: 32px;
//         border-bottom: none;

//     }
// `
export const Inpdiv = styled.div`
    width: 261px;
    height: 40px;
    background-color: rgb(0,0 ,0 ,0);
    border-bottom: 2px solid black;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
    

    input {
        width: 90%;
        border: none;
        outline: none;
        font-size: 20px;
        display: none;
        ::placeholder{
            padding-top: 10px;
            font-size: 14px;
        }

    }
    /* display: flex;
    position: relative;
    margin-top: 50px; */



    input {
        /* width: 261px;   
        border-top: none;
        border-left: none;
        border-right: none;
        outline: none;
        font-size: 20px; */        
    }

    @media (max-width:420px) {
        width: 100%;
        flex-direction: row-reverse;
        background: #EFEFEF;
        border-radius: 4px;
        height: 42px;
        border: none;
        display: none;
        margin-top: 20px;
        padding: 10px;
        input{
            background-color: rgb(0,0,0,0);
        }
    }
  
`

export const Categoriya = styled.div`
    margin-top: 80px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-direction: column;
    line-height: 30px;

    
    button {
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        &:hover {
            text-decoration: #000000 !important;
        }
      
    }
    @media (max-width:400px) {
        display: none;
    }
    p {
        margin-top: 20px;
        color: #707070;
        font-size: 16px;
    }
`


export const ProductData = styled.div`
    width: 80%;
    height: auto;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    .MuiPaginationItem-root{
        color: black !important;
        border-color: black !important;
    }
    .Mui-selected{
        color: white !important;
        background-color: black !important;
    }
    .pagination_1{
        grid-column: span 2;
        margin-top: 50px;

    }
    @media (max-width:1000px) {
        grid-template-columns: 1fr;
        .pagination_1{
            grid-column: span 1;
        }
    }

    @media (max-width:451px) {
      
    }
`
export const Card = styled.div`
    width: 380px;
    height: auto;
    flex-wrap: wrap;
    margin-top: 60px;
    @media (max-width:320px) {
        width: 305px;
    }
    img {
        margin-top: 20px;
    width: 380px;

    @media (max-width:391px) {
        width: 75% !important;
    }

    }
    
    
`
export const Tovar = styled.div`
    line-height: 25px;
    h3 {
        margin-top: 15px;
        font-weight: 400;
    }
    button {
        margin-top: 20px;
        color: #A18A68;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-weight: 700;
        :hover{
            color: #f8b044;
        }
    }
  
`
export const TextData = styled.p`
    margin-top: 15px;
    height: auto;
    color: #707070;
    @media (max-width:395px) {
        height: auto;
        width: 80%;
    }
`

export const Categoriya2 = styled.div`
 margin-top: 80px;
    line-height: 30px;
    display: none;
    
    
  
    p {
        margin-top: 20px;
        color: #707070;
        font-size: 16px;
    }
    @media (max-width:391px) {
        display: block;
        gap: 100px;
        border: 1px solid red;


        button {
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        flex-direction: column;
        display: flex;
        gap: 20px;
        margin: 10px;
    }
        align-items: flex-start;
        margin-left: -170px !important;
    }
`