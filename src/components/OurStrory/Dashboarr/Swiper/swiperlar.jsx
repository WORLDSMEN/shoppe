import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Outlet,Routes,Route,} from "react-router-dom"
// import './../../../../../src/app.css';

// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Center } from "../style";


export default function App() {
  const [Color, setColor] = useState('dashboard')
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        slidesPerGroup={6}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}} to="">Dashboard</SwiperSlide>
        <SwiperSlide onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}} to="">Orders</SwiperSlide>
        <SwiperSlide onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}} to="">Downloads</SwiperSlide>
        <SwiperSlide onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}} to="">Addresses</SwiperSlide>
        <SwiperSlide onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}} to="">Account details</SwiperSlide>
        <SwiperSlide onClick={()=>setColor('dashboard')} style={{color:Color==='dashboard' ? '#070707' : '#707070'}} to="">Logout</SwiperSlide>
        
          {/* <Outlet/> */}
        
      </Swiper>
    </>
  );
}
