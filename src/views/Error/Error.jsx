import React from 'react';
import {NavLink, Link } from 'react-router-dom'
import { CenterDiv, H1, MainDiv, MuiButton, Mylink, PI } from './StyleError';


const Error = () => {
  return (
    <MainDiv>
      <CenterDiv>
        <H1>404 ERROR</H1>
        <PI>This page not found;back to home and start again</PI>
        <Mylink to='/'>
        <MuiButton  variant='outlined' >HOMEPAGE</MuiButton>
        </Mylink>
      </CenterDiv>
    </MainDiv>
  );
}

export default Error;
