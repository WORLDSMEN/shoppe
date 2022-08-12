import React, { useContext, useEffect, useState } from 'react'

import { Context as Mycontext } from '../../components/Context/Context'

import Header from '../../components/Homepage/Header'

// import Blog from "../../components/Blog/Blog"
// import {LINKEDIN} from "../../assets/icons/icon"


  //Axios import
  import axios from "axios"

  //import component
  import { Container, Centertop, Navbar, Left, H1, Right, H3, Centerend, Img, Center2, Div, Divh1, Divp, Button, Div2, Img222, Divh122, Divnumber2, Navdiv, Homenavbar, Link33,} from "./StyleHome"

    // Photo import
    import Rasm1 from "./jewellery photo/Img 01.png"
    import Rasm2 from "./jewellery photo/Img 02.png"
    import Rasm3 from "./jewellery photo/Img 04.png"
    import Rasm5 from "./jewellery photo/7.jpg"
    import Rasm7 from "./jewellery photo/Img 07.png"
    import Rasm05 from "./jewellery photo/Img 05.png"

    import {ApiData} from './data/API'

  // import Swipper
  import Swipperslide from "./Swipper-Slide/Swipper"
  import { Link3 } from '../../views/Navbar/StyleNavbar'

 //Api import
const API = "http://10.10.7.109:8000/api/product/latest/"

let localdata = []

const Homepage = () => {

 // Start Local Storage
 function name1(item) {

    localdata.push(item)
    localStorage.setItem("order",JSON.stringify(localdata))
  }
 // End Local Storage

    const [data, setData] = useState([]);
      useEffect(() => {

        axios.get(API)
        .then(res =>{
          setData(res.data)
          // console.log('shaxri',res.data);
        })
      }, []);

     //End API ulash

const {olma ,setOlma} = useContext(Mycontext)
// console.log(id);

  return (

    <Container>

     <Header />

    <Centertop>
       {/* <h1>Shop</h1> */}
       <Swipperslide />
    </Centertop>

    <Navbar>
       <Left>
         <H1> Shop The Latest</H1>
       </Left>
       <Right>
         <H3>View All</H3>
       </Right>
    </Navbar>

     <Centerend>
        <Homenavbar>

        {
               ApiData.filter((item)=>{
                if (olma == "") {
                    return item
                }
                else if (item.name.toLowerCase().includes(olma.toLowerCase())){
                    return item
                }

              }).map((item,index)=>{
                return(

                  <Navdiv key={index}>
                    <Div2>
                    <Link33 to='/product'>
                      <Img222 src= {item.img} />
                    </Link33>
                      <button>ADD TO CART</button>
                      <button onClick={()=>name1(item)}>ADD TO CART</button>
                    </Div2>
                    <Divnumber2>
                      <Divh1> {item.name}</Divh1>
                      {/* <Divh1> {item.color}</Divh1> */}
                      <Divp>$ {item.price}</Divp>
                    </Divnumber2>
                  </Navdiv>
                )
              })
            }

         {/* {
             data?.map((item,index)=>{
              return(
           <Navdiv key={index}>
             <Div2>
             <Link33 to='/product'>
               <Img222 src={`http://10.10.7.109:8000${item.img_1}`} alt="" />
             </Link33>
               <button onClick={()=>name1(item)}>ADD TO CART</button>
             </Div2>
            <Divnumber2>
             <Divh1>{item.name}</Divh1>
             <Divp>{item.price}</Divp>
            </Divnumber2>
          </Navdiv>
        )
      })
    } */}

        </Homenavbar>
     </Centerend>
   </Container>
  )
}

export default Homepage