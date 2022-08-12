import React, { useEffect, useState } from 'react'
import { Container, Ul, Swiperr,PP,Listyled,Flexdiv, Box3, Con, Zvezda, Lorem, Buttons, Brendlar, Box1, CategoriPage, ButtonsFill, MapContainer, MapTitle, MapDate, Zvezdaa, DivZvez, BoxMap2, SwiperDiv, Prodiv, Prodiv1, Mapdiv, LoremDiv, DivScar, Qarobka, Form, Checkbox, MyButton, Buttonss, Mybutton, Mybuttonn, FoterDiv, PriceProduct, Foterdiv1 } from './style'
import axios from 'axios'
import Reyting from '../Product/Reyting'
import Reyting1 from '../Product/Reyting1'
import ButtonMui from './ButtonMui'

// import * as React from 'react';
import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

// import Reyting from '../../components/Product/Reyting'
import { ProductData1,ProductData2 } from './data/Data'
import Proswipper from '../../components/Product/Proswipper'
const Product = () => {
    const [price, setPrice] = useState(ProductData1)
    const [data, setData] = useState([])
    const [data11, setData1] = useState({})
    const [data22, setData2] = useState({})
    const [data33, setData3] = useState({})

    //Count 
    const [count, setCount] = useState(1)

    let Increase = ()=>{
        setCount(count + 1)
    }

    
    let Decrease = ()=>{
        setCount(count - 1)
    }

    let API1 = 'http://10.10.7.109:8000/api/product_id/9'
    let API = 'http://10.10.7.109:8000/api/product_id/1'
    let APIid4 = 'http://10.10.7.109:8000/api/product_id/4'
    let APIid5 = 'http://10.10.7.109:8000/api/product_id/5'
    
    const [review, setReview] = useState("")
    const [firsname, setFirsname] = useState("")
    const [gmail, setGmail] = useState("")
    const [rating, setRating] = useState("")


    // const Posting = ()=> {
    //     var formdata = new FormData();
    //     formdata.append('review' ,review)
    //     formdata.append('first_name',firsname)
    //     formdata.append('email',gmail)
    //     formdata.append('rating',rating)



    //     var config = {
    //         method: 'post',
    //         url: '10.10.7.109:8000/api/post-review/',
    //         headers: { 
    //           'Authorization': 'token e1a8d41f35456494ef403f54a90499afb15f690e', 
             
    //         },
    //         data : formdata
    //       };
          
    //       axios(config)
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //       })

    // }




   
    useEffect(() => {
        axios.get(API).then(res => {
            setData(res.data)
            // console.log("sanjarrrrr", res.data);
        })

        axios.get(API1).then(res => {
            setData1(res.data)
            // console.log("qwerrrrr", res.data);
            
        })    

        axios.get(APIid4).then(res=>{
            setData2(res.data)
            // console.log(res.data);
        })

        axios.get(APIid5).then(res=> {
            setData3(res.data)
            // console.log(res.data);
        })
    }, [])


    console.log(ProductData1);
    console.log(ProductData2);




    const Filtertovar1 = (event) => {
        // let Type = event.target
        let Product1 = ProductData1[3].filter((e) => e.type == event)
        console.log(Product1);
        setPrice(Product1)
    }
    const [num, setNum] = useState(1)
    const handleNum = (p) => {
        setNum(p)
    }
    return (
        <Container>
            <div>
                {
                    ProductData1[1].map((itim, index) => {
                        return (
                            <Box1>
                                <Ul>
                                    <li><img src={itim.img} alt="" /></li>
                                </Ul>
                            </Box1>

                        )
                    })
                }
            </div>

            <SwiperDiv>
                <Proswipper />
            </SwiperDiv>

            <Box3>
                {
                    ProductData1[2].map((e, i) => {
                        return (
                            <Con>
                                <h2>{e.name}</h2>
                                <p>{e.price}.00</p>
                                {/* <p><img src={`http://10.10.7.109:8000${data.img_1}`} alt="" /></p> */}
                                <Zvezda>
                                    <Reyting/>
                                    {/* <p><img src={e.img} alt="" /></p>
                                    <p><img src={e.img} alt="" /></p>
                                    <p><img src={e.img} alt="" /></p>
                                    <p><img src={e.img} alt="" /></p>
                                    <p><img src={e.img} alt="" /></p> */}
                                    <p>1 customer review</p>


                                </Zvezda>
                                <Lorem>
                                    <p>{e.text}</p>

                                </Lorem>
                                <Buttons>
                                    <button onClick={Decrease}>-</button>
                                    <span>{count}</span>
                                    <button onClick={Increase}>+</button>

                                    <button>ADD TO CART</button>
                                </Buttons>
                                <Brendlar>
                                    <img src={e.img1} alt="" />
                                    |
                                    <img src={e.img2} alt="" />
                                    <img src={e.img3} alt="" />
                                    <img src={e.img4} alt="" />
                                    <img src={e.img5} alt="" />




                                </Brendlar>
                                <p>SKU:  <span style={{ color: '#707070' }}>12</span></p>
                                <p>Categories: <span style={{ color: '#707070' }}>Fashion, Style</span></p>

                            </Con>
                        )
                    })
                }
            </Box3>
            <CategoriPage>
                <ButtonsFill>

                   
                    <button onClick={() => handleNum(1)}>Description</button>
                    <button onClick={() => handleNum(2)}>Aditional</button>
                    <button onClick={() => handleNum(3)}>Reviews(0)</button>
                </ButtonsFill>
                <div>{num === 1 ? <div>
                    {
                        <PP>{data.text}</PP>
                    }
                </div> : num === 2 ? <div>
                    <ul>
                        <Listyled>Weight:<span>{data.weight}</span></Listyled>
                        <Listyled>Dimention:<span>{data.dimensions}</span></Listyled>
                        <Listyled>Colurs:<span>{data.colors[0].name}</span></Listyled>
                        <Listyled>Material:<span>{data.material}</span></Listyled>

                    </ul>
                </div> : <Flexdiv>
                    <div style={{width:'50%',height:'100%'}}>
                        {
                            ProductData2?.map((item,index)=>{
                                return(
                                    <Mapdiv>
                                        <h3>{item.name}</h3>
                                        <Prodiv1>
                                            <h3>{item.date}</h3>
                                            <p>{item.data}</p>
                                        </Prodiv1>
                                            <Reyting1/>
                                            <LoremDiv>
                                              <p>{data.text}</p>
                                              <hr style={{width:'50%',marginTop:'20px'}} />
                                                <DivScar>
                                              <h3>{item.scalet}</h3>
                                                <p>{item.data2}</p>
                                                </DivScar>
                                            <Reyting1/>
                                                <p style={{marginTop:'20px'}}>{data.text}</p>
                                            </LoremDiv>

                                    </Mapdiv>
                                )
                            })
                        }
                    </div>
                    <div style={{width:'50%'}}>
                        {
                            ProductData2?.map((item,index)=>{
                                return(
                                      <Qarobka>
                                            <h3>{item.name1}</h3>
                                            <p style={{color:' #707070'}}>{item.label}</p>

                                            <div>
                                               <Form action="">
                                                <label style={{color:'#707070'}} htmlFor="">Your Review*</label>
                                                <input type="text" onChange={(e)=>{setReview(e.target.value)}} />
                                                <label style={{color:'#707070'}}htmlFor="">Enter your name*</label>
                                                <input type="text" onChange={(e)=>{setFirsname(e.target.value)}}/>
                                                <label style={{color:'#707070'}} htmlFor="">Enter your Email*</label>
                                                <input type="text"onChange={(e)=>{setGmail(e.target.value)}} />

                                               </Form>
                                            </div>
                                      </Qarobka>  
                                )
                            })
                        }
                        <Checkbox>
                            <input type="Checkbox" />
                            <p>Save my name, email, and website in this browser for the next time I comment</p>
                        </Checkbox>
                            <div style={{marginTop:'30px',color:'#707070'}}>
                                <p>Your Rating*</p>
                                <div style={{marginTop:'30px'}}>
                                {/* <Reyting1/> */}
                                <Rating onChange={(e)=>{setRating(e.target.value)}}/>
                                <Buttonss style={{height:'100px'}}>

                                    {/* <Mybuttonn onClick={Posting}>Submit</Mybuttonn> */}
                                </Buttonss>
                                    {/* <ButtonMui/> */}
                                </div>
                            </div>
                    </div>
                    
                    </Flexdiv>}</div>
                <div>
                    {
                        price && price?.map((e, i) => {
                            return (
                                <MapContainer>
                                    <div>
                                        <MapTitle>
                                            <p>{e.title}</p>

                                        </MapTitle>
                                        <MapDate>
                                            <p>{e.date}</p>

                                        </MapDate>
                                        <p>{e.colorurs}</p>
                                        <p>{e.mater}</p>
                                        <div>
                                            <h2>{e.titlee}</h2>
                                            <h2>{e.witch}</h2>
                                            <Zvezdaa>
                                                <p><img src={e.img} alt="" /></p>
                                                <p><img src={e.img} alt="" /></p>
                                                <p><img src={e.img} alt="" /></p>
                                                <p><img src={e.img1} alt="" /></p>
                                                <p><img src={e.img1} alt="" /></p>
                                            </Zvezdaa>
                                            <p>{e.lorem}</p>
                                            {/* <hr /> */}
                                            <h2>{e.witchh}</h2>
                                            <DivZvez>
                                                <p><img src={e.img} alt="" /></p>
                                                 <p><img src={e.img} alt="" /></p>
                                                <p><img src={e.img} alt="" /></p>
                                                <p><img src={e.img1} alt="" /></p>
                                                <p><img src={e.img1} alt="" /></p>
                                            </DivZvez>
                                            <p>{e.loremm}</p>
                                        </div>
                                    </div>
                                    <BoxMap2>
                                        {/* <h1>q</h1> */}
                                    </BoxMap2>
                                </MapContainer>


                            )
                        })
                    }
                </div>
            </CategoriPage>
                <div>
                <h2>Similar Items</h2>

                </div>
            <FoterDiv>
               <Foterdiv1>
                <img src={'http://10.10.7.109:8000'+data11.img_1} alt="" />
                <h3>{data11.name}</h3>
                <PriceProduct>${data11.price}.00</PriceProduct>
               </Foterdiv1>
               <Foterdiv1>
                    <img src={'http://10.10.7.109:8000'+data22.img_1} alt="" />
                    <h3>{data22.name}</h3>
                    <PriceProduct>${data22.price}.00</PriceProduct>
               </Foterdiv1>
               <Foterdiv1>
               <img src={'http://10.10.7.109:8000'+data33.img_1} alt="" />
               <h3>{data33.name}</h3>
               <PriceProduct>${data33.price}.00</PriceProduct>

               </Foterdiv1>
                
            </FoterDiv>
        </Container>
    )
}

export default Product