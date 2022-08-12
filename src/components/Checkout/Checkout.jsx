import React, { useEffect, useState } from 'react'

import { Alldiv, Billing, CenterDiv, Chexbox1, Chexword, DIV, Div, Divfirts, Divforchexbox, Divradio, Footer,  Innertdiv,  Inputdiv,  Leftdiv, MainDiv, Middle, Middleone, Middletwo, P, Parties, PP, PPP, Radio1, Rdiv,  Rightdiv, Rinnerdiv, Rword,  Smalldiv, TextField1, TextField2, Threeicons, Top, Word,MyPaymentIcon, Word1, Btn, Btnn, Button1, Button2 } from './Checkoutstyle'
import Select1 from '../Checkout/Input'
import Radioicon from '../Checkout/Radio'
import Pay from '../../assets/icons/Icon color.png'
import axios from 'axios';

const Checkout = () => {
 
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Country, setCountry] = useState('')
  const [Street, setStreet] = useState('')
  const [Postcode, setPostcode] = useState('')
  const [Town, setTown] = useState('')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')

  const Posting = () => {
    
    var formdata = new FormData();
    formdata.append("first_name",FirstName );
    formdata.append("last_name", LastName);
    formdata.append("company_name", CompanyName);
    formdata.append("country", Country);
    formdata.append("address", Street);
    formdata.append("postcode", Postcode);
    formdata.append("city", Town);
    formdata.append("contact_number", Phone);
    formdata.append("email", Email);
    
    var config = {
      method: 'post',
      url: 'http://10.10.7.109:8000/api/billing/create/',
      headers: { 
        'Authorization': 'token e1a8d41f35456494ef403f54a90499afb15f690e', 
      },
      data : formdata
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
  }

  
  return (
      <MainDiv>
        <CenterDiv>
            <Word>Checkout</Word>
            <Divfirts>
               <h2>Returning customer? <span>Click here to login</span></h2>
               <h2>Have a coupon? <span>Click here to enter your</span> </h2>
               <Smalldiv>
                <h1>If you have a coupon code, please apply it below.</h1>
                <DIV>
                <Div>
                <label htmlFor="">Coupon Code</label>
                <input type="text" />
                </Div>
                <Button2 variant="contained">APPLY COUPON</Button2>
                </DIV>
               </Smalldiv>
            </Divfirts>

            {/* Next work */}
        <Parties>
          <Leftdiv>
            <Billing>Billing Details</Billing>
            <Inputdiv>
              <Innertdiv>
                <TextField2 onChange={(e)=>{setFirstName(e.target.value)}} id="standard-basic" label="First name *" variant="standard" />
                <TextField2 onChange={(e)=>{setLastName(e.target.value)}} id="standard-basic" label="last name *" variant="standard" />
              </Innertdiv>
            </Inputdiv>
            <Inputdiv>
              <TextField1 onChange={(e)=>setCompanyName(e.target.value)} id="standard-basic" label="Company Name" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <Select1 onChange={(e)=>setCountry(e.target.value)}/>
            </Inputdiv>
            <Inputdiv>
              <TextField1 onChange={(e)=>setStreet(e.target.value)} id="standard-basic" label="Street Address *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 onChange={(e)=>setPostcode(e.target.value)} id="standard-basic" label="Postcode / ZIP *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 onChange={(e)=>setTown(e.target.value)} id="standard-basic" label="Town / City *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 onChange={(e)=>setPhone(e.target.value)} type='number' id="standard-basic" label="Phone *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 onChange={(e)=>setEmail(e.target.value)} type='email' id="standard-basic" label="Email *" variant="standard" />
            </Inputdiv>

                <Alldiv>
                <Divforchexbox>
                  <Chexbox1  defaultChecked/>
                  <Chexword>Create an acoount?</Chexword>
                </Divforchexbox>
                <Divforchexbox>
                  <Chexbox1 defaultChecked/>
                  <Chexword>Ship to a different address?</Chexword>
                </Divforchexbox>
                  <Word1>Order notes</Word1>
                  <P></P>
                </Alldiv>

          </Leftdiv>
         
       {/* Right page */}

          <Rightdiv>
            <Rword>YOUR ORDER</Rword>
            <Rdiv>
              <Rinnerdiv>
                <Top>
                  <p>PRODUCT</p>
                  <p>TOTAL</p>
                </Top>
                <PP></PP>
                <Middle>
                  <div>
                  <p>Lira Earrings </p>
                  <p>Ollie Earrings</p>
                  <p>Kaede Hair Pin</p>
                  </div>
                  <div>
                  <p>$64</p>
                  <p>$10</p>
                  <p>$10</p>
                  </div>
                </Middle>
                  <PPP></PPP>
                  <Middletwo>
                    <p>SUBTOTAL</p>
                    <p>$85</p>
                  </Middletwo>
                  <PPP></PPP>
                  <Middleone> 
                    
                    <p>SHIPPING</p>
                    <p>Free shipping</p>
                  </Middleone>
                  <PPP></PPP>
                  <Footer>
                    <p>TOTAL</p>
                    <p>$85</p>
                  </Footer>

                  <Divradio>
                    <div>
                      <Radio1 value="male" />
                      <p>Direct bank transfer</p>
                    </div>
                    <h1>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account</h1>
                  </Divradio>
                <Threeicons>
                  <Radioicon/>
                  <MyPaymentIcon src={Pay} alt="" />
                </Threeicons>
                <Button1 variant="contained" onClick={Posting}>PLACE ORDER</Button1>
              </Rinnerdiv>
            </Rdiv>
          </Rightdiv>

        </Parties>


        </CenterDiv>
      </MainDiv>
  )
}

export default Checkout