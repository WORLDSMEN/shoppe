import styled from "styled-components";

export const WrapperOrder = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 730px){
        flex-direction: column;
    }
`
export const Deatails = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h3{
        font-size: 26px;
        font-family: 'DM Sans';
    }
`
export const LeftWrapp = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.5s;
    @media(max-width: 730px){
        width: 80%;
    }
    @media(max-width: 560px){
        width: 100%;
    }
`
export const OrderLeft = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TextLeft = styled.div`
    width: 50%;
    height: 100%;
`
export const RightWrapp = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.5s;
    @media(max-width: 730px){
        width: 80%;
    }
    @media(max-width: 560px){
        width: 100%;
    }
`
export const OrderRight = styled.div`
    width: 100%;
    height: 100%;
`
export const TextRight = styled.div`
    width: 100%;
    height: 100%;
    background-color:#EFEFEF; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px;
`
export const LittleDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 2px solid grey;
    margin: 20px 0px 0px 0px;
    flex-direction: column;
    flex-wrap: wrap;
    @media(max-width: 560px){
        width: 100%;
        flex-wrap: wrap;
    }
    h5{
        color: #707070;
        font-weight: 400;
        font-family: 'DM Sans';
    }
    h4{
        font-weight: 400;
        font-family: 'DM Sans';
    }
`
export const LittleDiv1 = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 20px 0px 0px 0px;
    flex-direction: column;
    h5{
        color: #707070;
        font-weight: 400;
        font-family: 'DM Sans';
    }
    h4{
        font-weight: 400;
        font-family: 'DM Sans';
    }
`
export const LittleRight1 = styled.div`
    width: 100%;
    height: 124px;
    /* border: 1px solid #707070; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3{
        color: #707070;
        font-family: "DM Sans";
        font-size: 16px;
    }
`
export const LittleRight = styled.div`
    width: 100%;
    height: 50px;
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4{
        color: black;
        font-family: 'DM Sans';
        font-size: 16px;
    }
    h3{
        color:#707070;
        font-size: 16px;
        font-family: "DM Sans";
    }
`
export const LittleRight2 = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4{
        color: black;
        font-family: 'DM Sans';
        font-size: 16px;
    }
`
export const Product = styled.div`
    width: 50%;
    height: 124px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`
export const Total = styled.div`
    width: 50%;
    height: 124px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
`