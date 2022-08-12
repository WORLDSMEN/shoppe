import React, { useState } from 'react'
import { BorderDiv, BoxImage, BoxTexts, CartBox, CartsWrapper, CloseBtn, Container, Counter, FirstButtons, FirstControl, FirstDiv, FirstInput, FuncWrappper, InputDiv, SecondDiv, SecondTitle, SelectDiv, Selects, TextDiv, Title } from './style'

import { LocalData } from '../../api/cartData'

const Cart = () => {

  const [count, setCount] = useState(0)

  return (
    <Container>
      <Title>Shopping Cart</Title>  
      <FuncWrappper> 
        <FirstDiv>
          <CartsWrapper>

            {
              LocalData.map((item,index)=>{
                return(
                  <CartBox key={index}>
                    <BoxImage src={item.img} alt="" />
                    <BoxTexts>
                      <h1>{item.title}</h1>
                      <h2>{item.color}</h2>
                      <p>$ {item.price}</p>
                    </BoxTexts>
                    <Counter>
                      <p>-</p>
                      <p>{item.count}</p>
                      <p>+</p>
                    </Counter>
                    <CloseBtn/>
                    <BorderDiv></BorderDiv>
                  </CartBox>
                )
              })
            }

          </CartsWrapper>
          <FirstControl>
            <FirstInput>
              <input type="text" placeholder='Coupon Code' />
            </FirstInput>
            <FirstButtons>
              <button className='firstBtn'>UPDATE CART</button>
              <button className='secondBtn'>APPLY COUPON</button>
            </FirstButtons>
          </FirstControl>
        </FirstDiv>
        <SecondDiv>
          <SecondTitle>Cart totals</SecondTitle>
          <TextDiv>
            <h1>SUBTOTAL</h1>
            <p>$ 65,00</p>
          </TextDiv>
          <TextDiv>
            <h1>SHIPPING</h1>
            <p>Shipping costs will be calculated once you have provided address.</p>
          </TextDiv>
          <SelectDiv>
            <Selects>
              <h1>CALCULATE SHIPPING</h1>
              <select name="" id="">
                <option value="">s.th</option>
                <option value="">s.th</option>
                <option value="">s.th</option>
              </select>
              <select name="" id="">
                <option value="">s.th</option>
                <option value="">s.th</option>
                <option value="">s.th</option>
              </select>
              <select name="" id="">
                <option value="">s.th</option>
                <option value="">s.th</option>
                <option value="">s.th</option>
              </select>
            </Selects>
          </SelectDiv>
        </SecondDiv>
      </FuncWrappper>
    </Container>
  )
}

export default Cart