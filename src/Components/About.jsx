import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import About_img from '../assets/stock.jpg';

function About() {
  return (
    <section className='section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg="6">
                   <img src={About_img} alt="" className='w-100 img-fluid'/>
                </Col>
                <Col lg="6 ps-4" sm='ps-2'> 
                  <h2 className='sec-title'> About <span>Thermal Fillers</span> </h2>
                  <p>
                  Aging, in today’s rapid lifestyle has little to do with the number of years you are old. Your skin takes the heat of the pollution, diet habits, climate and mental stress that you confront. So, early signs of aging on the skin are getting increasingly common. Flawless skin and young skin are a dream of many now and we have left no leaf unturned to fulfil the same.


                  </p>
                  <p>
                  A great skin definitely boosts your confidence by multiple folds. A bright skin always shines when the protein and the necessary nutrient store in the skin is intact. Dermal fillers usually fill the necessary collagen and elastin in the skin and improve the skin contour.
                  </p>
                  <p>
                  These dermal fillers are popular injectables that fill in the fine lines and wrinkles on your skin and make it appear fuller and smoother. 
                  </p>
                </Col>

               
            </Row>
        </Container>
    </section>

  )
}

export default About