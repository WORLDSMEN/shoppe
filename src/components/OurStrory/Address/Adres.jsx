import React from "react"
import { Billing, Innertdiv,  Inputdiv, Leftdiv, TextField1, TextField2,Div1, TextRight, Btn,} from './style.jsx'
import Select1 from '../Address/Countr'
// var axios = require('axios');

const Address = () => {


  // const [FirstName, setFirstName] = useState('')
  // const [LastName, setLastName] = useState('')
  // const [CompanyName, setCompanyName] = useState('')
  // const [Country, setCountry] = useState('')
  // const [Street, setStreet] = useState('')
  // const [Postcode, setPostcode] = useState('')
  // const [Town, setTown] = useState('')
  // const [Phone, setPhone] = useState('')
  // const [Email, setEmail] = useState('')

  // const Posting = () => {
    
  //   var formdata = new FormData();
  //   formdata.append("first_name",FirstName );
  //   formdata.append("last_name", LastName);
  //   formdata.append("company_name", CompanyName);
  //   formdata.append("country", Country);
  //   formdata.append("address", Street);
  //   formdata.append("postcode", Postcode);
  //   formdata.append("city", Town);
  //   formdata.append("contact_number", Phone);
  //   formdata.append("email", Email);
    
  //   var config = {
  //     method: 'post',
  //     url: 'http://10.10.7.109:8000/api/post-user_register/',
  //     headers: { 
  //       'Authorization': 'token a27f8b69a000b97044c6025cdaeed9c68cd51590', 
  //     },
  //     data : formdata
  //   };
    
  //   axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  // }




  return (
    <Div1>
      <Leftdiv>
            <Billing>Billing Details</Billing>
            <Inputdiv>
              <Innertdiv>
                <TextField2 id="standard-basic" label="First name *" variant="standard" />
                <TextField2 id="standard-basic" label="last name *" variant="standard" />
              </Innertdiv>
            </Inputdiv>
            <Inputdiv>
              <TextField1 id="standard-basic" label="Company Name" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <Select1/>
            </Inputdiv>
            <Inputdiv>
              <TextField1 id="standard-basic" label="Street Address *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 id="standard-basic" label="Postcode / ZIP *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 id="standard-basic" label="Town / City *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 type='number' id="standard-basic" label="Phone *" variant="standard" />
            </Inputdiv>
            <Inputdiv>
              <TextField1 type='email' id="standard-basic" label="Email *" variant="standard" />
            </Inputdiv>
            <Btn>
              <button>SAVE ADDRESS</button>
            </Btn>
        </Leftdiv>
           <TextRight>
           <h2>Shipping address</h2>
           <button >ADD</button>
           <h4>You have not set up this type of address yet.</h4>
         </TextRight>
    </Div1>
    
    )
    
  }

  


export default Address


  
  // <AddressCenter>
  //        <p>The following addresses will be used on the checkout page by default.</p>
  //     <Text>
  //       <TextLeft>
  //         <h2>Billing address</h2>
  //         <button>ADD</button>
  //         <h4>You have not set up this type of address yet.</h4>
  //       </TextLeft>
  //       <TextRight>
  //         <h2>Shipping address</h2>
  //         <button>ADD</button>
  //         <h4>You have not set up this type of address yet.</h4>
  //       </TextRight>
  //     </Text>
  // </AddressCenter> //AddressCenter, Text, TextLeft, TextRight 