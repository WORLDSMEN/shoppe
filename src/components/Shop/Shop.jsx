import React, { useEffect, useState } from 'react';
import {  Div1,InpDiv,MySearchIcon, MainDiv, PriceDiv, Sale, Stock, CardBox , ProdactsDiv, Box, Card, InfoDiv, ProdactName, Price, CardImage, SearchDiv, Link3, SliderDiv,  } from './StyleShop';
import Select1 from '../Select/Select';
import Select2 from '../Select2/Select2';
//import Slider from '../Slider/Slider';
import Switch from '../Switch/Switch';
import Switch2 from '../Switch2/Switch2';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import axios from "axios";
import MultiRangeSlider from './MultiRangeSlider';
//import { Container } from '@mui/material';
import {ShopData} from '../../../src/components/Shop/ShopData.js';
// const API = 'http://10.10.7.109:8000/api/product/latest/';


const Shop = () => {
const [data, setData] = useState([]);

useEffect(() => {
  axios.get(ShopData).then(res=>{
    setData(res.data)
    console.log( res.data);
  })
}, [])


  return (
    <MainDiv>
      
      <SearchDiv>
        <h1>Shop</h1><br />
        <div>
            < FormatLineSpacingIcon/>
            <h3>Filters</h3>
        </div>
      </SearchDiv>

      <Div1 >
      <h1>Shop The Latest</h1>
        <InpDiv>
          <input type="text" placeholder='Search...' />
        <MySearchIcon/>

        </InpDiv>
        <Select1/>
        <Select2/>
        <SliderDiv>

          <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
          {/* <Slider/>
             */}
        </SliderDiv>
          <PriceDiv>Price:  $  
        <p>Filter</p>
        </PriceDiv>
        <br />
        <Sale>
          <h3>On sale</h3>
        <Switch/>
        </Sale>
        <br /><br />
        <Stock>
          <h3>In stock</h3>
          <Switch2/>
        </Stock>
      </Div1>
  
      <CardBox>
        <ProdactsDiv>
          {
            ShopData?.map((item,index)=>{
              return(
              <Box key={index}>
                <Card>
                  {/* <CardImage src={`http://10.10.7.109:8000${item.img_1}`} alt='xato'/> */}
                  <CardImage src={item.img}/>
                </Card>
                <InfoDiv>
                    <Link3 to='/product'>
                      <ProdactName>{item.namee}</ProdactName>
                    </Link3>
                  <Price>${item.price},00</Price><br /><br /><br />
                </InfoDiv>
              </Box>
              )
            })
          }
        </ProdactsDiv>

        
            
      </CardBox>
    </MainDiv>
  );
}

export default Shop;