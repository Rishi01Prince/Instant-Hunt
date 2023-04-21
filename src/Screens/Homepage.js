import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Carousel from '../Components/Carousel';

export default function Homepage() {
  return (
    <div>
      <div><Navbar /></div>

      <div><Carousel /></div>

      <div className='m-3' style={{ paddingBottom: "400px" }}><Card /></div>
      <div className='m-3' style={{ paddingBottom: "400px" }}><Card /></div>

      <div><Footer/></div>
    </div>
  )
}
