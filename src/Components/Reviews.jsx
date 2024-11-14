import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { testimonials } from '../Constants';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';


function Reviews() {
    const options = {
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          600: {
            items: 1,
          },
          700: {
            items: 2,
          },
          800: {
            items: 2,
          },
          992: {
            items: 3,
          }
        },
        nav: true,
        dots: false
    }
  return (
    <div className='testi-sec section'>
      <Container>
        <Row>
          <Col lg='12 text-center'>
            <h2 className='sec-title mb-4'> Testimonials </h2>
          </Col>
        </Row>
        <OwlCarousel className="owl-theme" loop margin={20} autoplay {...options}>

          {testimonials.map((item, index) => (
                      <Card className='testi-box'>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <h6>
                            {item.location}
                            </h6>
                        </Card.Body>
                    </Card>
              ))

          }

        </OwlCarousel>
      </Container>
    
    </div>

  );
}

export default Reviews;
