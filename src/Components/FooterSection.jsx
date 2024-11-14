import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function FooterSection() {
  return (
    <div className="footer-sec">
        
            <Container>
                <Row>
                    <Col lg="12">
                    <p className='copy-text'>
                    Copyright@2024 All rights reserved by Vcare
                    </p>
                    </Col>
                </Row>
            </Container>
    
    </div>
  )
}

export default FooterSection