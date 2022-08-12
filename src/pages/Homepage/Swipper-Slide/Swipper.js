 // Import useref, useState
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

import { Div, H1, H3, Button } from "./StyleSwipper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./StyleSwip.css"

// import required modules
import { Navigation,Autoplay,Pagination } from "swiper";

  // Photo import
  import Rasm from "../Phone/rasm.png";
  import Rasm2 from "../Phone/rasm2.png";
  import Rasm3 from "../Phone/rasm3.png";
  import Rasm4 from "../Phone/rasm4.png";
// import { Navigation } from "@mui/icons-material";


export default function App() {
  return (
    <>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      style={{width:'100%'}}
      autoplay={{
        delay:3500,
        disableOnInteraction:false
      }}
      pagination={{
        clickable:true
      }}
      navigation={true}
      modules={[Autoplay, Pagination,Navigation]}
      className="header__slider"
      >
        <SwiperSlide>
          <Div className="slider__item"
          style={{background:`url(${Rasm})`}}>
            <H1>Gold big hoops </H1>
            <H3>$ 68,00</H3>
            <Button>View Product</Button>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div className="slider__item"
          style={{background:`url(${Rasm2}),left top`}}>
             <H1>Gold big hoops </H1>
             <H3>$ 68,00</H3>
             <Button>View Product</Button>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div className="slider__item"
          style={{background:`url(${Rasm3}),left top`}}>
              <H1>Gold big hoops </H1>
              <H3>$ 68,00</H3>
              <Button>View Product</Button>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div className="slider__item"
          style={{background:`url(${Rasm4}),left top`}}>
              <H1>Gold big hoops </H1>
              <H3>$ 68,00</H3>
              <Button>View Product</Button>
          </Div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
