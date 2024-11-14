import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

import Banner1 from '../assets/banner/banner-1.jpg';
import Banner2 from '../assets/banner/banner-2.jpg';


function Banners() {
  return (
   
    <Carousel>
      <Carousel.Item>
        <Image src={Banner1} className='img-fluid w-100'/>
      </Carousel.Item>
      <Carousel.Item>
       <Image src={Banner2} className='img-fluid w-100'/>
      </Carousel.Item>
      
    </Carousel>

  )
}

export default Banners