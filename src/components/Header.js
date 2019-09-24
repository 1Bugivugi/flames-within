import React, { Component } from 'react';
import NavBar from './subComponents/NavBar';
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typed from 'react-typed';
import Button from 'react-bootstrap/Button'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <NavBar />
        <div className='content'>
          <Container>
            <Row>
              <Col xs={{span: 10, offset: 1}}>
                <div>
                  <p className='welcome'>And here you path begins</p>
                  <div className='PsSection'>
                    <p className='p1'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className='p2'>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='p3'>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className='typedStuff'>
                    <Typed />
                  </div>
                  <div className='forBtn'>
                    <Button variant='dark' size='lg'>
                      Make your Choice!
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Header;
