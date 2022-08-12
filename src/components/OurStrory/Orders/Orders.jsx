import React from 'react'
import { DadeTop, Ors, LittleText, OrderGrid } from './style';
import Or from '../Orders/Order'




const Orders = () => {
  return (
    <OrderGrid>
      <DadeTop>
        <LittleText><h4>ORDER NUMBER</h4></LittleText>
        <LittleText><h4>DATE</h4></LittleText>
        <LittleText><h4>STATUS</h4></LittleText>
        <LittleText><h4>TOTAL</h4></LittleText>
        <LittleText><h4>ACTIONS</h4></LittleText>
      </DadeTop>
      <DadeTop>
        <LittleText>7643980998990</LittleText>
        <LittleText>October 8,2021</LittleText>
        <LittleText>STATUDelivered</LittleText>
        <LittleText>$ 105</LittleText>
        <LittleText><span>View Order</span></LittleText>
      </DadeTop>
      <DadeTop>
        <LittleText>943980998990</LittleText>
        <LittleText>October 8,2021</LittleText>
        <LittleText>Processing</LittleText>
        <LittleText>$ 100</LittleText>
        <LittleText><span>View Order</span></LittleText>
      </DadeTop>
      <DadeTop>
        <LittleText>879980998990</LittleText>
        <LittleText>October 8,2020</LittleText>
        <LittleText>STATUDelivered</LittleText>
        <LittleText>$ 65</LittleText>
        <LittleText><span>View Order</span></LittleText>
      </DadeTop>
      <Ors>
        <Or/>
      </Ors>
      <Ors>
        <Or/>
      </Ors>
      <Ors>
        <Or/>
      </Ors>
    </OrderGrid>
    )
  }
  
  export default Orders




  // <OrderCenter>
  //   <Order>
  //     <h4>No order has been made yet.</h4>
  //     <span>BROWSE PRODUCT</span>
  //   </Order>
  // </OrderCenter>