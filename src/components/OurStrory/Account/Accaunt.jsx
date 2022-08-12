
import React from 'react'
import { Acaunt, BigInp,Text, InpBig, Inp, Btn, BtnDiv } from './style'



const Accaunt = () => {
  return (
    <BigInp>
      <Acaunt>
        <h1>Account details</h1>
      </Acaunt>
      <Inp>
        <InpBig component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <Text id="standard-basic" type={'text'} label="First name*" variant="standard" />
            <Text id="standard-basic" type={'text'} label="Last name*" variant="standard" />
            <Text id="standard-basic" type={'text'} label="Display name*" variant="standard" />
            <p>This will be how your name will be displayed in the account section and in reviews.</p>
            <Text id="standard-basic" type={'email'} label="Email address*" variant="standard" />
        </InpBig>
        <h3>Password change</h3>
        <InpBig component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <Text id="standard-basic" type={'text'} label="Current password (leave blank to leave unchanged)" variant="standard" />
            <Text id="standard-basic" type={'text'} label="New password (leave blank to leave unchanged)" variant="standard" />
            <Text id="standard-basic" type={'text'} label="Confirm new password" variant="standard" />
            <BtnDiv>
              <Btn>SAVE CHANGES</Btn>
            </BtnDiv>
        </InpBig>
      </Inp>
    </BigInp>
  )
}

export default Accaunt
