import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import Search from '../../assets/icons/Search.png'
import {DataBlog } from '../../components/Blog/Data/ProducData'
import Panigation from '../Blog/Panaigation'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Text1,Inpdiv,Categoriya,Input2,Categoriya2, ProductData, Card, Tovar, TextData } from './style'

const Blog = () => {
  let API = 'http://10.10.7.109:8000/api/get-blog/1/'

  console.log(DataBlog);
  const [catigoriya, setCatigoriya] = useState(DataBlog)
  const [fcat, setFcat] = useState(DataBlog)
  const [data, setData] = useState([])

  const Filtertovar = (event)=> {
      // let Type = event.target
      let Product = DataBlog.filter((e)=> e.type == event)

      console.log(Product);
        setFcat(Product)

  }

  useEffect(() => {
    axios.get(API).then(res=>{
      setData(res.data)
      console.log("sanjarrrrr",res.data);
    })
  }, [])


  return (
    <Container>
        <Text1>
            <h1>Blog</h1>
            <Inpdiv>
              <input type="text"placeholder='Search' />
              <img src={Search} alt="" />
            </Inpdiv>

            <Categoriya>

                <h2>Categories</h2>
                <button onClick={()=>Filtertovar("Fashion")} >Fashion</button>
                <button onClick={()=>Filtertovar("Style")}>Style</button>
                <button onClick={()=>Filtertovar("Accessories")} >Accessories</button>
                <button onClick={()=>Filtertovar("Season")}>Season</button>
            </Categoriya>
        </Text1>
{/* 903699594 */}
        <ProductData>
         {
          fcat &&fcat.map((itim,index)=>{
            return(
              <Card>
                <Link to={`/blogsingle`}><img src={itim.img} alt="" /></Link>
                  <Tovar>
                    <p>{data.date}</p>
                    <h3>{data.name}</h3>
                    <TextData>{data.text}</TextData>
                    <button>Read More</button>
                  </Tovar>

              </Card>

            )
          })
         }


          <Categoriya2>
                <h2>Categories</h2>
                <button id='Fash'>Fashion</button>
                <button id='Sty'>Style</button>
                <button id='Acc'>Accessories</button>
                <button id='Sea'>Season</button>
            </Categoriya2>
         <Panigation/>

        </ProductData>
    </Container>
  )
}

export default Blog
