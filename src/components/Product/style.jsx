import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* height: 600px; */
    display: flex;
    margin: 50px;
    gap: 50px;
    flex-wrap: wrap;
    /* border: 5px green dotted; */
`
export const Box1 = styled.div`
gap: 50px;
width: 150px;
`

export const Ul = styled.ul`
    list-style: none;
    margin: 10px;

    li img{
        width: 120px;
        height: 120px;
    }
`

export const SwiperDiv = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
`

export const Box3 =styled.div`
    width: 500px;
    height: auto;
    display: flex;
    flex-wrap: wrap;

`

export const Con = styled.div`
    p{
        margin-top: 20px;

    :nth-child(2){
        color: #A18A68;
        font-weight: 700;
    }
    }

`

export const Zvezda = styled.div`
    display: flex !important;
    gap: 10px;
    /* border: 1px solid red; */
    align-items: center;
    margin-top: 40px;
    p {
        :nth-child(6){
            color: #707070;
            margin-bottom: 20px;
        }
    }

`

export const Lorem = styled.div`
    height: 140px;
    display: flex;
    align-items: center;
    line-height: 30px;

    color: #707070;
`
export const Buttons = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    gap: 5px;

    button {
        width: 50px;
        height: 40px;
        background-color: #EFEFEF;
        border: none;
        border-radius: 5px;
        gap: 20px;
        color: #707070;
        cursor: pointer;
        &:hover {
            border: 1px solid ;
        }

        :nth-child(4){
            width: 350px;
            font-weight: 700;
        }
    }
`

export const Brendlar = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
`

export const CategoriPage =  styled.div`
    width: 100%;
    border: 1px solid red;
    gap: 100px;
    display: flex;
    border: none;
    flex-direction: column;
    padding-bottom: 20px;
    button {
        border: none;
        background: transparent;
        font-size: 20px;
        font-weight: 400;
        color: #707070;
        font-style: normal;
        &:focus {
        text-decoration: underline;
        cursor: pointer;
        padding-bottom: 20px;
        color: black;


        }

      
    }
`

export const ButtonsFill = styled.div`
    display: flex;
    gap: 100px;
`
export const MapContainer = styled.div`
    /* border: 1px solid red; */
    line-height: 40px;
    display: flex;
    color: black;
    :nth-child(1) {

    }


`

export const MapTitle = styled.div`
        color: #707070;

    p {
     :nth-child(1){
        /* color: #707070; */
     }


    }
`

export const MapDate = styled.div`
p{
    /* color: black; */

}
`

export const Zvezdaa = styled.div`
  display:flex ;
  gap: 20px;
  img{
    width: 30px;
  }
`
export const DivZvez = styled.div`
    display: flex;
    gap: 20px;
    img {
        width: 30px;
    }
`

export const BoxMap2 = styled.div`

`


export const PP = styled.p`
    color: #707070;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 27px;
`

export const Listyled = styled.li`
    list-style: none;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 27px;

    span {
        color: #707070;
    }
`

export const Flexdiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid grey;
    @media (max-width:601px) {
        display: flex;
        justify-content: center;
        width: 100%;
        flex-direction: column;
    }
`


export const Prodiv1 = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    /* flex-direction: column; */
    gap: 30px;
    h3{
        font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    
    align-items: center;
    }
`
export const Mapdiv = styled.div`
/* width: 100%; */
    h3{
        font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
    }

    @media (max-width:601px) {
        justify-content: center;
        width: 100% !important;
        border: 1px solid red;
        text-align: center;
    }
`

export const LoremDiv = styled.div`
    display: flex;
    flex-direction: column;
font-weight: 400;
font-size: 16px;
margin-top: 20px;
line-height: 27px;
color: #707070;

p {
    width: 80%;
}
`

export const DivScar = styled.div`
    display: flex;
    /* height: 60px; */
    align-items: center;
    color: black;

    
    p{
        color: #707070;
        padding-left: 35px;
    }
`

export const Qarobka = styled.div`
    h3 {
        font-style: normal;
font-weight: 400;
font-size: 20px;
height: 40px;
line-height: 26px;
p{
  color: #707070 !important; 
}
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    line-height: 80px;
    input {
        border-top: none;
        outline: none;
        border-left: none;
        border-right: none;

        label {
            color: #707070;
        }
    }
`

export const Checkbox = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;

`
export const Buttonss = styled.div`
    display: flex;
    align-items: center;
   
`
export const Mybuttonn = styled.button`
    background-color: black !important;
    color: white !important;
    display: flex !important;
    align-items: center !important;
    height: 53px !important;
    width: 123px !important;
    justify-content: center !important;
    border-radius:5px !important;
    text-decoration: none;
   
    
`

export const FoterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 90%;
    flex-wrap: wrap;
    img {
        width: 100%;
    }

    div {
        font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
    }
`

export const PriceProduct = styled.p`
    color: #A18A68;
    font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
/* identical to box height, or 130% */

text-transform: capitalize;

`
export const Foterdiv1 = styled.div`
   h3 {
    height: 60px;
    align-items: center;
    display: flex;
   } 
`