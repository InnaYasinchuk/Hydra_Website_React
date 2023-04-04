import React from 'react';
import { NavLink } from "react-router-dom";
import "./Home.scss";

import { HomeV1, HomeV2, HomeV3 } from './svg';
import mainImage from '../../pages/Home/images/home-img.webp';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return ( 
  
  <div className='home-page'>
   
    <div className='home-page__border'>
       <img className='home-page__image' src={mainImage} alt='virtual'></img>
        <svg className="home-page_vector1"><HomeV1 /></svg>
       <svg className="home-page_vector2"><HomeV2 /></svg>
       <svg className="home-page_vector3"><HomeV3 /></svg>
    </div>
    
    <h1 className='home-page__title'> <span className='home-page__title_accent1'>Dive</span> Into The Depths <br/> Of <span className='home-page__title_accent2'> Virtual Reality</span></h1>
    <NavLink to='/services' className="home-page__button">Build your world</NavLink>
   <Slider />
  </div> );
}
 
export default Home;