import axios from 'axios'
import React from 'react'
import { Deatails,LittleRight1,LittleRight2, LeftWrapp, LittleDiv,LittleDiv1, LittleRight, OrderLeft, OrderRight, Product, RightWrapp, TextLeft, TextRight, Total, WrapperOrder } from './style'


// const ApiOrder = 'http://10.10.7.109:8000/api/get-orderitem/'




const Order1 = () => {

  // const [order, setOrder] = useState([])


  // useEffect(() => {
  //   axios.get(ApiOrder)
  //   .then(res=>{
  //     setOrder(res.data)
  //   })
  
  // }, [])
  // const IsLoggendIn = this.state.IsLoggendIn;
  return (

    <WrapperOrder>
      {/* <>
      {IsLoggendIn
      ?<LogoutButton onClick={this.handleLogoutClick}/>
      :<LogoutButton onClick={this.handleLogoutClick}/>
      }
      </> */}
        <LeftWrapp>
          <Deatails>
            <h3>Order Details</h3>
          </Deatails>
          <OrderLeft>
            <TextLeft>
              <LittleDiv>
                <h4>ORDER NUMBER</h4>
                <h5>1879605573994</h5>
              </LittleDiv>
              <LittleDiv>
                <h4>EMAIL</h4>
                <h5>Vitathemes@gmail.com</h5>
              </LittleDiv>
              <LittleDiv>
                <h4>PAYMENT METHOD</h4>
                <h5>Mastercard*************7865</h5>
              </LittleDiv>
              <LittleDiv>
                <h4>ORDER DATE</h4>
                <h5>October 8,2020</h5>
              </LittleDiv>
            </TextLeft>
            <TextLeft>
            <LittleDiv1>
                <h4>DELIVERY OPTIONS</h4>
                <h5>Standard delivery</h5>
              </LittleDiv1>
              <LittleDiv1>
                <h4>DELIVERY ADDRESS</h4>
                <h5>Kristian holst 34 <br /> old street W1F 7NU London <br /> United Kingdom</h5>
              </LittleDiv1>
              <LittleDiv1>
                <h4>CONTACT NUMBER</h4>
                <h5>+44 8749790988</h5>
              </LittleDiv1>
            </TextLeft>
          </OrderLeft>
        </LeftWrapp>
        <RightWrapp>
          <Deatails>
            <h3>ORDER Summary</h3>
          </Deatails>
          <OrderRight>
            <TextRight>
              <LittleRight>
                <h4>PRODUCT</h4>
                <h4>TOTAL</h4>
              </LittleRight>
              <LittleRight1>
                <Product>
                  <h3>Lira Earrings </h3>
                  <h3>Ollie Earrings</h3>
                  <h3>Kaede Hair Pin</h3>
                </Product>
                <Total>
                  <h3>$64</h3>
                  <h3>$10</h3>
                  <h3>$10</h3>
                </Total>
              </LittleRight1>
              <LittleRight>
                <h4>SUBTOTAL</h4>
                <h3>$85</h3>
              </LittleRight>
              <LittleRight>
                <h4>SHIPPING</h4>
                <h3>Free shipping</h3>
              </LittleRight>
              <LittleRight2>
                <h4>TOTAL</h4>
                <h4>$85</h4>
              </LittleRight2>
            </TextRight>
          </OrderRight>
        </RightWrapp>
    </WrapperOrder>
  )
}

export default Order1