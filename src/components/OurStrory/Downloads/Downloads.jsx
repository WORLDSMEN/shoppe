import React, { useState } from 'react'
import {OrderGrid,DadeTop,LittleText,Ors } from './style';
import Or from '../Orders/Order'
// var axios = require('axios');



 const Downloads = () => {

//   const getRecuest = ()=>{
//     var config = {
//       method: 'get',
//       url: 'http://10.10.7.109:8000/api/get-order/',
//       headers: { 
//         'Authorization': 'token e1a8d41f35456494ef403f54a90499afb15f690e'
//       }
//     };
    
//     axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
  return (
    <OrderGrid>
      
          
            <DadeTop>
              <LittleText><h4>{}ORDER NUMBER</h4></LittleText>
              <LittleText><h4>DATE</h4></LittleText>
              <LittleText><h4>STATUS</h4></LittleText>
              <LittleText><h4>TOTAL</h4></LittleText>
              <LittleText><h4>ACTIONS</h4></LittleText>
            </DadeTop>
        
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
        <LittleText><span>View </span></LittleText>
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
  
  export default Downloads



  // <DownloadCenter>
  //   <Download>
  //     <h4>No order has been made yet.</h4>
  //     <span>BROWSE PRODUCT</span>
  //   </Download>
  // </DownloadCenter>