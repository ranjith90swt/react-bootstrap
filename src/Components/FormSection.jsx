import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import FormImg from '../assets/why-choose-img.png' ;

function FormSection() {

    const [formData, setFormData] = useState({name:'', email:'', phone:'', location:''})
    const [errors, setErrors] = useState({name:'', email:'', phone:'', location:''})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
   
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevData) => ({...prevData, [name]:value}));
      setErrors((prevErrors) => ({...prevErrors, [name]: ''}));

    }

    const validate = () =>{

        let newErrors ={};
    if(!formData.name) newErrors.name = 'Name is required';
    if(!formData.phone) newErrors.phone ='phone is required';
    if(!formData.location) newErrors.location ='Location is required';
    if(!formData.email) newErrors.email ='Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

         if(!validate()) return ;

        setIsSubmitting(true);
        setSuccessMsg('');
        try{
        const response = await fetch('http://localhost/rest-api/customer/create.php', {
            method:'POST',
            headers:{
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        else{
            const result = await response.json();
            console.log('Success:', result.message);
            setSuccessMsg(result.message);
            setFormData({name:'',email:'',phone:''});
            
        }  

        }
        catch (error){
        console.error('Error:', error);
        
        }
        finally{
        setIsSubmitting(false);
        }

    }
  return (
    <div className='form-sec'>
        <Container className='form-container'>
            <Row className='justify-content-between align-items-center'>
                <Col lg="7">
                  <Form action="" onSubmit={handleSubmit}>
                     <h2 className='sec-title'>We Offer All Services  </h2>

                     <Row>
                        <Col lg='6'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter Name" name='name' onChange={handleChange} value={formData.name}/>
                                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                            </Form.Group>
                        </Col>

                        <Col lg='6'>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="Enter Email" name='email' onChange={handleChange} value={formData.email} />
                                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                            </Form.Group>
                        </Col>

                        <Col lg='6'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter Mobile number" name='phone' onChange={handleChange} value={formData.phone}  />
                                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                            </Form.Group>
                        </Col>

                        <Col lg='6'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Enter Location" name='location' onChange={handleChange} value={formData.location} />
                                {errors.location && <span style={{ color: 'red' }}>{errors.location}</span>}
                            </Form.Group>
                           
                        </Col>

                        <Col lg='12'>
                            <Form.Group className="mb-3">
                                <textarea className='form-control' type="text" placeholder="Comments "  />
                            </Form.Group>
                        </Col>

                        <Col lg='12 text-center'>
                            <Button className='mt-2 btn-secondary' type='submit'>  {isSubmitting ? 'Submitting...' : 'Submit'} </Button>

                            <p className='text-success mt-3' >{successMsg}</p>
                        </Col>

                       
                     </Row>

                    
                  </Form>
                </Col>
                <Col lg='4'>
                   <img src={FormImg} className='form-img w-100 img-fluid'  alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FormSection