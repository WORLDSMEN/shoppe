import styled from "styled-components";

//import mui icon
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ReplyIcon from '@mui/icons-material/Reply';
import Button from '@mui/material/Button';


export const ManinDiv = styled.div`
    width: 100%;
    height: auto;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CenterMainDiv = styled.div`
    width: 92%;
    height: auto;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 60px 0px 200px 0px;
`

export const TitleDiv = styled.div`
    width: 100%;
    height: 100px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0px 0px 30px 0px;
`
export const TitleH1 = styled.h1`
    font-weight: 600;

    @media (max-width:558px) {
        text-align: center;
    }

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        /* text-align: center; */
    }
`

export const TitlePi = styled.p`
    color: gray;

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    }
`

export const Span = styled.span`
    font-weight: 600;
    color: black;
`

export const CenterImage = styled.img`
    width: 100%;
    height:auto;
`

export const LongDIv = styled.div`
    width: 670px;
    height:2000px;
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 40px 0px;

    @media (max-width:748px) {
        width: 100%;
    }
`

export const ForstTextDiv = styled.div`
    width: 100%;
    height: 172px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;

    @media (max-width:636px) {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

` 


export const ForstTextPi1 = styled.p`
    width: 100%;
    height: 50%;
    color: black;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    }
`

export const ForstTextPi2 = styled.p`
    width: 100%;
    height: 50%;
    color: black;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;


    @media (max-width:408px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 20px;
    }
`

export const Image11 = styled.img`
    width: 100%;
    height: auto;
    border-radius:5px;
`

export const TopTrends = styled.div`
    width: 100%;
    height: 50px;
    /* border: 1px solid gray; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const TopTrendsH1 = styled.h2`
    color: black;

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
    }
`

export const LoremDiv = styled.div`
    line-height: 20px;
    /* border: 1px solid red; */
`

export const Lorem = styled.p`
    color: black;
    font-weight: 500;
    font-size: 17px;

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    }
`

export const Ul = styled.ul`
    width: 654px;
    height: 138px;
    line-height: 30px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 50px 0px 0px ;

    @media (max-width:714px) {
        width: 100%;
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width:517px) {
        height: auto;
        margin: 15px 0px 15px 0px;
    }
`

export const Li = styled.li`
    width: 500px;
    height: 30px;
    /* border: 1px solid black; */
    list-style: none;

    @media (max-width:717px) {
        width: auto;
        height: auto;
    }

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    }
`

export const Conteyner = styled.div`
    width: 100%;
    height: 70px;
    /* border: 1px solid green; */
    display: flex;

    @media (max-width:697px) {
        display: flex;
        flex-direction: column;
    }
`

export const TagsDiv = styled.div`
    width: 50%;
    height: 100%;
    /* border: 1px solid black; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width:697px) {
       height: 50%;
    }

    @media (max-width:692px) {
        width: 60%;
    }

    @media (max-width:510px) {
        width: 90%;
    }

    @media (max-width:349px){
        width: 100%;
    }

    


`

export const ShareDiv = styled.div`
    width: 50%;
    height: 100%;
    /* border: 1px solid darkblue; */
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width:697px) {
       height: 50%;
    }

    @media (max-width:697px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }

    @media (max-width:692px) {
        width: 60%;
    }

    @media (max-width:510px) {
        width: 90%;
    }

    @media (max-width:349px){
        width: 100%;
    }

`


export const TagsPi = styled.a`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid red; */

    @media (max-width:692px) {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    }
`

export const HR = styled.hr`
    width: 50px;
    color: black;
    background-color: black;
    height: 3px;

    @media (max-width:318px) {
        width: 20px;
    }
`

export const MuiFacebookIcon = styled(FacebookIcon)`
    color: gray !important;
    cursor: pointer;

    &:hover{
        color: #4267B2 !important;
    }
`


export const MuiInstagramIcon = styled(InstagramIcon)`
    color: gray !important;
    cursor: pointer;

    &:hover{
        color: #833AB4 !important;
    }
`


export const MuiTwitterIcon = styled(TwitterIcon)`
    cursor: pointer;
    color: gray !important;

    &:hover{
        color: #1D9BF0 !important;
    }
`

export const FormDiv = styled.div`
    width: 100%;
    height: 660px;
    border: none;
    border-top: 1px solid gray;
    /* border-bottom: 1px solid gray; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ReplyDiv = styled.div`
    width: 100%;
    height: 70px;
    /* border: 1px solid pink; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const ReplyH1 = styled.h1`
    color: black;
    
    @media (max-width:408px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
    }
`

export const ReplyPi1 = styled.p`
    color: black;

    @media (max-width:629px) {
        margin: 0px 0px 0px 20px;
    }

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
    }

    
`


export const ReplyPi = styled.p`
    color: black;

    @media (max-width:629px) {
        margin: 0px 0px 0px 20px;

        @media (max-width:641px) {
            margin: 15px 0px 0px 0px;
        }

        @media (max-width:408px) {
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
    }
    }

    
`

export const InputDiv = styled.div`
    width: 100%;
    height: 400px;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const NameInp = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    border-bottom:1px solid gray;
    padding: 10px;
    font-size: 15px;
    outline: none;
`

export const EmailInp = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    border-bottom:1px solid gray;
    padding: 10px;
    font-size: 15px;
    outline: none;

`

export const WebsiteInp = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    border-bottom:1px solid gray;
    padding: 10px;
    font-size: 15px;
    outline: none;

`

export const ChexboxAndTextDiv = styled.div`
    width: 89%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */

    @media (max-width:713px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;

    @media (max-width:700px) {
        width: 25px;
        height: 25px;
    }
`

export const CommentInpDiv = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Label = styled.label`
    color: gray;
    padding: 10px;
    
`
export const ComentInp = styled.input`
    width: 100%;
    border: none;
    border-bottom:1px solid gray;
    outline: none;
    padding: 10px;
    font-size: 15px;

`

export const PostComment = styled(Button)`
    width: 197px !important;
    height: 53px !important;
    background-color: black !important;
    color: white !important;
    font-weight: 700 !important;
    font-size: 16px !important;

   @media (max-width:408px) {
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
   }
`

//COMENTS START =============================================

export const Coments = styled.div`
    width: 100%;
    height: 450px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;


    @media (max-width:602px) {
        height: 550px;
    }

     @media (max-width:506px) {
        margin-top: 20px;
    }

`

export const ComentsText = styled.h1`
    width: 100%;
    height: 50px;
    font-weight: 400;
    font-size: 26px;
    /* border: 1px solid orangered; */

    @media (max-width:408px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
   }
`

export const ForstComment = styled.div`
    width: 100%;
    height: 100px;
    /* border: 1px solid blue; */
    display: flex;

    @media (max-width:602px) {
        height: 150px;
    }

    @media (max-width:408px) {
        height: auto;
    }

    &:nth-child(3){
        width: 90%;
    height: 100px;
    /* border: 1px solid red; */
    display: flex;

    @media (max-width:602px) {
        height: 150px;
    }

    @media (max-width:400px) {
        height: 200px;
    }

    @media (max-width:408px) {
        height: auto;
    }
    }
`



export const Avatar1 = styled.div`
    width: 90px;
    height: 100%;
    /* border: 1px solid ridge; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const AvatarImg1 = styled.img`
    width:70px;
    height: 70px;
    border-radius: 5px;
`

export const Comment = styled.div`
    width: calc(100% - 90px);
    height: 100%;
    /* border: 1px solid black; */
`

export const CommentName = styled.div`
    width: 100%;
    height: 35px;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:506px) {
        height: 50px;
    }

    @media (max-width:408px) {
        height: auto;
    }
`

export const CommentParagraf = styled.div`
    width: 100%;
    height: calc(100% - 35px);
    /* border: 1px solid rgb(123,44,44,44); */
    display: flex;
    align-items: flex-end;

    @media (max-width:506px) {
        height:calc(100% - 50px);
    }

    @media (max-width:400px) {
        height: calc(100% - 70px);
    }

    @media (max-width:408px) {
        height: auto;
    }

`

export const Name = styled.h2`
    width: 250px;
    height: auto;
    color: black;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid rgb(123,44,44,44); */

    @media (max-width:506px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width:408px) {
        font-size: 17px;
    }

`

export const Date = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: gray;

    @media (max-width:679px) {
        display: none;
    }

    @media (max-width:678px) {
        display: block;
    }
`

export const ReplyIconAndTextDiv = styled.div`
    width: 270px;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10px 0px 0px;

    @media (max-width:690px) {
        width: auto;
    }
`

export const MuiReplyIcon = styled(ReplyIcon)`
    color: gray !important;
    cursor: pointer;

    &:hover{
        color: black !important;
    }
`
export const ReplyComment = styled.p`
    color: gray;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;


    @media (max-width:408px) {
        font-size: 12px;
    }
`

export const  SecondComment = styled.div`
    width: 90%;
    height: 100px;
    /* border: 1px solid red; */
    display: flex;

    @media (max-width:602px) {
        height: 150px;
    }

    @media (max-width:400px) {
        height: 200px;
    }

    @media (max-width:408px) {
        height: auto;
    }

`

export const COmmentName2 = styled.div`
     width: 100%;
    height: 35px;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:506px) {
        height: 50px;
    }

    @media (max-width:408px) {
        height: auto;
    }
`

export const ReplyIconAndTextDiv2 = styled.div`
    width: 200px;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 10px 0px 0px;


    @media (max-width:690px) {
        width: auto;
    }

    @media (max-width:408px) {
        height: auto;
    }

`






