import styled from "styled-components";


export const Wrapper = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 730px){
        width: 100%;
    }
`
export const ORLeft = styled.div`
    width: 30%;
    height: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    
    @media(max-width: 730px){
        width: 50%;
    }
    @media(max-width: 450px){
        font-size: 12px;
    }
`
export const ORRight = styled.div`
    width: 30%;
    height: 300px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: column;
    color: #999999;
    font-family: 'DM Sans';
    @media(max-width: 730px){
        width: 50%;
    }
    @media(max-width: 450px){
        font-size: 12px;
    }
`