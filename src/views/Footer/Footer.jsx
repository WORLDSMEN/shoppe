import React from 'react';
import IconF from './../../views/Footer/photo/IconColor.svg';

import {Container, Hr, Footerend, Left, H1, Right,  Righth1, ArrowRightAltIcon1, Number, Numberh1, Div, Icondiv, FacebookOutlinedIcon1,  TwitterIcon1, InstagramIcon1, LinkedInIcon1, Footerend2, Left2, Right2, Righth12, H12, Div2, Hr2, Hr22, Divtext, TextH1, Divfollow, Followh1, Followhr, FacebookOutlinedIcon123, InstagramIcon123, TwitterIcon123, Number2, Numberh12, IconFooter, ArrowRightAltIcon123,} from "./StyleFooter";

//import mui-icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Input } from '@mui/material';



const Footer = () => {
  return (
    <Container>

       <Hr></Hr>

      <Footerend>
        <Left>
          <H1>CONTACT</H1>
          <H1>TERMS OF SERVICES</H1>
          <H1>SHIPPING AND RETURNS</H1>
        </Left>
        <Right>
          <Righth1>Give an email, get the newsletter.</Righth1>
          <ArrowRightAltIcon1></ArrowRightAltIcon1>
        </Right>
       </Footerend>

          <Div>
            <Hr2></Hr2>
          </Div>

      <Footerend2>
        <Right2>
          <Righth12>Give an email, get the newsletter.</Righth12>
          <ArrowRightAltIcon123></ArrowRightAltIcon123>
        </Right2>
          <Div2>
            <Hr22></Hr22>
          </Div2>
          <Divtext>
            <input type="checkbox" />
            <TextH1>i agree to the website’s terms and conditions</TextH1>
          </Divtext>
        <Left2>
          <H12>CONTACT</H12>
          <H12>TERMS OF SERVICES</H12>
          <H12>SHIPPING AND RETURNS</H12>
        </Left2>
       </Footerend2>

       <Divfollow>
         <Followh1>Follow us</Followh1>
         <Followhr>
         </Followhr>
          <IconFooter src={IconF}/>
          <InstagramIcon123>
          </InstagramIcon123>
          <TwitterIcon123>
          </TwitterIcon123>
       </Divfollow>

          <Icondiv>
             <FacebookOutlinedIcon1 onClick={()=>window.open('https://ru-ru.facebook.com')}>
             </FacebookOutlinedIcon1>
            <InstagramIcon1 onClick={()=>window.open('https://download-instagram.ru/kak-zaregistrirovatsya-v-instagram.html')}>
            </InstagramIcon1>
            <LinkedInIcon1 onClick={()=>window.open('https://www.linkedin.com/login/ru')}>
            </LinkedInIcon1>
            <TwitterIcon1 onClick={()=>window.open('https://download-instagram.ru/kak-zaregistrirovatsya-v-instagram.html')}>
            </TwitterIcon1>
          </Icondiv>

       <Number2>
         <Numberh12>© 2021 Shelly. Terms of use and privacy policy.</Numberh12>
       </Number2>

       <Number>
         <Numberh1>© 2021 Shelly. <span>Terms of use</span> and <span>privacy policy</span>.</Numberh1>
       </Number>
    </Container>
  );
}

export default Footer;
