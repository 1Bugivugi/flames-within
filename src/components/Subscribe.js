import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../css/Subscribe.css';

class Subscribe extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{span: 10, offset: 1}}>
            <div className='subscribeTitle align-middle'>
              <h3>
                Stay up to date_
              </h3>
              <p className='pt-3'>
                Subscribe and be up to date of our news and information
              </p>
              <div className='subGRP'>
                <input type='text' name='email' placeholder='Your email...' className='mb-2'/>
                <Button variant='primary' className='subButton mt-3'>
                Subscribe
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Subscribe;
