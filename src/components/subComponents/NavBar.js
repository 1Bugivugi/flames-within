import React, { Component } from 'react';
import './subCSS/NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { slide as Menu } from 'react-burger-menu';

class NavBar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='nav'>
        <div className='drawer'>
          <Menu>
            <a id='home' className='menu-item' href='/'>Home</a>
            <a id='about' className='menu-item' href='/'>About Us</a>
            <a id='flames' className='menu-item' href='/'>Flames Within</a>
            <a id='games' className='menu-item' href='/'>Our Games</a>
            <a id='services' className='menu-item' href='/'>Our Services</a>
            <a id='team' className='menu-item' href='/'>Our Team</a>
            <a id='blog' className='menu-item' href='/'>Blog</a>
            <a id='contact' className='menu-item' href='/'>Contact Us</a>
          </Menu>
        </div>
        <Container>
          <div className='pcNav'>
            <Row>
              <Col>
                <a href='#'>
                  Home
                </a>
              </Col>
              <Col>
              <a href='#'>
                  About Us
                </a>
              </Col>
              <Col>
              <a href='#'>
                  Flames Within
                </a>
              </Col>
              <Col>
              <a href='#'>
                  Our Games
                </a>
              </Col>
              <Col>
              <a href='#'>
                  Our Services
                </a>
              </Col>
              <Col>
              <a href='#'>
                  Our Team
                </a>
              </Col>
              <Col>
              <a href='#'>
                  Blog
                </a>
              </Col>
              <Col>
              <a href='#'>
                  Contact Us
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default NavBar;
