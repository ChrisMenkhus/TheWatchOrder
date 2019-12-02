import React from 'react'
import styled from 'styled-components';

import {H1, P } from '../components';

import marveledition from '../assets/marveledition.png'

import arrowdown from '../assets/arrowdown.png'

const Style = styled.div`
  background: rgb(255,226,0);
  background: linear-gradient(180deg, rgba(255,226,0,1) 0%, rgba(255,163,0,1) 100%);
  height: 100vh;
  z-index: 3;
  width: 100%;



  margin-left: auto;
  margin-right: auto;

  H1 {
    margin-top: 150px;
    margin-bottom: -84px;
  }

  .logo {
    
  }

  .lines {
    margin-bottom: -10px;
    transform: rotate(180deg); 
  }

  .lines2 {
    margin-top: -5px;
  }

  P {
    margin-top: 100px;
    margin-bottom: 100px;
    font-size: 2rem;
  }

  .arrow {
    margin-top: 60px;
  }

`;

function Blank() {
  return(
    <Style>
    <H1 big>THE WATCH ORDER</H1>

    <img className='logo' src={marveledition}/>


    <P big>RELEASE ORDER OF ALL PAST AND FUTURE MARVEL MOVIES</P>

    <H1>Phase 1</H1>
    <img className='arrow' src={arrowdown}/>
    </Style>
  )
}


export default Blank;