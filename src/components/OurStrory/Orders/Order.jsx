import React from 'react'
import { ORLeft, ORRight, Wrapper } from './orderstyle'

const Order = () => {
  return (
    <Wrapper>
      <ORLeft>
        <h3>ORDER NUMBER</h3>
        <h3>DATE</h3>
        <h3>STATUS</h3>
        <h3>TOTAL</h3>
        <h3>ACTIONS</h3>
      </ORLeft>
      <ORRight>
        <h3>7643980998990</h3>
        <h3>October 8,2021</h3>
        <h3>Delivered</h3>
        <h3>$ 105</h3>
        <h3><span>View Order | Download</span></h3>
      </ORRight>
    </Wrapper>
  )
}

export default Order