///New

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";


// import required modules
import { Scrollbar } from "swiper";


//import data
import {ProductData1} from '../Product/data/Data'
import { Img } from "./styleSwiper";


export default function App() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {
          ProductData1[1]?.map((iteem,index)=>{
            return(
              <SwiperSlide >
                <Img src={iteem.img} alt="Kok" />
              </SwiperSlide>  
            )
          })
        }
      </Swiper>
    </>
  );
}





// import React, { useEffect, useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import style from '../../components/Product/style/swipper.module.css'
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";
// import axios from 'axios'
// import {ProductData1} from '../Product/data/Data'
// // import "./styles.css";

// // import required modules
// import { Scrollbar } from "swiper";

// export default function App() {
// let API = 'http://10.10.7.109:8000/api/product_id/1'
// const [data, setDataa] = useState([])
//  useEffect(() => {
//     axios.get(API).then(res=>{
//       setDataa(res.data)
//       console.log("sani",res.data);
//     })
//  }, [])
 
// console.log(ProductData1); 

//   return (
//     <>
//    {
//     ProductData1[1]?.map((item,index)=>{
//       return(
//         <Swiper 
//         scrollbar={{
//           hide: true,
//         }}
//         modules={[Scrollbar]}
//         className={style.mySwiperr}
//       >
//         <SwiperSlide className={style.Swipperdiv}><img src={item.img} alt="" /></SwiperSlide>
//         {/* <SwiperSlide><img src={`http://10.10.7.109:8000${data.img_1}`} alt="" /></SwiperSlide> */}
//         {/* <SwiperSlide><img src={`http://10.10.7.109:8000${data.img_2}`} alt="" /></SwiperSlide> */}
//         {/* <SwiperSlide><img src={`http://10.10.7.109:8000${data.img_3}`} alt="" /></SwiperSlide> */}
//         {/* <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide> */}
//       </Swiper>
//       )
//     })
//    }
//     </>
//   );
// }