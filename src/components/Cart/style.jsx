import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled.div`
    width: 100%;
    height: auto;
`

export const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 33px;
    line-height: 43px;
    color: #000000;
    text-align: center;
    margin: 50px;
`


export const FuncWrappper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 200px;
`

export const FirstDiv = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const CartsWrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #b3b3b3; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`

export const CartBox = styled.div`
    width: 90%;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 50px;
    `

export const BorderDiv = styled.div`
    width: 100%;
    height: 20px;
    border-bottom: 1px solid #D8D8D8;
    
`

export const BoxImage = styled.img`
    width: 136px;
    height: 136px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #505050;
`

export const BoxTexts = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h1{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #000000;
        margin-bottom: 10px;
    }
    
    h2{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #707070;
        margin-bottom: 10px;
    }
    
    p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #A18A68;
    }
`

export const Counter = styled.div`
    width: 102px;
    height: 53px;
    left: 508px;
    top: 326px;
    background: #EFEFEF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #707070;
        cursor: pointer;
    }
`

export const CloseBtn = styled(CloseIcon)`
    width: 12px;
    height: 12px;
    object-fit: contain;
    cursor: pointer;
`

export const FirstControl = styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FirstInput = styled.div`
    height: 170px;
    display: flex;
    align-items: flex-end;
    input{
        width: 336px;
        height: 55px;
        background-color: rgb(0,0,0,0);
        outline: none;
        border: none;
        border-bottom: 1px solid #D8D8D8;
        ::placeholder{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #707070;
        }
    }
`

export const FirstButtons = styled.div`
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .firstBtn{
        width: 168px;
        height: 53px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: #000000;
        border: none;
        border: 1px solid #000000;
        border-radius: 4px;
        background-color: rgb(0,0,0,0);
        outline: none;
        cursor: pointer;
        transition: all ease 0.3s;
        &:hover{
            background-color: #000000;
            color: #FFFFFF;
        }
    }
    .secondBtn{
        width: 168px;
        height: 53px;
        font-family: 'DM Sans';
        font-style: normal;
        border: none;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
        background: #000000;
        border: 1px solid #000000;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        transition: all ease 0.3s;
        &:hover{
            background-color: rgb(0,0,0,0);
            color: #000000;
        }
    }
`

// Inputs

export const SecondDiv = styled.div`
    width: 50%;
    height: 500px;
    border: 1px solid red;
`

export const SecondTitle = styled.h1`
    font-family: 'DM Sans';
    width: 100%;
    text-align: start;
    margin: 40px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 25px;
    color: #000000;
`

export const TextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 50px;
    h1{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #000000;
        margin-right: 128px;
    }
    p{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #707070;
        max-width: 250px;
    }
`

export const SelectDiv = styled.div`
    width: 440px;
    display: flex;
    border: 1px solid red;
    justify-content: flex-end;
`

export const Selects = styled.div`
    width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h1{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        color: #000000;
        margin-bottom: 20px;
    }
    select{
        width: 250px;
        height: 40px;
        margin-bottom: 20px;
        background-color: rgb(0,0,0,0);
        color: black;
        border: none;
        outline: none;
        cursor: pointer;
        border-bottom: 1px solid #D8D8D8;
    }
    button{
        width: 250px;
        height: 53px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: #000000;
        border: 1px solid #000000;
        border-radius: 4px;
    }
`

export const BorderDiv2 = styled.div`
    width: 100%;
    height: 20px;
    border-bottom: 1px solid #D8D8D8;
`

export const SecondButtons = styled.div`
    width: 100%;
    div{
        width: 100%;    
        justify-content: space-between;
        align-items: center;
    }
    button{
        width: 100%;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
        background: #000000;
        border: 1px solid #000000;
        border-radius: 4px;
        transition: all ease 0.3s;
        &:hover{
            background-color: rgb(0,0,0,0);
        }
    }
`



